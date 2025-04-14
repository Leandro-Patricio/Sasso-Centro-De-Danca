import TextoGrifado from "../equipe/components/SecaoNossaHistoria/TextoGrifado";

export function renderHighlightedText(text: string)
{
    // Divide o texto usando o marcador {{highlightedText: ...}}
    const parts = text.split(/{{highlightedText:(.*?)}}/s);

    return parts.map((part: string, index: number) =>
    {
        // Se for uma parte destacada, retorna o componente TextoGrifado
        if (index % 2 === 1)
        {
            return <TextoGrifado key={part} texto={part.trim()} />;
        }
        // Caso contrário, retorna o texto normal
        return part;
    });
}
