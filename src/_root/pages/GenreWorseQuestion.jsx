import React from 'react';
import { Link } from 'react-router-dom'

const GenreWorseQuestion = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="absolute top-4 left-4">
            <Link to="/mood" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                Go Back
            </Link>
        </div>
        <div className="p-16 rounded-xl outline outline-white outline-8">
            <h1 className="flex justify-center font-bold text-4xl">What Genre are you feeling?</h1>
            <div className="items-center justify-center p-3 mt-4">
                <Link to="/violence" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    I want a Drama
                </Link>
                <Link to="/violence" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    I want to feel Empty
                </Link>
                <Link to="/violence" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Straight up Depression
                </Link>
            </div>
        </div>
    </div>
  )
}

export default GenreWorseQuestion