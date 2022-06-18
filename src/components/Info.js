import React from 'react'
import email from '../images/email.png'
import linkedin from '../images/linkedin.png'
import my_photo from '../images/my_photo.png'

export default function Info() {

    return (<div className="info_container">
        <div className="profile_img_container"><img src={my_photo} alt="my_photo" className="profile_picture"></img></div>
        <h4 className="name">Vishali Sanghishetty</h4>
        <h6 className="profession">Frontend Developer</h6>
        <p className="website">vishalis.website</p>
        <div className="btn_image_container">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vishali.kamenani@gmail.com" target="_blank"><img src={email} alt="email" className="email_img"></img></a>
            <a href="https://www.linkedin.com/in/vishalis/" target="_blank"><img src={linkedin} alt="linkedin" className="linkedin_img"></img></a>
        </div>
    </div>
    )
}