import React, { useState, useEffect } from 'react';
import './../component/Random.css';
import { FaXTwitter } from "react-icons/fa6";
import { IoReloadCircle } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";

function Random() {
    const [quote, setQuote] = useState("Life is a question and how we live it is our answer.");
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            const data = await response.json();
            setQuote(data.slip.advice);
        } catch (error) {
            console.error("Error fetching the quote:", error);
            setQuote("Failed to load advice");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className='quote-section'>
            <div className="quotetxt">
                <h5 className="hashtag">#Quote</h5>
                <h1 className="icon1"><FaQuoteLeft/></h1>
                {loading ? <h4>Loading...</h4> : <h4>{quote}</h4>}
            </div>
            <div>
                <div className="line"></div>
                <div className="below">
                    <div className="icons">
                        <IoReloadCircle onClick={fetchQuote} />
                        <FaXTwitter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Random;
