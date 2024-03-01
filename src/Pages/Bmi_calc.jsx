import { BMI_calculations, weight_category, fetchData } from "../Utils/FetchData"
import loader from "../Assets/loader2.gif"
import { useState } from "react"

export const Bmi_calc = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [loading, setLoading] = useState(false)
    const [bodyMassIndex , setBodyMassIndex] = useState(0)
    const [catageory, setcatageory] = useState("Nothing yet")

    const fetchBmi = async()=>{
        const BMI_data = await fetchData(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`,BMI_calculations)
        setBodyMassIndex(BMI_data.bmi)
        console.log(BMI_data)
        const Category = await fetchData(`https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=${bodyMassIndex}`, weight_category)
        setcatageory(Category.weightCategory)
        console.log(Category)
        setLoading(false)
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl text-center font-bold mb-10 mt-[-25px]">Calculate Your <span className="text-purple-500">Body Mass Index</span> before starting out</h1>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-5 w-[430px] h-[400px]">
               <input
                className="p-3 mt-3 rounded-md w-[350px] bg-transparent border-2 border-black" 
                type="text" 
                placeholder="weight in kilograms"
                onChange={(e) => {setWeight(e.target.value)}}/>
               <input 
               className="p-3 mt-3 rounded-md w-[350px] bg-transparent border-2 border-black"  
               type="text" 
               placeholder="Height in feet" 
               onChange={(e) => {setHeight((e.target.value)/3.281)}}/>
               <button 
                 className="p-3 mt-10 bg-purple-500 w-[100px] text-xl font-semibold rounded-md"
                 onClick={() => { fetchBmi(), setLoading(true)}}>
                    Enter
               </button>

                { loading ? (
                    <img className="w-[100px] h-[100px] mt-10" src={loader} alt="loading gif"/>
                   ):(
                    <div className="flex flex-col mt-12">
                        <h1 className="text-2xl font-semibold mb-3"><span className="text-purple-500 font-bold">BMI:  </span>{bodyMassIndex}</h1>
                        <h1 className="text-2xl font-semibold mb-3"><span className="text-purple-500 font-bold">Weight Category  :</span>{catageory}</h1>
                    </div>
                   )
                }  
            </div>   
        </div>
    </div>
  )
}
