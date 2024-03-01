import { Card } from "./Card"

export const HorizontalScrollbar = ({data, bodyPart, setBodyPart, setLoading}) => {

  return (
      <div className="flex overflow-x-scroll whitespace-nowrap no-scrollbar">
        {data.map((item, index) => (
          <div key={index}><Card name ={item} bodyPart ={bodyPart} setBodyPart ={setBodyPart} setLoading={setLoading}/></div>
        ))}
      </div>
  )
}
