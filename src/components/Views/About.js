import React from 'react'
import NavCom from '../NavBar'
import Footer from '../footer'
import AboutImageClassification from '../About'
import Cifar100Description from '../main'

function About() {
  return (
    <div style={{marginTop:150}}>
        <NavCom />
        <main>
            <AboutImageClassification  />
            <Cifar100Description />
        </main>
        <Footer />
    </div>
  )
}

export default About