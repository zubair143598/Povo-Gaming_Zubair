import React from 'react'
import Features from '../Components/Elements/Features'
// import Excluxive from '../Components/Elements/Excluxive'
import Hero from '../Components/Elements/Hero'
import ImgBenefitPresale from '../Components/Elements/ImgBenefitPresale'
import Mission from '../Components/Elements/Mission'
import Plateform from '../Components/Elements/Plateform'
import Video from '../Components/Elements/Video'
import Vision from '../Components/Elements/Vision'
// import Faqs from '../Components/Utils/Faqs'

const Home = () => {
  return (
    <>
    <Hero/>
    <Plateform/>
    <Features/>
    <Video/>
    <ImgBenefitPresale/>
    <Mission/>
    <Vision/>
    {/* <Excluxive/> */}
    {/* <Faqs/> */}
    </>
  )
}

export default Home