import React from 'react'
import './../component/Random.css'
import { useState } from 'react'
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoReloadCircle } from "react-icons/io5";

function Random() {

    let quotes=[]

    async function loadQuotes(){
        const response = await fetch("https://zenquotes.io/api/random");
        quotes = await response.json();
    }

    const [quote,setQuote] =useState({text:"Life is a question and how we live it is our answer.",
    author:"Gary Keller",});

    const random = () => {
        const select =quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    loadQuotes();

  return (
    <div className='quote-section'>
        <div className="quotetxt">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="below">
                <div className="author">{quote.author.split(',')[0]}</div>
                <div className="icons">
                <IoReloadCircle onClick={()=>{random()}} />
                <FaXTwitter/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Random
