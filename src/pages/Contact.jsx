import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/css/Contact.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h2ebmpk', 'template_wdqy2wa', form.current, {
                publicKey: 'mK8CwKI1XhTp-XqXs',
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
            <h1 className="center">Contact</h1>
            <div className="center">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};



export default Contact;