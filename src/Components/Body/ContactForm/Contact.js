import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [contact, Setcontact] = useState({
    fullName: "",
    Message: "",
    Email: ""
  });

  async function handlesubmit(event) {
   event.preventDefault();
   emailjs.sendForm('service_uuysssk', 'template_ki66tpb', form.current, 'OULc2va_RXpUnnypn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
 };
  function handleChange(event) {
    const { name, value } = event.target;
    Setcontact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className=" mt-16">
    <h1 className="text-center text-5xl mt-2 mb-4" id={'Contact'}>Contact me</h1>
    <div className="flex justify-center">
    <form ref={form}>
    <input type="hidden" name="access_key" value="4bce5fe0-3d08-4c0a-96b2-fb0de07c5113"/>
      <div className="flex flex-row">
      <div className="w-6/12 px-5">
        <input
          required
          value={contact.fullName}
          name="fullName"
          placeholder="Enter Your Name"
          type="text"
          onChange={handleChange}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
        />
        </div>
        <div  className="w-6/12 px-5">
        <input
          value={contact.Email}
          name="Email"
          placeholder="Enter your Email"
          type="email"
          onChange={handleChange}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        </div>
        </div>
        <div className="w-full px-5">
        <textarea
          value={contact.Message}
          name="Message"
          placeholder="Write Your Message"
          className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
          onChange={handleChange}
        />
        <button
        onClick={handlesubmit}
        className="w-full border border-primary rounded py-3 px-4 mb-3 bg-thirdly hover:bg-sixth">
        Submit
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Contact;
