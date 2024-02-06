import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles.css';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';
import GoAway from './_root/pages/GoAway';
import MoodQuestion from './_root/pages/MoodQuestion';
import GenreBetterQuestion from './_root/pages/GenreBetterQuestion';
import GenreWorseQuestion from './_root/pages/GenreWorseQuestion';
import ViolenceQuestion from './_root/pages/ViolenceQuestion';
import Results from './_root/pages/Results';
import SpookyScaryQuestion from './_root/pages/SpookyScaryQuestion';
import SpookyTypeQuestion from './_root/pages/SpookyTypeQuestion';

const App = () => {
  return (
    <main>
        <Routes>
            <Route element={<RootLayout />}>
                { /* public */ }
                <Route index element={<Home /> } />
                <Route path="/goaway" element={<GoAway />} />

                { /* private */ }
                <Route path="/mood" element={<MoodQuestion />} /> 
                <Route path="/genre-better" element={<GenreBetterQuestion />} />
                <Route path="/genre-worse" element={<GenreWorseQuestion />} />
                <Route path="/violence" element={<ViolenceQuestion />} />
                <Route path="/results" element={<Results />} />
                <Route path="/spooky-scary" element={<SpookyScaryQuestion />} />
                <Route path="/spooky-type" element={<SpookyTypeQuestion />} />
            </Route>
        </Routes>
    </main>
  );
}

export default App