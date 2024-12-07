import  React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = ({contactRef}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID ,process.env.REACT_APP_TEMPLATE_ID , form.current, {
        publicKey: process.env.REACT_APP_EMAIL_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <div>
      <div ref={contactRef} id='contact' className='d-flex justify-content-center'>
        <h3 className='pt-5 display-2'>Contact</h3>
      </div>
      <hr className='line'></hr>
      <div className='pt-5'>
        <h5  className='display-5'>Thank you for viewing my website!</h5>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div class="input-group mb-3 mt-5 d-flex justify-content-center">
          <span className="input-group-text" id="basic-addon1">Optional</span>
          <input className='w-50 d-flex' type="email" name='email' placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className='d-flex justify-content-center pb-2 w-100'>
          <textarea className='w-75 form-control' name='message' id="exampleFormControlTextarea1" rows="3" placeholder="Feel free to leave a message!"></textarea>
        </div>
        <div className='pb-3'>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
     
     
      
      
    </div>
  )
}

export default Contact
