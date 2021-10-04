import React, { useEffect, useState } from "react";
import { send } from "emailjs-com";
import { UserID, ServiceID, TemplateID } from "../../Firebase/secrets.json";

import emailSlider from "../helpers/emailContactAnimation";
import removeEmailSlider from "../helpers/removeEmailSlider";

export default function Email({ setSendMail }) {
    const [honey, setHoneypot] = useState(false);
    const [text, setText] = useState(null);
    const [requiredField, setRequired] = useState(null);

    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        Title: "",
        message: "",
    });

    const handleChange = (e) => {
        setRequired(null);
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        // console.log("SEND");
        e.preventDefault();
        if (honey === true) {
            // console.log("trapped in honeypot");
            closeContactForm();
            return;
        } else if (
            toSend.name === "" ||
            toSend.email === "" ||
            toSend.Title === "" ||
            toSend.message === ""
        ) {
            setRequired("please fill out every field!");
        } else {
            send(ServiceID, TemplateID, toSend, UserID).then(
                (result) => {
                    // console.log("Email was send", result.text);
                    window.scrollTo(0, 0);
                    setText("Your email was successfully sent");
                },
                (error) => {
                    // console.log("email sending failed", error.text);

                    setText("That did not work. Please try again later!");
                }
            );
        }
    };

    function closeContactForm() {
        removeEmailSlider();
        setTimeout(() => {
            setSendMail(false);
        }, 900);
    }
    const honeypot = (e) => {
        // console.log("honeypot");
        e.preventDefault();
        setHoneypot(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        emailSlider();
    }, []);

    return (
        <>
            <div className="contact-form-container" id="contact-form-container">
                <div className="contact-form-inner-container" id="emailSlider">
                    {/* <h1 className="contact-form-header">Email Contact</h1> */}
                    {!text ? (
                        <form className="contact-form">
                            {/* real fields */}
                            <label>Name</label>
                            <input
                                className="contact-form-input"
                                autoComplete="on"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                value={toSend.name}
                                onChange={handleChange}
                            />
                            <label>Email</label>
                            <input
                                className="contact-form-input"
                                autoComplete="on"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={toSend.email}
                                onChange={handleChange}
                            />
                            <label>Title</label>
                            <input
                                className="contact-form-input"
                                type="text"
                                name="Title"
                                placeholder="Subject"
                                required
                                value={toSend.Title}
                                onChange={handleChange}
                            />
                            <label>Message</label>
                            <textarea
                                className="contact-form-input contact-form-textarea"
                                name="message"
                                rows="9"
                                // cols="33"
                                placeholder="Write your message here"
                                required
                                value={toSend.message}
                                onChange={handleChange}
                            />
                            {/* <input
							className="button-contact-form send"
							type="submit"
							value="Send"
						/> */}
                            {requiredField}
                            <button
                                onClick={(e) => onSubmit(e)}
                                className="button-contact-form send"
                            >
                                Submit
                            </button>

                            <input
                                className="button-contact-form"
                                type="reset"
                                value="Reset"
                                onClick={() => closeContactForm()}
                            />
                            {/* HONEYPOT */}
                            <label className="ohnohoney"></label>
                            <input
                                className="ohnohoney"
                                autoComplete="off"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name here"
                                onChange={(e) => honeypot(e)}
                            />
                            <label className="ohnohoney"></label>
                            <input
                                className="ohnohoney"
                                autoComplete="off"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your e-mail here"
                            />
                        </form>
                    ) : (
                        <div className="success-modal">
                            {text}
                            <button onClick={() => closeContactForm()}>
                                Ok
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
