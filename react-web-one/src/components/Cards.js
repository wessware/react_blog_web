import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Img_9 from '../images/img-9.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src={Img_9} 
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/services' />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
