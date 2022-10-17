import React from 'react'
import Features from '../Components/Elements/Features'
import Excluxive from '../Components/Elements/Excluxive'
import Hero from '../Components/Elements/Hero'
import ImgBenefitPresale from '../Components/Elements/ImgBenefitPresale'
import Mission from '../Components/Elements/Mission'
import Plateform from '../Components/Elements/Plateform'
import Proctected from '../Components/Elements/Proctected'
import { TokenRoadmap } from '../Components/Elements/TokenRoadmap'
import Video from '../Components/Elements/Video'
import Vision from '../Components/Elements/Vision'
import Faqs from '../Components/Utils/Faqs'
import Friends from '../Components/Elements/Friends'

const Home = () => {
  return (
    <>
    <Hero/>
    <Plateform/>
    <Excluxive/>
    <Features/>
    <Video/>
    <ImgBenefitPresale/>
    <Mission/>
    <Vision/>
    <TokenRoadmap/>
    <Proctected/>
    <Faqs/>
    <Friends/>
    </>
  )
}

export default Home