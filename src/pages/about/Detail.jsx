import Navigation from "../../components/Navigation"
import grace from '../../assets/img/grace.png'
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Detail = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeIn = {
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out 0.5s"
  }
  return (
    <section id='detail' className="detail grid-center">
      <Navigation section='about'/>
      <div className="detail-body" style={fadeIn}>
        <h1 ref={ref}>About Me</h1>
        <p className="detail" >
        My coding journey started in 2022 with HTML, CSS, JS, React, and Ruby On Rails at Microverse, a remote software development program that offered me a chance to continue my developer journey. <br/>
        During Microverse, I had to study online and did pair programming with people worldwide for about a year.<br/>
        I have honed my skills in front-end and back-end development, as well as database management and server-side scripting. My ultimate goal is to build websites that not only meet the needs of my clients but also exceed their expectations in terms of functionality and design.  <br/>
        <br/>
        I can help you build a product, feature, or website. Take a look at my works.
        </p>
        <a href='/project' className="btn">Project &gt;&gt;</a>
      </div>  

      <img src={grace} className='detail-img' style={fadeIn} alt='grace'/>
    </section>
  )
}

export default Detail
