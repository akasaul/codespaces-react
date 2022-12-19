import React from 'react';
import Nav from "./Nav";
import Footer from './Footer';

export const Container = ({children, next, prev, page}) => {
  return (
    <>
        <section className="flex container flex-col sm:flex-row md:space-x-16 sm:space-x-5 sm:items-center sm:p-4">
            {/* Navigation section  */}
            <Nav page={page}/>
            
            {/* Form section  */}
            {children}

        </section>
        {/* Footer Section  */}
        <Footer prev={prev} next={next} page={page}/>
   </>
  )
}
