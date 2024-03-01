import { ExerciseCard } from "./ExerciseCard";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import loader from "../Assets/loader2.gif";
import { exerciseOptions, fetchData } from "../Utils/FetchData"

export const Exercise = ({ exercises, bodyPart, setExercises, loading, setLoading}) => {

  const [currentPage, setcurrentPage] = useState(1);
  const exercisePerPage = 9;

  const lastExerciseIndex =  currentPage * exercisePerPage;
  const firstExerciseIndex = lastExerciseIndex - exercisePerPage;

  const selectedExerciseAray = Array.isArray(exercises) ? exercises.slice(firstExerciseIndex, lastExerciseIndex +1):[];

  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchBodyPartExercise = async()=>{
      let exerciseData = []
      
      if(bodyPart === "all"){
        exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=100", exerciseOptions)
      }else(
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`, exerciseOptions)
      )

      setExercises(exerciseData)
      setLoading(false)
    }
    
    fetchBodyPartExercise()
  }, [bodyPart]);
  

  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-center font-bold text-5xl">Results here!!</h1>
    {loading ? (
      <img className="mt-12 p-5" src={loader} alt="loading gif"/>
    ) : (
      <div className="flex justify-center items-center flex-wrap gap-[50px] p-[50px]">
        {selectedExerciseAray.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} bodyParts={bodyPart} setExercises={setExercises} setLoading = {setLoading}/>
        ))}
      </div>
      )}
    <div className="justify-center mt-[50px] p-5">
      {exercises.length > 9 && (
        <Pagination shape="rounded" count={Math.ceil(exercises.length / exercisePerPage)} page={currentPage} onChange={paginate} />
      )}
    </div>
  </div>  
  );
};
