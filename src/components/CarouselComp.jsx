import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../Assets/Gym_image1.jpg"
import image2 from "../Assets/Gym_image2.jpg"

export const CarouselComp = () => {
  return (
    <div>
      <Carousel
        className="p-10 rounded-lg"
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={1550}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img className="rounded-xl sm:w-1/2 md:w-3/4 max-w-[450px]" src={image2} alt="Girl working out" />
        </div>

        <div>
          <img className="rounded-xl sm:w-1/2 sm:h-1/2 md:w-3/4 max-w-[450px]" src={image1} alt="Boy working out" />
        </div>
      </Carousel>
    </div>
  )
}
