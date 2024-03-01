import { CarouselComp} from "./CarouselComp"
export const Herotext = () => {
  return (
  <div className="felx grid md:grid-cols-2 relative">

    <div className="font-bold p-8 lg:mt-10 lg:ml-10">
      <h2 className="text-4xl md:text-6xl lg:text-6xl mb-5">Welcome to</h2>
      <h1 className="text-6xl md:text-7xl lg:text-7xl mt-2 mb-7 text-purple-500">Epic-Energize</h1>
      <h2 className="mt-4 text-3xl md:text-5xl lg:text-5xl mb-5">Train, Transform, Triumph</h2> 
      <p className="mt-7 text-xl md:text-2xl lg:text-2xl">Explore Effective Exercises right now!!</p>
      <button
       onClick={()=>{window.scrollTo({ top: 700, behavior: "smooth" })}}
       className="mt-7 bg-purple-500 rounded-lg text-white font-bold text-xl lg:text-2xl pl-10 pr-10 p-3"
       >Explore now
       </button>
    </div>

    <div className="lg:mt-[-150px]">
      <CarouselComp/>
    </div>

  </div>
  )
}
