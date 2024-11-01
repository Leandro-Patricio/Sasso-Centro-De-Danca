'use client'
import { ReactNode, useEffect, useRef, useState } from "react";
import Hamburguer from "./Hamburguer";

type SmallNavProps = {
    children: ReactNode
}

export function SmallNav({ children }: Readonly<SmallNavProps>)
{
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() =>
    {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
        {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) =>
    {
        if (navRef.current && !navRef.current.contains(event.target as Node))
        {
            setIsOpen(false);
        }
    };

    return (
        <nav className={` fixed top-0 right-0 flex sm:hidden flex-col z-20 `} ref={navRef}>
            <div
                role="presentation"
                onClick={() => setIsOpen(!isOpen)}
                className={`z-10 top-5 right-9 absolute`}
            >
                <Hamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <div
                className={` ${isOpen ? "bg-redMain bg-opacity-[98%] -translate-x-32" : "translate-x-20"}
           absolute h-screen w-32 px-5 pt-5 shadow-md shadow-redMain/50  transition-all duration-500
           `}
            >
                <span className={`h-full w-full`}>
                    {children}

                </span>
            </div>
        </nav>
    );
}