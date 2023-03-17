import React, { FC } from 'react';
import Navbar from '@/Components/NavBar/Navbar';
import Footer from '@/Components/Footer/Footer';

const Layout: FC< {children: React.ReactNode}> = ({children}) => {
  return (
    <div>
          <Navbar/>
          {children}
          <Footer />
        </div>
  )
}

export default Layout