import { useState } from "react"
import { Herotext } from "../components/Herotext"
import { SearchExercise } from "../components/SearchExercise"
import { Exercise } from "../components/Exercise"

export const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  return (
    <div>
      <Herotext/>

      <SearchExercise
       setExercises = {setExercises}
       bodyPart={bodyPart}
       setBodyPart={setBodyPart}
       setLoading={setLoading}/>

      <Exercise
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        loading = {loading}
        setLoading = {setLoading}/> 
    </div>
  )
}

