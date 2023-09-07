import { useForm, ValidationError } from "@formspree/react";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Navigation from "../../../components/Navigation"
import Item from "../../../components/Item"
import { contactIcons } from "../../../data/icons"
import profile from "../../../assets/img/portfolio_image.png";
import moon from "../../../assets/img/moon2.svg"
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkvqzeq");
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const textRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeIn = {
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out 0.5s"
  }

  const fadeUp = {
    transform: isInView ? "translate(-50%, 0%)" : "translate(-50%,50%)",
    transition: "all 1s ease-in-out 0.5s"
  }

  useEffect(()=> {
    if(state.succeeded) { 
      
      setIsSubmitted(true);

      nameRef.current.value = '';
      mailRef.current.value = '';
      textRef.current.value = '';

      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }

  },[state.succeeded]);
  
  return (
    <section id="contact" className="contact">
      <Navigation section="contact" style={fadeIn}/> 
      <h1 ref={ref}>Contact</h1>
      <div className="contact-body">
      <ul className='icon-group' style={fadeIn}>
        {contactIcons.map((icon)=>(<Item key={icon.id} name={icon.name} route={icon.route} path={icon.path} />))}
      </ul>
      <img src={profile} className="profile" alt='Profile' style={fadeIn}/>

      <form onSubmit={handleSubmit} className="grid-center" style={fadeIn}>
      {isSubmitted && (<p className="msg">Thanks for interesting.</p>)}
        <input
          ref={nameRef}
          id="name" 
          type="text" 
          name="name" 
          placeholder="Your Name"  
          className="form-input" 
          required
        />
        <input
          ref={mailRef}
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
        ref={textRef}
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
      <img src={moon} className='contact-moon p-abs planet' style={fadeUp} alt='moon' />
      </div>
    </section>
  )
}

export default Contact
