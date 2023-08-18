import { useForm, ValidationError } from "@formspree/react";
import Navigation from "../../../components/Navigation"
import Item from "../../../components/Item"
import { contactIcons } from "../../../data/icons"
import profile from "../../../assets/img/portfolio_image.png";
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkvqzeq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <section id="contact" className="contact">
      <Navigation section="contact"/> 
      <h1>Contact</h1>
      <ul className='icon-group'>
        {contactIcons.map((icon)=>(<Item key={icon.id} name={icon.name} route={icon.route} path={icon.path} />))}
      </ul>
      <img src={profile} alt='Profile' />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
        </label>
        <input id="name" type="text" name="name" placeholder="Your Name" required/>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="example@mail.com"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
          </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message..."
          required
        />
        <button type="submit" disabled={state.submitting}>
          Start Collaboration
        </button>
      </form>
    </section>
  )
}

export default Contact
