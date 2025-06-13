
import { Desenvolvidor } from "@prisma/client";
import { prisma } from "../prisma/client";


class DeselvolvidorService {
    public async register({ name, bio, techs, avatar_url, github_url }: CreateDesevolvidor): Promise<void> {
      
        const user: Desenvolvidor = {
            id: crypto.randomUUID(),
            name: name,
            bio: bio,
            techs: techs,
            avatar_url:avatar_url,
            github_url: github_url,
            created_at: new Date(),
            updated_at: new Date()
        }

        await prisma.desenvolvidor.create({ data: user })
    }

    public async getAll() {
        const desenvolvidorBanco = await prisma.desenvolvidor.findMany({
            orderBy: {
                created_at: "desc",
            },
        });

        return desenvolvidorBanco.map((item) => ({
            id: item.id,
            name: item.name,
            bio: item.bio,
            techs: item.techs,
            avatar_url:item.avatar_url,
            github_url:item.github_url,
            created_at:item.created_at,
            updated_at: item.updated_at
        }));
     }

    public async getById() { 
        // const desenvolvidorId = await prisma.desenvolvidor.findUnique({ where: { id } });

        
        
    }

    public async patch() { }
   

    public async deleteById(id: string) {
        const deletarDesevolvidor = await prisma.desenvolvidor.findUnique({ where: { id } });
        
        if (!deletarDesevolvidor) {
            throw new Error("desevolvidor não encontrada");
        }
        await prisma.desenvolvidor.delete({ where: { id } });   
    }
}

export const deselvolvidorService = new DeselvolvidorService();




