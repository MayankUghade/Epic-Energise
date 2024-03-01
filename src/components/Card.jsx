import image from "../Assets/logo.png";

export const Card = ({ name, bodyPart, setBodyPart, setLoading }) => {
  const isSelected = bodyPart === name;

  return (
    <div className="p-4">
      <div
        className={`w-[250px] h-[250px] mb-3 flex flex-col items-center bg-white justify-center border hover:shadow-lg rounded-sm transition-transform duration-300 transform scale-100 hover:scale-110 ${isSelected ? 'border-t-[4px] border-t-purple-500' : ''} `}
        onClick={() => {
          setBodyPart(name);
          setLoading(true);
          window.scrollTo({ top: 1600, behavior: "smooth" });
        }}
      >
        <img className="w-[80px] h-[80px]" src={image} alt={name} />
        <h3 className="mt-10 font-bold text-3xl text-purple-500 text-center">{name}</h3>
      </div>
    </div>
  );
};
