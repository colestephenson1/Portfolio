import React, { FC } from 'react';
import Navbar from '@/Components/NavBar/Navbar';

const Layout: FC< {children: React.ReactNode}> = ({children}) => {
  return (
    <div>
          <Navbar/>
          {children}
        </div>
  )
}

export default Layout