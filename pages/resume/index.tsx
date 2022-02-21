import React, { useState } from "react";
import Captcha from "../../components/Captcha";

interface Payload {
  name: string;
  email: string;
  institution: string;
  captcha: string;
}

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [captcha, setCaptcha] = useState("");

  function onPost(data: Payload) {
    return fetch(
      "https://qtb3jd3vrl.execute-api.us-east-2.amazonaws.com/prod/forward_form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      // Hard-coding it for now!
      const resumeUrl =
        "https://s3.us-east-2.amazonaws.com/qianwan.dev/QianWan_2022.pdf";
      https: window.open(resumeUrl);
    });
  }

  function validateButton() {
    return name && email && institution && captcha;
  }

  return (
    <div className="resume-form">
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name (required)"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email (required)"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            value={institution}
            onChange={(e) => {
              setInstitution(e.target.value);
            }}
            type="text"
            placeholder="Institution (required)"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-university" />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="Message" />
        </div>
      </div>
      <Captcha onVerify={setCaptcha} />
      <div className="button_row">
        <button
          style={{ marginTop: "15px", marginRight: "15px" }}
          disabled={!validateButton()}
          className="button is-primary"
          onClick={() => onPost({ name, email, institution, captcha })}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
