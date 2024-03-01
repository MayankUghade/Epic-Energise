import React from 'react';
import { ExerciseCard } from "../components/ExerciseCard";
import loader2 from "../Assets/loader2.gif"

export const SimilarExercise = ({ targetExercise, target, equipment, equipmentExercise, onLoading }) => {
  return (
    <div>
      {onLoading ? (
        <div className='flex items-center justify-center'>
          <img src={loader2} alt="loader" />
        </div>
      ):(
    <div className='flex flex-col'>
      <h1 className='p-12 font-bold text-3xl'>Similar exercises to train <span className='text-purple-500'>{target}</span></h1>
      <div className='flex overflow-x-scroll gap-8 p-10 '>
      {Array.isArray(targetExercise) && targetExercise.map((item, index) => (
      <div key={index}>
        <ExerciseCard 
          onClick={window.scrollTo({ top: 40, behavior: "smooth" })}
          exercise={item} />
      </div>
      ))}
      </div>

      <div>
      <h1 className='p-12 font-bold text-3xl'>Similar exercise using <span className='text-purple-500'>{equipment}</span></h1>
      <div className='flex overflow-x-scroll gap-8 p-10 '>
      {Array.isArray(equipmentExercise) && equipmentExercise.map((item, index) => (
        <div key={index}>
          <ExerciseCard 
          onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
          exercise={item} />
        </div>
      ))}
      </div>
      </div>
    </div>)}
  </div>
  );
}
