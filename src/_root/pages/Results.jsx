import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="absolute top-4 left-4">
          <Link to="/" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
            Start over
          </Link>
        </div>
        <div className="p-16 rounded-xl outline outline-white outline-8">
            <h1 className="flex justify-center font-bold text-4xl">Alright lets pick a Movie!</h1>
            <div className="flex items-center justify-center p-3 mt-4">
                <button className="flex items-center justify-centertext-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Get Results
                </button>
            </div>
        </div>
    </div>
  )
}

export default Results