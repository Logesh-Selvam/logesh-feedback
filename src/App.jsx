import React from 'react'
import './App.css'
import Swal from 'sweetalert2'

const App = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "df0c6dc3-f84c-43ce-9fac-d82153ef375f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Message sent succesfully!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };



  return (
    <section className="contact">
      <form className='feedback' onSubmit={onSubmit}>
        <h2>Feedback Form</h2>
        <div className="intput-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder='Enter your name' name='name' required />
        </div>
        <div className="intput-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder='Enter your email' name='email' required />
        </div>
        <div className="intput-box">
          <label>Your Message</label>
          <textarea name="message" rows="7"  className='field mess' placeholder='Enter your message' required></textarea>
        </div>
        <button type='submit' className='feedback-sumbit' >Submit</button>
      </form>
    </section>
  )
}

export default App
