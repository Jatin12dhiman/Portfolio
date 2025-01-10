import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';     

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_74digih','template_df3n30h', form.current, {
          publicKey: 'HMIaG_oNIKt1f-6TU',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }

  return (
    <section id="contact">
       
       <form ref={form} onSubmit={sendEmail} className='bg-gray-700
       flex flex-col p-24 space-y-4 gap-2   text-gray-200'>
       <h1 className='text-center text-2xl font-semibold'>Contact me</h1>
      <label className='font-semibold'>Full Name</label>
      <input type="text" name="user_name" className='text-gray-900 p-4 rounded'/>
      <label className='font-semibold'>Email</label>
      <input type="email" name="user_email" className='p-4 text-gray-900 rounded' />
      <label className='font-semibold'>Message</label>
      <textarea name="message" placeholder='Write your message' className='p-3 text-gray-900 rounded  min-h-[120px]'/>
     <div className='text-center pt-12'>
     <input type="submit" value="Send" className='font-semibold border border-gray-200 bg-gray-500 p-2 rounded hover:bg-gray-900 min-w-[110px] max-w-[200px] h-[50px]' />
     </div>
    </form>
    </section>
  )
}

export default Contact
