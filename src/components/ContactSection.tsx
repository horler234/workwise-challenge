import { useState } from "react";
import sanitize from "sanitize-html";
import { ArrowIcon } from "./icons";
import { validateContactForm } from "../validate/validateContactForm";
import { PlayIcon } from "./icons/PlayIcon";

/**
 * sanitize prevents XSS attacks
 */

export const ContactSection = () => {
  // error states
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
  const [companyError, setCompanyError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  // form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE CHANGE FUNCTIONS
  const handleName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const contactName = sanitize(evt.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    });
    setName(contactName);
  };

  const handleEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const contactEmail = sanitize(evt.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    });
    setEmail(contactEmail);
  };

  const handlePhoneNumber = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const contactPhone = sanitize(evt.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    });
    setPhoneNumber(contactPhone);
  };

  const handleCompany = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const contactCompany = sanitize(evt.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    });
    setCompany(contactCompany);
  };

  const handleMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const contactMessage = sanitize(evt.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    });
    setMessage(contactMessage);
  };

  // SUBMIT EVENT
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // handle error states
    const { isValid, error } = validateContactForm({
      email,
      name,
      phoneNumber,
      companyName,
      message,
    });

    if (!isValid) {
      if (error?.email) {
        setEmailError(error.email);
      }
      if (error?.name) {
        setNameError(error.name);
      }
      if (error?.phoneNumber) {
        setPhoneNumberError(error.phoneNumber);
      }
      if (error?.message) {
        setMessageError(error.message);
      }
      if (error?.companyName) {
        setCompanyError(error.companyName);
      }
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: name,
          name,
          email,
          phone_number: phoneNumber,
          company_name: companyName,
          message,
        }),
      };
      fetch("https://workwise.ng/api/savemessage", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    setName("");
    setCompany("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className="contact-section-wrapper">
      <div className="video-play-wrapper">
        <button>
          <PlayIcon />
        </button>
      </div>

      <div className="development-title">
        <p>Get involved</p>
        <h1>Be Part of Our Community</h1>
      </div>

      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Full Name"
            id="full_name"
            onChange={handleName}
            value={name}
            onClick={() => nameError && setNameError(null)}
          />
          {nameError && <p>{nameError}</p>}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Email address"
            id="email"
            onChange={handleEmail}
            value={email}
            onClick={() => emailError && setEmailError(null)}
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Phone number"
            id="phone_number"
            onChange={handlePhoneNumber}
            value={phoneNumber}
            onClick={() => phoneNumberError && setPhoneNumberError(null)}
          />
          {phoneNumberError && <p>{phoneNumberError}</p>}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Company name"
            id="company_name"
            onChange={handleCompany}
            value={companyName}
            onClick={() => companyError && setCompanyError(null)}
          />
          {companyError && <p>{companyError}</p>}
        </div>

        <div className="textarea-wrapper">
          <textarea
            placeholder="Message"
            id="message"
            onChange={handleMessage}
            value={message}
            onClick={() => messageError && setMessageError(null)}
          />
          {messageError && <p>{messageError}</p>}
        </div>

        <button>
          Send Message
          <ArrowIcon />
        </button>
      </form>
    </div>
  );
};
