import React from 'react';
import Slide from './SlideProject/Slide.js';
import catOne from './SlideProject/img/catOne.jpeg';
import catTwo from './SlideProject/img/catTwo.jpeg';
import catThree from './SlideProject/img/catThree.jpeg';
import catFour from './SlideProject/img/catFour.jpeg';
import catFive from './SlideProject/img/catFive.jpeg';

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

const App = () => {
    return (
     <div>
        <Slide slides={slides}/>
     </div>
    );
}

export default App;