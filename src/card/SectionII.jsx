import React from 'react'
import PropTypes from 'prop-types'

export default function SectionII(props) {
    return (
        <div className="SectionII">
            <div className="About">
                <h4>{props.About}</h4>
                <p>Lorem ipsum, Sapiente libero qui beatae voluptas tempora corrupti accusamus soluta nobis corporis fugiat! Nam, odio.</p>
            </div>
            <div className="Intrests">
                <h4>{props.Intrests}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, tempore laboriosam! Sapiente libero qui beatae voluptas tem.</p>
            </div>
        </div>
    )
}


SectionII.propTypes = {
    About: PropTypes.string,
    Intrests : PropTypes.string,               
}

SectionII.defaultProps = {
    About : 'About ',
    Intrests : 'Intrests'

}