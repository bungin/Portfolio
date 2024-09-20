import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/css/Contact.css';

export const Contact = () => {

    function clearForm() {
        document.getElementById('nameIn').value = '';
        document.getElementById('emailIn').value = '';
        document.getElementById('messageIn').value = '';
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (document.getElementById('nameIn').value &&
            document.getElementById('emailIn').value &&
            document.getElementById('messageIn').value) {

            emailjs
                .sendForm('service_h2ebmpk', 'template_wdqy2wa', form.current, {
                    publicKey: 'mK8CwKI1XhTp-XqXs',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        clearForm();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            alert('Please fill out all fields before submitting');
        }
    };
    return (
        <div>
            <h1 className="center">Contact</h1>
            <div className="center">
                <form ref={form} id="contSubmit" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" id="nameIn" />
                    <label>Email</label>
                    <input type="email" name="user_email" id="emailIn" />
                    <label>Message</label>
                    <textarea name="message" id="messageIn" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;