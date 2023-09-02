import { useForm, ValidationError } from "@formspree/react";
import Navigation from "../../../components/Navigation"
import Item from "../../../components/Item"
import { contactIcons } from "../../../data/icons"
import profile from "../../../assets/img/portfolio_image.png";
import moon from "../../../assets/img/moon2.svg"
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
      <div className="contact-body">
      <ul className='icon-group'>
        {contactIcons.map((icon)=>(<Item key={icon.id} name={icon.name} route={icon.route} path={icon.path} />))}
      </ul>
      <img src={profile} className="profile" alt='Profile' />

      <form onSubmit={handleSubmit} className="grid-center">
        <input 
          id="name" 
          type="text" 
          name="name" 
          placeholder="Your Name"  
          className="form-input" 
          required
        />
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="example@mail.com"
          className="form-input"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message..."
          rows="12"
          style={{"resize":"none", "borderRadius":"30px"}}
          className="form-input"
          required
        />
        <button type="submit" className="submit-btn" disabled={state.submitting}>
          Start Collaboration
        </button>
      </form>
      <img src={moon} className='contact-moon p-abs planet' alt='moon' />
      </div>
    </section>
  )
}

export default Contact
