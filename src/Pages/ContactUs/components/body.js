import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './body.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Body() {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (fields) => {
    const errors = {};
    if (!fields.to_name) errors.to_name = 'Name is required';
    if (!fields.from_name) errors.from_name = 'Email is required';
    if (!fields.message) errors.message = 'Message is required';
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      to_name: form.current.to_name.value,
      from_name: form.current.from_name.value,
      message: form.current.message.value,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    emailjs
      .sendForm('service_ic0rdfr', 'template_n1eb4hm', form.current, {
        publicKey: '176yi2F5wOhdqL90z',
      })
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          form.current.reset(); // Clear form inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="mainCont">
      {/* Contact Form */}
      <div className="bodyForm">
        <h2>Contact Us</h2>
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-body">
            <label>Name :</label><br />
            <input type="text" name="to_name" />
            {formErrors.to_name && <p className="error">{formErrors.to_name}</p>}
          </div>
          <div className="form-body">
            <label>Email :</label><br />
            <input type="email" name="from_name" />
            {formErrors.from_name && <p className="error">{formErrors.from_name}</p>}
          </div>
          <div className="form-body">
            <label>Message :</label><br />
            <textarea name="message" rows="4" />
            {formErrors.message && <p className="error">{formErrors.message}</p>}
          </div>
          <div className="form-button">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>

      {/* Contact Details */}
      <div className="contactDetails">
        <div className="detailsRow">
          <p><FaMapMarkerAlt /> Institute of Alexandria, Sri Jayawardenepura Kotte</p>
          <p><FaEnvelope /> brillientstarschoolproject@gmail.com</p>
          <p><FaPhoneAlt /> (011) 234 5567</p>
        </div>
        <div className="map">
          <iframe
            width="940"
            height="700"
            src="https://maps.google.com/maps?width=650&amp;height=920&amp;hl=en&amp;q=Institute%20of%20Alexandria,%20262%20B240,%20Sri%20Jayawardenepura%20Kotte%2010120+(Where%20are%20we)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Body;
