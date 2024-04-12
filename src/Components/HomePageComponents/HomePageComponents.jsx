import React from 'react'
import BridalCollections from './BridalCollections'
import DiamondsSlide from './DiamondsSlide'
import Diamonds from './Diamonds'
import About from './About'
import Consultation from '../Consultation/Consultation'

function HomePageComponents() {
  const diamonds = [
    {
        id:1, description:'Round', src:'/icons/round.svg'
    },

    {
        id:2, description:'Oval', src:'/icons/oval.svg'
    },

    {
        id:3, description:'Cushion', src:'/icons/cushion.svg'
    },

    {
        id:4, description:'Pear', src:'/icons/pear.svg'
    },

    {
        id:5, description:'Princess', src:'/icons/princess.svg'
    },

    {
        id:6, description:'Emerald', src:'/icons/emerald.svg'
    },

    {
        id:7, description:'Marquise', src:'/icons/marquise.svg'
    },

    {
        id:8, description:'Asscher', src:'/icons/asscher.svg'
    },

    {
        id:9, description:'Radiant', src:'/icons/radiant.svg'
    },

    {
        id:10, description:'Heart', src:'/icons/heart-diamond.svg'
    },
]

  return (
    <div>
        <BridalCollections/>
        <Diamonds />
        <DiamondsSlide images={diamonds} title="Verragio Collection"/>
        <About/>
        <Consultation/>
    </div>
  )
}

export default HomePageComponents