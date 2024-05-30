import React from 'react';

const FieldComponent = ({ field }) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 mb-4 flex flex-col gap-10 w-full items-center text-justify">
      <div className="text-7xl font-bold text-blue-600">{field}</div>
      <div className="text-white text-3xl w-11/12 ">
        {field === 'Software Engineer'? (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem magni, cupiditate impedit distinctio rerum deserunt blanditiis expedita reprehenderit, a mollitia officia rem in adipisci, iusto architecto! Rerum nesciunt maxime, placeat corrupti laborum atque! Nostrum, perferendis inventore fuga temporibus, labore quas provident vero voluptatem vitae reiciendis dolorum iusto totam nobis at minus, assumenda fugiat delectus cum enim et dolorem dignissimos unde quod. Quae tenetur vitae eum veritatis.
          </span>
        ) : (
          // add more descriptions for other fields here
          <span>Description for {field} field</span>
        )}
      </div>
      <div className="flex justify-center mb-4 w-full">
        <div className="bg-blue-600 rounded-lg w-2/3 h-96 border-2">
          {/* graph component will go here */}
          <svg viewBox="0 0 100 100">
            {/* graph data will be rendered here */}
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pursue a Career in {field}
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-4">
          View Roadmap
        </button>
      </div>
    </div>
  );
};

export default FieldComponent;