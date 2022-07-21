import React from 'react';
import Footer from './Footer';
import Search from './Search';
import './App.css';
import './Section.css';

function Section() {
  return (
    <>
    <section className='main'>
    <Search defaultCity=" "/>
    <Footer />
    </section>
    
    </>
  );
}

export default Section;