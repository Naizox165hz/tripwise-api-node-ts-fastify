import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import dayjs from "dayjs";
import nodemailer from "nodemailer";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { getMailClient } from "../lib/mail";

export async function createTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/register",
    {
      schema: {
        // validation for input data
        body: z.object({
          destination: z.string().min(4),
          starts_at: z.coerce.date(),
          ends_at: z.coerce.date(),
          owner_name: z.string(),
          owner_email: z.string().email(),
          emails_to_invite: z.array(z.string().email()),
        }),
      },
    },
    async (request) => {
      const { destination, starts_at, ends_at, owner_name, owner_email, emails_to_invite } =
        request.body;

      if (dayjs(starts_at).isBefore(new Date())) {
        throw new Error("Invalid data start trip");
      }

      if (dayjs(ends_at).isBefore(starts_at)) {
        throw new Error("Invalid trip end date");
      }

      const trip = await prisma.trip.create({
        data: {
          destination,
          starts_at,
          ends_at,
          participants: {
            createMany: {
              data: [
                {
                  name: owner_name,
                  email: owner_email,
                  is_owner: true,
                  is_confirmed: true,
                },
                ...emails_to_invite.map(email => {
                  return { email }
                })
              ],
            }
          }
        },
      });


      const formattedStartDate = dayjs(starts_at).format('MMMM/DD/YYYY');
      const formattedEndDate = dayjs(ends_at).format('MMMM/DD/YYYY');


      const confirmationLink = `http://localhost:3333/trips/${trip.id}/confirm`;

      const mail = await getMailClient();

      const message = await mail.sendMail({
        from: {
          name: "Trip Wise",
          address: "no-reply@tripwise.com",
        },
        to: {
          name: owner_name,
          address: owner_email,
        },
        subject: `Confirm your trip to ${destination} in ${formattedStartDate}`,
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>Trip Confirmation</title>
          </head>
          <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
            <table width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 20px;">
              <tr>
                <td>
                  <h2 style="color: #2c3e50;">Trip Confirmation</h2>
                  <p>Hello,</p>
                  <p>Your trip to <strong>${destination}</strong> has been <span style="color: green;">successfully confirmed</span>! 🎉</p>
                  <p>
                    <strong>Start Date:</strong> ${formattedStartDate}<br/>
                    <strong>End Date:</strong> ${formattedEndDate}
                  </p>
                  <p>Please confirm your trip by clicking the button below:</p>
                  <p style="text-align: center;">
                    <a href="${confirmationLink}" 
                       style="display: inline-block; padding: 12px 24px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                      Confirm Trip
                    </a>
                  </p>
                  <p>If you have any questions, feel free to reply to this email.</p>
                  <p>Safe travels!<br/>The TripWise Team 🌍</p>
                </td>
              </tr>
            </table>
          </body>
        </html>
        `.trim()  
      });

      console.log(nodemailer.getTestMessageUrl(message));
      return { tripId: trip.id };
    }
  );
}
