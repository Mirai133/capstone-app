import React from 'react'
import EmilyImg from "../images/Emily.png"
import MarkImg from "../images/Mark.png"
import SarahImg from "../images/Sarah.png"
import MichaelImg from "../images/Michael.png"
import RatingImg from "../images/Rating.png"

const Testimonials = () => {
    const testimonialsCards = [
        {
            id:1,
            customerName:"Emily",
            cardText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam.",
            img:EmilyImg
        },
        {
            id:2,
            customerName:"Mark",
            cardText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam.",
            img:MarkImg
        },
        {
            id:3,
            customerName:"Sarah",
            cardText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam.",
            img:SarahImg
        },
        {
            id:4,
            customerName:"Michael",
            cardText:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam.",
            img:MichaelImg
        }
    ]

  return (
    <main className='testimonials'>
        <div className='testimonials-container'>
            <h2 className='testimonials-title'>Testimonials</h2>
            <div className='customers-cards-container'>
                    {testimonialsCards.map((card) => (
                        <div className='customer-card'>
                            <img src={RatingImg} alt="" />
                            <div className='cust-card-title'>
                            <img src={card.img} alt="" />
                            <span className='cust-card-name'>{card.customerName}</span>
                            </div>
                            <p className='cust-card-text'>{card.cardText}</p>
                        </div>
                    ))}
            </div>
        </div>
    </main>
  )
}

export default Testimonials