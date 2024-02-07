import React from 'react';
import { Link } from 'react-router-dom';


const MoodQuestion = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="absolute top-4 left-4">
            <Link to="/" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                Go Back
            </Link>
        </div>
        <div className="p-16 rounded-xl outline outline-white outline-8">
            <h1 className="flex justify-center font-bold text-4xl">Describe the mood you want</h1>
            <div className="grid grid-cols-3 items-center justify-center p-3 mt-4">
                <Link to="/genre-better" className="text-xl mx-4 p-3 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    I'm happy and want to feel better
                </Link>
                <Link to="/genre-better" className="text-xl mx-4 p-3 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    I'm sad and want to feel better                   
                </Link>
                <Link to="/genre-worse" className="text-xl mx-4 p-3 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    I'm happy and want to feel worse                
                </Link>
                    <div className="col-span-3 flex justify-center mt-4">
                        <Link to="/genre-worse" className="text-xl mx-4 p-3 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                            I'm sad and want to feel worse                          
                        </Link>
                        <Link to="/spooky-scary" className="text-xl mx-4 p-3 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                            It's Spooky time                    
                        </Link>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default MoodQuestion;