// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react';
import './App.css'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg");


  return (

    <div>
      <header>DOGGIE</header>
      {/* <div>
        <span className="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </span>
      </div> */}
      <p>Find out your best buddies!</p>
      <div className='imgContainer'>
        <img src={dogUrl} />
      </div>
      <div>
        <button onClick={() => {
          fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => res.json())
          .then(
            (result) => {
              setDogUrl(result.message)
            }
          )
          }}>
          reload
        </button>
      </div>
    </div>
  )
}
