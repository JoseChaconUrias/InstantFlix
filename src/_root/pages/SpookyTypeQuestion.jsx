import React from 'react';
import { Link } from 'react-router-dom';

const SpookyTypeQuestion = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="absolute top-4 left-4">
            <Link to="/spooky-scary" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                Go Back
            </Link>
        </div>
        <div className="p-16 rounded-xl outline outline-white outline-8">
            <h1 className="flex justify-center font-bold text-4xl">What type of Spooky?</h1>
            <div className="items-center justify-center p-3 mt-4">
                <Link to="/results" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Slasher
                </Link>
                <Link to="/results" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Supernatural
                </Link>
                <Link to="/results" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Psychological
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SpookyTypeQuestion