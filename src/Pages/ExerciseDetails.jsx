import { ExerciseBrief } from "../components/ExerciseBrief";
import { SimilarExercise } from "../components/SimilarExercise";
import { fetchData, exerciseOptions } from "../Utils/FetchData";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetExercise, setTargetExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const [onLoading, setOnLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const fetchRequireExerxiseData = async () => {
      try {
        const exerciseInformation = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseInformation);

        const targetMuscleExerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseInformation.target}`,
          exerciseOptions
        );
        setTargetExercise(targetMuscleExerciseData);

        const equipmentExerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseInformation.equipment}`,
          exerciseOptions
        );
        setEquipmentExercise(equipmentExerciseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setOnLoading(false)
    };

    fetchRequireExerxiseData();
  }, [id]);

  return (
    <div>
      <ExerciseBrief exerciseDetail={exerciseDetail} onLoading={onLoading}/>
      <SimilarExercise
        targetExercise={targetExercise}
        target={exerciseDetail.target}
        equipmentExercise={equipmentExercise}
        equipment={exerciseDetail.equipment}
        onLoading={onLoading}
      />
    </div>
  );
};
