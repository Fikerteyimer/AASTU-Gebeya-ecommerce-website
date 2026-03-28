import React from "react";

function Card({ items = [], className = "" }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        const number = item.number;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            {Icon ? (
              <Icon className="text-blue-900 text-3xl mb-3" />
            ) : number ? (
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-900 text-lg font-bold mb-3">
                {number}
              </div>
            ) : null}

            <h3 className="font-bold text-lg text-blue-950">
              {item.name}
            </h3>
          
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;