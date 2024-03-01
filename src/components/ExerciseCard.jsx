import {Link} from "react-router-dom"
export const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/${exercise.id}`}>
    <div className=" flex flex-col items-center w-[380px] h-[430px] bg-white font-medium text-sm rounded-md border-2 hover:border-purple-500 transition-transform transform hover:scale-110 hover:cusror-pointer">
        <img className="w-[250px] h-[250px] mb-5 mt-2" src={exercise.gifUrl} alt= "image" />

        <div className="flex flex-row gap-3 mb-6">
           <div className="bg-yellow-400 p-[5px] rounded-xl">
               <p>{exercise.bodyPart}</p>
           </div>
           <div className="bg-green-400 p-[5px] rounded-xl">
               <p>{exercise.equipment}</p>
           </div>
           <div className="bg-orange-400 p-[5px] rounded-xl">
               <p>{exercise.target}</p>
           </div>
        </div>

        <div className="font-bold ml-[8px] text-xl p-3">
            <h1>{exercise.name}</h1>
        </div>
    </div>
    </Link>
  )
}
