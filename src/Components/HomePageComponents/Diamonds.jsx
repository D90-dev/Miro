import React from 'react'
import './Diamonds.scss'
import DiamondsSlide from './DiamondsSlide'
function Diamonds() {
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
        <div className='diamonds'>
            <div className="diamonds-default">
            <h2>Shop Diamonds by Shape</h2>
            <div className="diamonds-items">
                    {diamonds.map((diamond, index) => (
                        <div key={index} className='diamonds-items-item'>
                            <img src={diamond.src} alt="" />
                            <p>{diamond.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='diamonds-mobile'>
            <DiamondsSlide images={diamonds} title="Shop Diamonds by Shap"/>
            </div>

            </div>
            
    )
}

export default Diamonds