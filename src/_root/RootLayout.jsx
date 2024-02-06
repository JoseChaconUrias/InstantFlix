import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-tl from-cyan-100 via-teal-300 to-cyan-500">
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout;