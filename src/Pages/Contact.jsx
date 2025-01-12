import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';     

const Contact = () => {
useEffect(() => {
        AOS.init({
            duration: 1000,
            twice: true,   
            delay: 100,
            easing: 'ease-in-out'
        });
    }, []);

    const form = useRef();
    const [messageSent , setMessageSent ] =useState(false)

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_74digih','template_df3n30h', form.current, {
          publicKey: 'HMIaG_oNIKt1f-6TU',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setMessageSent(true);
            form.current.reset();
            setTimeout(() =>setMessageSent(false),3000)
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Failed to send Message.Please Try again later")
          },
        );
    }

  return (
    <section id="contact"  className="py-16 bg-gray-700">
    <div className="container mx-auto px-4">
        <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto" data-aos="zoom-in-up">
            <h1 className="text-center text-2xl font-semibold mb-6 text-gray-200">Contact me</h1>
            {messageSent && (
                        <div className="text-center text-green-500 mb-4">Message sent successfully!</div>
                    )}
            <div className="mb-4">
                <label htmlFor="user_name" className="block font-semibold mb-2 text-gray-200">Full Name</label>
                <input type="text" id="user_name" name="user_name" className="w-full p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
                <label htmlFor="user_email" className="block font-semibold mb-2 text-gray-200" >Email</label>
                <input type="email" id="user_email"  name="user_email" className="w-full p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block font-semibold mb-2 text-gray-200">Message</label>
                <textarea id="message" name="message" placeholder="Write your message" className="w-full p-3 rounded bg-gray-700 text-gray-100 min-h-[120px] resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="text-center">
                <button type="submit" className="font-semibold border border-gray-200 bg-gray-600 hover:bg-gray-500 text-gray-100 p-3 rounded w-full sm:w-auto px-6 transition duration-300">Send</button>
            </div>
        </form>
    </div>
</section>
  )
}

export default Contact
