import Navbar from '@/components/nav-footer/Navbar'
import AboutBubbleSort from '@/components/Sorting/BubbleSort/AboutBubbleSort'
import BubbleSort from '@/components/Sorting/BubbleSort/BubbleSort'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <AboutBubbleSort/>
    <BubbleSort/>
    </>
  )
}

export default page