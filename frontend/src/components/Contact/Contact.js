import  React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Contact = ({contactRef}) => {

  const form = useRef();
  const [isLoading,setIsLoading] =useState(false);
  const [showToast,setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID ,process.env.REACT_APP_TEMPLATE_ID , form.current, {
        publicKey: process.env.REACT_APP_EMAIL_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsLoading(false);
          setShowToast(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
          setShowToast(true);
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
          <input className='w-50 d-flex' type="email" name='email' placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required/>
        </div>
        <div className='d-flex justify-content-center pb-2 w-100'>
          <textarea className='w-75 form-control' name='message' id="exampleFormControlTextarea1" rows="3" placeholder="Feel free to leave a message!" required></textarea>
        </div>
        {showToast && <div
          aria-live="polite"
          aria-atomic="true"
          className="position-relative"
          style={{ minHeight: '100px' }}
        >
          <ToastContainer
            className="p-3"
            position={'middle-center'}
            style={{ zIndex: 1 }}
          >
            <Toast className='d-flex' bg='success' onClose={() => setShowToast(false)} show={showToast} autohide
              delay={3000}>
              <Toast.Body className={'text-white'}>
                Message successful!
              </Toast.Body>
              <button type="button" class="btn-close btn-close-white me-2 m-auto ml-4" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
            </Toast> 
          </ToastContainer> 
        </div> }
        <div className='pb-3'>
          {isLoading ? 
            <button class="btn btn-primary " type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
             : 
            <button type="submit" class="btn btn-primary">Submit</button>
            
          }
        </div>
      </form>
     
      
    </div>
  )
}

export default Contact
