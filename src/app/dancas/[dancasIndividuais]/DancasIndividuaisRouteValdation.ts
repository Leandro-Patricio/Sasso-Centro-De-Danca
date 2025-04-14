import { dancas } from "@/app/Components/CardsDancas/Dancas";
import { notFound } from "next/navigation";
import { z } from "zod";


const dancaSchema = z.object({
    nome: z.string().refine(
        (nome) => dancas.some((danca) =>
        {
            const nomeDanca = !nome.includes('ciente') ? nome.replace(/-/g, ' ') : nome
            return danca.nome.toLowerCase() === nomeDanca.toLowerCase()
        }
        ),
        { message: `Estilo de dança não encontrado: ${dancas[0].nome}` }
    ),
});


export default async function DancasIndividuaisRouteValidation(params: Promise<{ dancasIndividuais: string }>)
{
    const { dancasIndividuais } = await params
    const nomeDancaNormalizado = !dancasIndividuais.includes('ciente') ? dancasIndividuais.replace(/-/g, ' ') : dancasIndividuais

    try
    {
        const resultadoValidacao = dancaSchema.safeParse({ nome: nomeDancaNormalizado });

        if (!resultadoValidacao.success) return notFound();

        // Encontra a dança (com comparação case insensitive)
        const danca = dancas.find(d => d.nome.toLowerCase() === nomeDancaNormalizado.toLowerCase());


        if (!danca)
        {
            return notFound();
        } else return danca;
    } catch (error)
    {
        console.error("Erro ao carregar página da dança:", error);
        return notFound();
    }

}
