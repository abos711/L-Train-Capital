import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Investments and Developments</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/XagKi8f.png'
              text='Extensive renovation featuring horizontal extension in rear with an active short-term pop-up rental strategy'
              label='Williamsburg, Brooklyn, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Multifamily-Renovation.png'
              text='Multifamily construction and renovation'
              label='Williamsburg, Brooklyn, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Multistore-lease-up-strategy.png'
              text='Multistore retail lease-up'
              label='Flushing, Queens, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Multifamily-Renovation-2.png'
              text='Mixed use renovation featuring horizontal extension in rear and lease-up'
              label='Williamsburg, Brooklyn, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Multifamily-Renovation-2.png'
              text='Mixed use renovation featuring horizontal extension in rear and lease-up'
              label='Williamsburg, Brooklyn, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Multifamily-Renovation-2.png'
              text='Mixed use renovation featuring horizontal extension in rear and lease-up'
              label='Williamsburg, Brooklyn, NY'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/portfolio'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
