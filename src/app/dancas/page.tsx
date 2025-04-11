
import Image from "next/image";

export default async function Dancas(/* { children }: Readonly<{ children: React.ReactNode }> */)
{
    return <section className="w-full h-full pt-32 relative   z-10">


        <Image src={'/images/dancas/dancaParaSecaoDancas.jpg'} width={5000} height={5000} alt="imagem inicial seção dancas"
            className="w-screen h-auto translate-y-10 -z-10 absolute inset-0" />
        <h1>Dance com a SASSO</h1>



    </section>
}