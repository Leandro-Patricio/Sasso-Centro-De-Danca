

const tagToColor = {
    // Níveis de habilidade  
    'iniciante': 'bg-[#6FD08C]',  // Verde claro (suave)  
    'intermediário': 'bg-[#F7B32B]', // Amarelo (atenção)  
    'avançado': 'bg-[#E71D36]',  // Vermelho (intenso)  

    // Intensidade  
    'leve': 'bg-[#A2D6F9]',  // Azul claro (calmo)  
    'moderado': 'bg-[#FF9F1C]',  // Laranja (energia média)  
    'intenso': 'bg-[#D62246]',  // Vermelho escuro (potência)  

    // Partes do corpo  
    'pés': 'bg-[#84C7D0]',  // Azul-esverdeado (associado a movimento suave)  
    'quadril': 'bg-[#FF6B6B]',  // Rosa (sensual/vibrante)  
    'corpo inteiro': 'bg-[#5E2BFF]',  // Roxo (complexidade)  

    // Público/Contexto  
    'adulto': 'bg-[#8A4F7D]',  // Roxo escuro (sofisticação)  
    'criança': 'bg-[#FFBE86]',  // Laranja claro (divertido)  
    'dança de grupo': 'bg-[#06BEE1]',  // Azul turquesa (coletivo)  

    // Objetivos  
    'para emagrecer': 'bg-[#4CB944]'  // Verde (saúde)  
};


export default async function TagsDeDanca({ tags }: Readonly<{ tags: string[] }>)
{
    console.log(tags);
    return <div className="flex gap-2 w-full justify-evenly">
        {tags.map((tag, index) => (
            <span key={tag + index}
                className={`text-black px-2 py-1 w-fit
                rounded-full  font-detail font-semibold ${tagToColor[tag as keyof typeof tagToColor]}`}>

                {tag}
            </span>
        ))}
    </div>
}