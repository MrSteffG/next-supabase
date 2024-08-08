import React from "react";

const Functionality = () => {
  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <div className="flex w-2/3 flex-col items-center justify-center gap-10">
        <h3>This is where the functionality goes...</h3>
        <div className="flex gap-5">
          <button className="flex h-20 w-20 items-center justify-center bg-green-200 transition-all hover:scale-105">
            INSERT ITEM
          </button>
        </div>
        {/* List of data */}
        <div className="flex w-2/3 border-2 border-black">
          <ul className="flex w-full flex-col">
            <li className="flex w-full border-b-2">Item 1</li>
            <li className="flex w-full border-b-2">Item 2</li>
            <li className="flex w-full border-b-2">Item 3</li>
            <li className="flex w-full border-b-2">Item 4</li>
            <li className="flex w-full border-b-2">Item 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
