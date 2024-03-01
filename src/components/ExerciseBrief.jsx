import bodyPart from "../Assets/muscles.png"
import equipment from "../Assets/gym_equipment.png"
import target from "../Assets/target.png"
import loader2 from "../Assets/loader2.gif"

export const ExerciseBrief = ({ exerciseDetail, onLoading }) => {
  // Check if exerciseDetail and exerciseDetail.instructions exist
  const exerciseSteps = exerciseDetail?.instructions || [];

  return (
   <div>
    {onLoading ?(
        <div className='flex items-center justify-center'>
           <img src={loader2} alt="loader" />
        </div>
    ):(
  <div className="flex-col grid md:grid-cols-2 relative items-center justify-center md:mt-[-120px]">
    <div className="flex items-center justify-center">
        <img className="w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] md:w-[300px] md:h-[300px] lg:mt-[100px]
        md:mt-[-170px] rounded-xl" src={exerciseDetail.gifUrl} alt="Image" />
    </div>

    <div className="p-3">
         <div className="text-left p-4 mt-12 font-bold text-4xl">
           <h1>{exerciseDetail.name}</h1>
         </div>

        {exerciseSteps.map((steps, index) => (
          <div className="p-1 mt-2 font-semibold" key={index}>
            <h1>{index + 1}:{"  "}{steps}</h1>
          </div>
        ))}

    <div>
      <div className="flex items-center">
        <div className="mt-5 flex w-[70px] h-[70px] bg-yellow-200 rounded-full items-center justify-center ml-5">
          <img className="w-[50px] h-[50px]" src={bodyPart} alt="bodyPart" />
        </div>
        <h1 className="ml-5 font-semibold">{exerciseDetail.bodyPart}</h1>
      </div>

      <div className="flex items-center">
           <div className="mt-5 flex w-[70px] h-[70px] bg-green-200 rounded-full items-center justify-center ml-5">
              <img className="w-[50px] h-[50px]" src={equipment} alt="equipment" />
            </div>
            <h1 className="ml-5 font-semibold">{exerciseDetail.equipment}</h1>
      </div>

      <div className="flex items-center">
        <div className="mt-5 flex w-[70px] h-[70px] bg-orange-300 rounded-full items-center justify-center ml-5">
            <img className="w-[50px] h-[50px]" src={target} alt="target" />
        </div>
        <h1 className="ml-5 font-semibold">{exerciseDetail.target}</h1>
      </div>  

     </div>
   </div>

  </div>)}
  </div> 
  );
};