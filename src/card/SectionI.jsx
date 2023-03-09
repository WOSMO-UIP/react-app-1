import React from 'react'
import pic from './img1.webp'
import PropTypes from 'prop-types'

export default function SectionI(props) {
    return (
        <div className="SectionI">
            <img src={pic} alt="" />
            <h1>{props.name}</h1>
            <p >{props.jobtitle}</p>
            <div className="btn-box">
                <a href="https://mail.google.com/mail/u/0/#inbox">
                    <button>
                        <i className="fa-solid fa-envelope" /> <b>Email</b>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-wasif-malik-79205a1bb/">
                    <button>
                        <i className="fa-brands fa-linkedin" /> <b>LinkedIn</b>
                    </button>
                </a>
            </div>
        </div>
    )
}

SectionI.propTypes = {
    name: PropTypes.string,
    jobtitle: PropTypes.string,                
}

SectionI.defaultProps = {
    name : 'set name here ',
    jobtitle : 'job title here'

}