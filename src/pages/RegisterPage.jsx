import React, { useState } from 'react'
import "../styles/Register.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
    profile: null
  });

  return (
    <div className='register'>
        <div className='register_content'>
            <form className='register_content_form'>
                <input value={formData.first} placeholder='First Name' name='first' required />
                <input value={formData.last} placeholder='Last Name' name='last' required />
                <input value={formData.email} placeholder='Email' name='email' type='email' required />
                <input value={formData.password} placeholder='Password' name='password' type='password' required />
                <input value={formData.confirm} placeholder='Confirm Password' type='password' name='confirm' required />
                <input value={formData.profile} id='image' type='file' name='profile' accept='image/*' style={{display: "none"}} required />
                <label htmlFor='image'>
                  <img src='/assets/addImage.png' alt='addProfile' />
                  <p>Upload Profile Photo</p>
                </label>
                <button type='submit'>REGISTER</button>
            </form>
            <a href='/login'>Already have an account?Log In Here</a>
        </div>
    </div>
  )
}

export default RegisterPage;