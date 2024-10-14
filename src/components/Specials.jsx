import React from 'react'
import greek_salad from '../images/greeksalad.jpg'
import bruchetta from '../images/bruchetta.svg'
import lemon_dessert from '../images/lemon dessert.jpg'
import homeIcon from '../images/home icon.svg'

const Specials = () => {
    const cardsList = [
        {
            id:1,
            title:"Greek Salad",
            cost:"$ 12.99",
            text:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            img: greek_salad
        },
        {
            id:2,
            title:"Bruchetta",
            cost:"$ 5.99",
            text:"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt, olive oil and mint.",
            img: bruchetta
        },
        {
            id:3,
            title:"Lemon Dessert",
            cost:"$ 5.00",
            text:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            img: lemon_dessert 
        }
    ]


  return (
    <article className='specials'>
     <div className='specials-container'>
        <div className='specials-title'>
            <h2 className='specials-title-text'>Specials</h2>
            <button className='specials-btn'>Online Menu</button>
        </div>
        <div className='cards-container'>
                {cardsList.map((card) => (
                     <div className='card'>
                     <img src={card.img} alt={card.title} className='card-img' />
                     <div className='card-titles'>
                         <h2 className='card-title'>{card.title}</h2>
                         <span className='card-cost'>{card.cost}</span>
                     </div>
                     <div className='card-btm-text'>
                     <p className='card-text'>{card.text}</p>
                     </div>
                        <div className='card-footer'>
                          <p className='card-footer-text'>Order a delivery</p>
                          <img src={homeIcon} alt="" />
                        </div>
                 </div>
                ))}
        </div>
     </div>
    </article>
  )
}

export default Specials