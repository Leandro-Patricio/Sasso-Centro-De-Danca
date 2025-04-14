export function capitalizarIniciais(str: string): string
{
    return str
        .split(' ') // divide a string em palavras
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' '); // junta as palavras novamente
}
