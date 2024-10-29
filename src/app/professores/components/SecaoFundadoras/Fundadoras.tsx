'use client'
import { useState, useRef, useEffect } from "react";
import FundadoraIndividual from "./FundadoraIndividual";


export default function Fundadoras()
{
    const [fundadoraDaVez, setFundadoraDaVez] = useState<'Cris' | 'Maria' | "">("")
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() =>
    {
        function changeFundadora(event: MouseEvent)
        {
            const target = event.target as HTMLDivElement; // Cast para HTMLElement

            if (containerRef.current && !containerRef.current.contains(target))
            {
                setFundadoraDaVez(""); // Fecha o texto ao clicar fora
            }
        }

        if (typeof window !== 'undefined') window.addEventListener("click", changeFundadora);

        return () => { window.removeEventListener("click", changeFundadora); }

    }, []);



    return <div className="w-full h-full 
    flex flex-1 justify-center align-middle items-center "
        ref={containerRef}
    >
        <FundadoraIndividual
            key={'CrisFundadora'}
            crisOuMaria={'Cris'}
            fundadoraDaVez={fundadoraDaVez}
            setFundadoraDaVez={setFundadoraDaVez}
        />

        <FundadoraIndividual
            key={'MariaFundadora'}
            crisOuMaria={'Maria'}
            fundadoraDaVez={fundadoraDaVez}
            setFundadoraDaVez={setFundadoraDaVez}
        />


    </div>

}
