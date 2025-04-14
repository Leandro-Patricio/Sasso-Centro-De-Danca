'use client'


import dynamic from "next/dynamic";

const MapaSasso = dynamic(() => import("./MapaSasso"),
    {
        ssr: false,
    }
);



export default function MapaLocalizaçãoSasso()
{
    return <MapaSasso key="dynamic-map" />
}

