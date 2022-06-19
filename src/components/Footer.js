import React from 'react';
import facebook from '../images/facebook.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedinicon from '../images/linkedinicon.png';
import twitter from '../images/twitter.png';


export default function Footer() {

    return (<div className="footer_container">
        <div className="footer_inside">
            <a href="" target="_blank" rel="noreferrer">
                <img src={twitter} alt="abc" className="twitter"></img>
            </a>
            <a href="" target="_blank" rel="noreferrer">
                <img src={facebook} alt="abc" className="fb"></img>
            </a>
            <a href="" target="_blank" rel="noreferrer">
                <img src={instagram} alt="abc" className="instagram"></img>
            </a>
            <a href="https://github.com/vishsanghishetty" target="_blank" rel="noreferrer">
                <img src={github} alt="abc" className="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/vishalis/" target="_blank" rel="noreferrer">
                <img src={linkedinicon} alt="abc" className="linkedinicon"></img>
            </a>

        </div >

    </div >




    )



}