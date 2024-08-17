import React from 'react';

interface NutritionalValue {
  label: string;
  value: string;
}

interface FruitData {
  name: string;
  nutritionalValues: NutritionalValue[];
}

const NeutriTable: React.FC = () => {
  // vansh ye mock data hai, actual data ko use karna hai from api 
  const fruitData: FruitData = {
    name: "Banana",
    nutritionalValues: [
      { label: "Calories", value: "89 kcal" },
      { label: "Carbohydrates", value: "23 g" },
      { label: "Protein", value: "1.1 g" },
      { label: "Fat", value: "0.3 g" },
      { label: "Fiber", value: "2.6 g" },
      { label: "Sugar", value: "12 g" },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 ">
        <h1 className="text-3xl font-bold text-center">{fruitData.name}</h1>
        <h2 className="text-xl font-semibold text-center mt-4">Nutritional Values</h2>
        <div className="overflow-x-auto mt-6 ">
          <table className="md:w-80 bg-white border border-gray-200 w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-200 text-left">Nutrient</th>
                <th className="pr-4 px-4 py-2 border-b border-gray-200 text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {fruitData.nutritionalValues.map((nutrient, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b border-gray-200">{nutrient.label}</td>
                  <td className="pr-4 px-4 py-2 border-b border-gray-200 text-right">{nutrient.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NeutriTable;
