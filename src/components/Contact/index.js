import React from 'react';
//import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // const [errorMessage, setErrorMessage] = useState('');
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const { name, email, message } = formState;
  // function handleChange(e) {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);
  //     // isValid conditional statement
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       if (!e.target.value.length) {
  //         setErrorMessage(`${e.target.name} is required.`);
  //       } else {
  //         setErrorMessage('');
  //       }
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }
  //   console.log('errorMessage', errorMessage);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  //console.log(formState);
  return (
    <section className="contact" id="contact">
      <div className="container container--contact">
        <h2>Contact</h2>
        <div className="form--container">
          <form
            action="https://formsubmit.co/emilython@hotmail.com"
            method="POST"
          >
            <div className="form-item">
              <label htmlFor="name">Name: </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                // defaultValue={name}
                // onBlur={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                // defaultValue={email}
                // onBlur={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                rows="5"
                // defaultValue={message}
                // onBlur={handleChange}
              />
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            {/* {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )} */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
