import { features } from "../data";

function Card({items}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:py-10 md:mx-10">
      {items.map((feature, index) => {
        const Icon = items.icon; 
        return (
          <div key={index} className="flex flex-col items-center text-center p-10  bg-white rounded-lg shadow-md">
            <Icon className="text-blue-900 text-4xl mb-4 " /> 
            <h3 className="font-bold text-xl text-blue-950">{items.name}</h3>
            <p className="text-gray-700 mt-2">{items.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;