import React from 'react'
import HeroTop from '../components/About/HeroTop'
import HeroBottom from '../components/About/HeroBottom'
import WorkProcess from '../components/About/WorkProcess'
import TeamMembers from '../components/About/TeamMembers'
import Nav from '../components/Navbar/Nav'

const About = () => {
  return (
    <>
    <Nav/>
    <HeroTop/>
    <HeroBottom/>
    <WorkProcess/>
    <TeamMembers/>
    </>
  )
}

export default About