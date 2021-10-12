import React, { useState, useContext } from "react";

import { send } from "emailjs-com";
import { UserID, ServiceID, TemplateID } from "../../Firebase/secrets.json";

import { LanguageContext } from "../../context/LanguageProvider";

import "./style.css";

export default function Email({ setClick }) {
    const { language } = useContext(LanguageContext);

    const [honey, setHoneypot] = useState(false);
    const [text, setText] = useState(null);
    const [requiredField, setRequired] = useState(null);

    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        Title: "",
        message: "",
    });

    // _______________ translation for languageContext  _____________
    let input = {};
    if (language === "en") {
        input = {
            title: "Title",
            text: "Write your message here",
            submit: "Submit",
            reset: "Close",
            success: "Your email was successfully sent",
            fail: "That did not work. Please try again later!",
            required: "Please fill out every field!",
        };
    } else {
        input = {
            title: "Titel",
            text: "Schreibe deine Nachricht hier",
            submit: "Absenden",
            reset: "Schliessen",
            success: "Deine Email wurde erfolgreich verschickt!",
            fail: "Das hat leider nicht funktioniert! Versuche es bitte später erneut",
            required: "Bitte fülle jedes Feld aus!",
        };
    }

    // _______________ translation for languageContext end  _____________

    const handleChange = (e) => {
        setRequired(null);
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        // console.log("SEND");
        e.preventDefault();
        if (honey === true) {
            // console.log("trapped in honeypot");
            // closeContactForm();
            return;
        } else if (
            toSend.name === "" ||
            toSend.email === "" ||
            toSend.Title === "" ||
            toSend.message === ""
        ) {
            setRequired(input.required);
        } else {
            send(ServiceID, TemplateID, toSend, UserID).then(
                (result) => {
                    // console.log("Email was send", result.text);
                    // window.scrollTo(0, 0);
                    setText(input.success);
                },
                (error) => {
                    // console.log("email sending failed", error.text);

                    setText(input.fail);
                }
            );
        }
    };

    const resetForm = (e) => {
        e.preventDefault();
        document.getElementById("reset").reset();
        setRequired(false);
        setToSend({
            name: "",
            email: "",
            Title: "",
            message: "",
        });
        if (setClick) {
            setClick(false);
        }
    };

    const honeypot = (e) => {
        // console.log("honeypot");
        e.preventDefault();
        setHoneypot(true);
    };

    const closeContactForm = (e) => {
        e.preventDefault();
        setText(null);
        if (setClick) {
            setClick(false);
        }
    };

    return (
        <>
            {language === "en" ? (
                <h1 className="contact-form-header main-header">
                    {"Get in contact".toUpperCase()}
                </h1>
            ) : (
                <h1 className="contact-form-header main-header">
                    {"schreibe mir eine Email".toUpperCase()}
                </h1>
            )}
            <div className="contact-form-container" id="contact-form-container">
                <div className="contact-form-inner-container" id="emailSlider">
                    {!text ? (
                        <form className="contact-form" id="reset">
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
                                placeholder={input.title}
                                required
                                value={toSend.Title}
                                onChange={handleChange}
                            />

                            {language === "en" ? (
                                <label>Message</label>
                            ) : (
                                <label>Nachricht</label>
                            )}

                            <textarea
                                className="contact-form-input contact-form-textarea"
                                name="message"
                                rows="9"
                                // cols="33"
                                placeholder={input.text}
                                required
                                value={toSend.message}
                                onChange={handleChange}
                            />

                            {requiredField}
                            <button
                                onClick={(e) => onSubmit(e)}
                                className="button-contact-form send"
                            >
                                {input.submit}
                            </button>
                            <button
                                onClick={(e) => resetForm(e)}
                                className="button-contact-form"
                            >
                                {input.reset}
                            </button>
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
                            <button
                                onClick={(e) => closeContactForm(e)}
                                className="button-contact-form"
                            >
                                Ok
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
