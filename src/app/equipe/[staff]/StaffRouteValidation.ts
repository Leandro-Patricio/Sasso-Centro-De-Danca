import { notFound } from "next/navigation";
import { z } from "zod";
import { professores, naoProfessores, socias } from "../components/SecaoDemaisEquipe/SecaoDemaisEquipe";

const allStaff = [...professores, ...naoProfessores, ...socias];

const staffSchema = z.object({
    nome: z.string().refine(
        (nome) => allStaff.some((staff) =>
            staff.nome.toLowerCase() === nome.toLowerCase().replace(/-/g, ' ')
        ),
        { message: "Staff não encontrado" }
    ),
});


export default async function StaffRouteValidation(params: Promise<{ staffUrl: string }>)
{
    const { staffUrl } = await params
    const nomeStaffNormalizado = staffUrl.replace(/-/g, ' ');

    try
    {
        const resultadoValidacao = staffSchema.safeParse({ nome: nomeStaffNormalizado });

        if (!resultadoValidacao.success) return notFound();

        // Encontra a dança (com comparação case insensitive)
        const staff = allStaff.find((staff) =>
        {
            if (staff.nome.toLowerCase() === nomeStaffNormalizado.toLowerCase())
                return staff
        }
        )

        if (!staff)
        {
            return notFound();
        } else return staff;


    } catch (error)
    {
        console.error("Erro ao carregar página do staff:", error);
        return notFound();
    }

}