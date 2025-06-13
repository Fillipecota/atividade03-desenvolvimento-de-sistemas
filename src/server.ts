import cors from '@fastify/cors';
import fastify from 'fastify';
import { deselvolvidorService } from './Services/deselvolvidorService';
import { deselvolvidorController } from './controllers/deselvolvidorController';

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', "PATCH", 'DELETE']
}) // ADICIONAR O CORS

app.register(deselvolvidorController); 
// ADICIONA O CONTROLLER
app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333!!!")
})