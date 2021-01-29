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
          </ul>
          <ul className='cards__items'>
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
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Condo-Conversion-1.png'
              text='Condominium conversion'
              label='Williamsburg, Brooklyn, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Residential-Construction-and-Renovation.png'
              text='Residential construction and renovation'
              label='Midtown, Manhattan, NY'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Class-A-Retail-Office-Commercial-Lease-up-Strategy.png'
              text='Class A retail/office commercial lease-up'
              label='Midtown, Manhattan, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Commercial-Built-to-Suit-development.png'
              text='Commercial built-to-suit development for retenanted global retailer'
              label='Kaoshiung, Taiwan'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Rhombus-Hotel-ACtive-Management.png'
              text='Management by Rhombus Hotels global brand'
              label='Vancouver, British Columbia, Canada'
              path='/portfolio'
            />
            <CardItem
              src='images/Residential-Construction-and-Renovation-5.png'
              text='Residential construction and renovation'
              label='East Village, Manhattan, NY'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Residential-Construction-and-Renovation-4.png'
              text='Multifamily construction and renovation'
              label='Midtown, Manhattan, NY'
              path='/portfolio'
            />
            <CardItem
              src='images/Residential-Construction-and-Renovation-3.png'
              text='Residential construction and renovation'
              label='Midtown South, Manhattan, NY'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
