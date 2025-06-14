import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export async function confirmTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/trips/:tripId/confirm",
    {
      schema: {
        // validation for input data
        params: z.object({
          tripId: z.string().uuid(),
        }),
      },
    },
    async (request) => {
      return { tripId: request.params.tripId };
    }
  );
}
