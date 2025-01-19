import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hearder from '../components/Hearder.jsx';
import Joincompany from '../components/Joincompany.jsx';
import Features from '../components/Features .jsx';
import Testimonial from '../components/Testimonial.jsx';
import FAQ  from '../components/FAQ .jsx';
import BlogPosts  from '../components/BlogPosts .jsx';
import FreeTrial from '../components/FreeTrial.jsx';
import Footer  from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hearder/>
        <Joincompany/>
        <Features/>
        <Testimonial/>
        <FAQ/>
        <BlogPosts/>
        <FreeTrial/>
        <Footer/>
    </div>
  )
}

export default Home
