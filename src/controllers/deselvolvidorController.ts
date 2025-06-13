import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { deselvolvidorService } from "../Services/deselvolvidorService";

export async function deselvolvidorController(app: FastifyInstance) {
  app.post("/creaty", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = request.body as CreateDesevolvidor
      const novo = await deselvolvidorService.register(body);
      return reply.code(201).send(novo);
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message });
    }
  });

  app.get("/buscar", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const buscar = await deselvolvidorService.getAll()
      return reply.code(200).send(buscar);
    } catch (error: any) {
      return reply.code(500).send({ erro: error.message });
    }
  });

  app.get("/buscar/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { id } = request.params as { id: string }
      return reply.code(200).send(id);
    } catch (error: any) {
      return reply.code(404).send({ erro: error.message });
    }
  });

  app.patch("/alterar", async (request: FastifyRequest, reply: FastifyReply) => {
    const body = request.body
    try {
      await deselvolvidorService.patch()
      return reply.code(200).send();
    } catch (error: any) {
      return reply.code(400).send({ erro: error.message })
    }
  })

  app.delete("/deletar/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string }
    try {
      await deselvolvidorService.deleteById((id));
      return reply.code(204).send();
    } catch (error: any) {
      return reply.code(404).send({ erro: error.message });
    }
  });
}
