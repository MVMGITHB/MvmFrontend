import Clients from '@/components/Clients'
import Hire from '@/components/Hire'
import WorkCarousel from '@/components/Partners/Work'
import Result from '@/components/Result'
import Home from '@/components/Home'
import Services from '@/components/Services/Services'
import React from 'react'

function HomeAus() {
  return (
    <>
       <Home/>   
      <Result />
      <Services />
      <WorkCarousel />
      <Clients />
      <Hire />
    </>
  )
}

export default HomeAus