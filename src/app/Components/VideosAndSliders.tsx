import InfiniteSlider from "./Slider"


const imagesLamina = ['/images/lamina/lamina1.jpg', '/images/lamina/lamina2.jpg', '/images/lamina/lamina3.jpg']
const imagesTic = ['/images/tic/tic1.JPG',
    '/images/tic/tic2.JPG',
    '/images/tic/tic3.JPG',
    '/images/tic/tic4.JPG',
    '/images/tic/tic5.JPG',]
export default async function VideosAndSliders()
{
    return <section className="flex flex-col sm:flex-row justify-center w-full">

        <div id="video-container" className=" w-full sm:w-4/5 sm:-translate-x-3 ">
            <video src="/videos/ticTeaser.mp4" width={200} height={100}
                controls
                autoPlay
                muted
                preload='auto'
                playsInline
                loop
                className="w-full  ">
                Este vídeo não pode ser reproduzido no momento.
            </video>
        </div>


        <div className="sm:flex flex-col w-1/5 -translate-x-1 hidden">

            <InfiniteSlider
                images={imagesLamina} />
            <InfiniteSlider
                images={imagesTic} />
        </div>

    </section>
}