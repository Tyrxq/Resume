import React from 'react';
import './Contact.css'

const Contact = ({contactRef}) => {
  return (
    <div>
      <div ref={contactRef} id='contact' className='d-flex justify-content-center'>
        <h3 className='pt-5 display-2'>Contact</h3>
      </div>
      <hr className='line'></hr>
      <div className='pt-5'>
        <h5 className='display-5'>Feel free to leave a message!</h5>
        <h5  className='display-5'>Thank you for viewing my website!</h5>
      </div>
      <div class="input-group mb-3 mt-5 d-flex justify-content-center">
        <span className="input-group-text" id="basic-addon1">Optional</span>
        <input className='w-50' type="text" class="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className='d-flex justify-content-center pb-2 w-100'>
        <textarea className='w-75 form-control' id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className='pb-3'>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
      
    </div>
  )
}

export default Contact
