import React from 'react'
import FacePhoto from '../../assets/images/face-photo.png'
import './PersonCard.css'

const PersonCard = () => {
    return (
        <div className="personCard">
            <div className="portifolio_card">
                <img src={FacePhoto} alt="me" className="imageCover" />
                <div className="name-location">
                    <p className="poppins-bold-16 title color-blackShade">
                        Jayanth Saikiran
                    </p>
                    <p className="poppins-bold-14 location color-gray50">
                        Hyderabad
                    </p>
                </div>
            </div>

        </div>
    )
}

export default PersonCard
