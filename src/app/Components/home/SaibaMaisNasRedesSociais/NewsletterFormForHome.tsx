'use client'

export default function NewsletterFormForHome()
{
    return <form action="" className="w-fit rounded-full pl-2 bg-white relative z-10
    overflow-hidden flex justify-between focus-within:ring-[2px] focus-within:ring-inset  focus-within:ring-redMain focus-within:z-0">

        <input
            type="email"
            className="w-60 text-black focus:outline-none bg-transparent"
            placeholder="Seu e-mail"
        />

        <button className="bg-yellowMain text-black h-full w-fit p-4 rounded-full
    relative focus:ring-4 focus:ring-purpleMain focus:ring-inset focus:outline-none">
            Enviar
        </button>

    </form>
}