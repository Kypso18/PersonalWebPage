import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_rw4uu5c';
    const templateID = 'template_n8rccj5ID';
    const userID = 'OZWBzcyr-VEaj8MVM';

    // Prepare the data to be sent
    const templateParams = {
      name,
      email,
      message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatusMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setStatusMessage('Failed to send message. Please try again later.');
        console.error('Error:', error);
      });
  };
 
  return (
    <div>
  <h2 className="text-2xl text-center font-bold mb-4">Contact Form</h2>
  <form className="max-w-lg mx-10 lg:mx-auto md:mx-auto sm:mx-auto" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block mb-1 text-white font-medium" htmlFor="name">Name</label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none  sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-1/2"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-medium text-white" htmlFor="email">Email</label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-1/2"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-medium text-white" htmlFor="message">Message</label>
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
        id="message"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
    </div>
    <div className="text-center">
      <button
        className="hover:animate-pulse hover:underline px-4 py-2 bg-blue-400/90 text-white rounded hover:bg-blue-500/90"
        type="submit"
      >
        Send Message
      </button>
    </div>
    {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
  </form>
</div>

  );
};

export default ContactForm;
