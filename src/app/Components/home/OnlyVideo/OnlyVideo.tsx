'use client'

import dynamic from "next/dynamic"


const Video = dynamic(() => import("./VideoComponent"),
    {
        ssr: false,
    })

export default function OnlyVideo()
{
    return <Video />
}