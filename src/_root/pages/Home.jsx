import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="p-16 rounded-xl outline outline-white outline-8">
            <h1 className="font-bold text-4xl">Can't Decide what to watch?</h1>
            <div className="flex items-center justify-center mt-4">
                <Link to="/mood" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Yea I'm lost             
                </Link>                    
                <Link to="/goaway" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
                    Go Away
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Home