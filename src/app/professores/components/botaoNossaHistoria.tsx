'use client'

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function BotaoNossaHistoria()
{
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
    const nossaHistoriaParams = params.get('nossaHistoria')

    const nossaHistoriaAberta = nossaHistoriaParams ?? false

    const handleOpen = () =>
    {
        if (nossaHistoriaAberta)
        {
            params.delete('nossaHistoria')
        } else
        {
            params.set('nossaHistoria', 'true')
        }
        router.replace(`?${params.toString()}`, { scroll: false });


    }

    return <button
        onClick={handleOpen}
        className="
    mt-10
    bg-[#7800FF] text-white rounded-lg px-4 py-2 font-semibold transition-all duration-700 ease-in-out transform hover:bg-[#FBEE09] hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7800FF] focus:ring-offset-2">
        {nossaHistoriaAberta ? 'Obrigado por ler nossa historia! Clique aqui fechar' : 'Ficou interessada? Clique aqui e saiba mais sobre a Sasso'

        }


    </button>
}
