import React from 'react';
import Slide from './Slide.js';
import catOne from './img/catOne.jpeg';
import catTwo from './img/catTwo.jpeg';
import catThree from './img/catThree.jpeg';
import catFour from './img/catFour.jpeg';
import catFive from './img/catFive.jpeg';
import Head from '../Components/Head.js';

const slides = [
    {
        id: 'slide1',
        img: {catOne}
    },
    {
        id: 'slide2',
        img: {catTwo}
    },
    {
        id: 'slide3',
        img: {catThree}
    },
    {
        id: 'slide4',
        img: {catFour}
    },
    {
        id: 'slide5',
        img: {catFive}
    },
]

const AppSlide = () => {
    return (
     <div>
          <Head title="Catslide"/>
          <Slide slides={slides}/>
     </div>
    );
}

export default AppSlide;