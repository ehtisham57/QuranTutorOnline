import React from 'react'
import Image from 'next/image'
import img1 from "../../images/img-02.jpg"
import style from "./AboutBanner.module.css"
import Link from 'next/link'
const AboutBanner = () => {

    console.log("hello")

  return (
    <div className='container-fluid mx-0 px-0'>
    <Image className={`${style.image}`} src={img1} width="50%" />
    <div className='container-fluid px-5 my-4 '>
    <div className='flex row py-2'>
    <h1 className={`${style.mainHeading} font-serif text-center align-content-center py-5 my-3 font-bold`}> About Us</h1>
      <div className={`${style.aboutimage} col-lg-6` } >
            <Image src={img1} alt="About" />
          </div>
          <div className={`${style.aboutsection} col-lg-6`}>
            <h2>Our Team</h2>
            <p className={`${style.para}`}>
            Our team comprises highly qualified and experienced Quran tutors who are not only 
            experts in Tajweed (the proper pronunciation of Quranic Arabic) but also deeply knowledgeable about the Quran's interpretation and its application in contemporary life. Each member of our team is carefully selected, not only for their academic qualifications but also for their dedication to fostering a love for the Quran and its teachings.</p>
            <Link className={`${style.button}`} href="/Contact">Contact Us</Link>
            </div>
          
    
        </div>
        </div>  
    </div>
  )
}

export default AboutBanner
