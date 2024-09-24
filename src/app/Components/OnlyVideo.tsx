

export default async function OnlyVideo()
{

    return <section className="flex flex-col justify-center w-full">
        <div id="video-container" className=" w-full relative ">
            <video src="/videos/ticTeaser.mp4" width={200} height={100}
                controls
                autoPlay
                muted
                preload='auto'
                playsInline
                loop
                className={`w-full`}>
                Este vídeo não pode ser reproduzido no momento.
            </video>
        </div>

    </section>
}