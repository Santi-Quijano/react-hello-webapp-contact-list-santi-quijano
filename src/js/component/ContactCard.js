import React from 'react'


export const ContactCard = ({ contact }) => {

  return (
    <div>
      <div className='contact-card-container mb-4'>
        <div className="contact-profile d-flex">
          <img className="contact-picture" src="https://placehold.co/500x500" alt="Profile picture" />
          <div className="contact-info">
            <h3 className="contact-name">{contact.full_name}</h3>
            <p className="street-adress contact-detail text-muted"><i className="fa-solid fa-location-dot"></i>&nbsp;{contact.address}</p>
            <p className="contact-number contact-detail text-muted"><i className="fa-solid fa-phone"></i>&nbsp;{contact.phone}</p>
            <p className="email-direction contact-detail text-muted"><i className="fa-solid fa-envelope"></i>&nbsp;{contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
