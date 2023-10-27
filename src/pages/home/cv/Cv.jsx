import PropTypes from 'prop-types';
import Navigation from "../../../components/Navigation"
import Button from "../../../components/Button"
import cv from "../../../assets/img/cv.png"
import moon from "../../../assets/img/moon2.svg"
import './Cv.css'
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Cv = ({type}) => {

  
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeIn = {
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out 0.5s"
  }

  const fadeUp = {
    transform: isInView ? "translate(-10%, 0%)" : "translate(-10%,50%)",
    transition: "all 1s ease-in-out 0.5s"
  }
  return (
    <section ref={ref} className='cv'>
    <Navigation section='cv' type={type}/>
      <h1>CV</h1>
      <div className='cv-body' style={fadeIn}>
      <img src={cv} className='cv-img' alt='cv'/>
        <Button name='Get CV' link ='https://drive.google.com/file/d/1mUbIqkROYFC-uwY0cYNITxLu8TboNkba/view?usp=sharing'/>
        <img src={moon} className='cv-moon p-abs planet' style={fadeUp} alt='cv-moon' />
      </div>
    </section>
  )
}

Cv.propTypes = {
  type: PropTypes.string,
}

Cv.defaultPrpos = {
  type:'',
}

export default Cv
