import InfiniteSlider from "./Slider"


const imagesLamina = ['/images/lamina/lamina1.jpg', '/images/lamina/lamina2.jpg', '/images/lamina/lamina3.jpg']
const imagesTic = ['/images/tic/tic1.JPG',
    '/images/tic/tic2.JPG',
    '/images/tic/tic3.JPG',
    '/images/tic/tic4.JPG',
    '/images/tic/tic5.JPG',]
export default async function VideosAndSliders()
{
    return <section className="flex justify-center w-full">

        <video src="/videos/ticTeaser.mp4" width={200} height={100}
            controls
            autoPlay
            muted
            preload='auto'
            playsInline
            className="w-4/5" />

        <div className="flex flex-col w-1/5">

            <InfiniteSlider
                images={imagesLamina} />
            <InfiniteSlider
                images={imagesTic} />
        </div>

    </section>
}