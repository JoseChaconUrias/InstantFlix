import React from 'react';
import { Link } from 'react-router-dom';

const GoAway = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-xl mx-8 p-3 px-8 rounded-md outline outline-white outline-3 hover:bg-white hover:text-teal-300">
          Go Back
        </Link>
      </div>
      <div className="p-16 rounded-xl outline outline-white outline-8">
        <p className="text-3xl">
          You don't have to be so rude man :(
        </p>
      </div>
    </div>
  )
}

export default GoAway