import { useState, useEffect } from "react"
import { exerciseOptions, fetchData } from "../Utils/FetchData"
import { HorizontalScrollbar } from "./HorizontalScrollbar"

export const SearchExercise = ({setExercises, bodyPart, setBodyPart, setLoading}) => {
  const[search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async() =>{
      const bodyPartList = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
      setBodyParts(['all', ...bodyPartList]);
    }

    fetchExerciseData();
  }, [])

  const handelSubmit = async()=>{
    window.scrollTo({top:1600, behavior:"smooth"})
    if(search){
      try {
        const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=300", exerciseOptions);

        const searchedExercise = exerciseData.filter(
          (exercise)=>exercise.name.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
        )
        
        setSearch('')
        setExercises(searchedExercise)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false)
      }
    }
  } 

  return (
    <div className="mt-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl text-center">Lets Begin The Grind!!! <br/>Search your favourite exercise</h1>

        <div className=" flex justify-center items-center mt-12 mb-12">
          <input 
            type="text" 
            className="w-[350px] md:w-[550px] lg:w-[850px] ml-2 pl-5 pr-5 px-5 py-3 rounded-md bg-transparent border-2 border-black focus:outline-none focus:border-purple-500 transition-all transition-300" 
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
              setLoading(true);
            }}
            placeholder="Search Exercises...."/>
          <button 
            className="bg-purple-500 hover:bg-purple-400 px-3 py-3 text-lg text-white font-bold text-md rounded-md ml-2"
            onClick={handelSubmit}
            >
              search
            </button>
          </div>  

          {/* the horizontal scrollbar */}
            <div className="p-12">
              <HorizontalScrollbar data={bodyParts} bodyPart ={bodyPart} setBodyPart ={setBodyPart} setLoading={setLoading}/>
              <h1 className="text-right mr-5 mt-3 text-3xl">scroll➡️</h1>
            </div>
    </div>
  )
}
