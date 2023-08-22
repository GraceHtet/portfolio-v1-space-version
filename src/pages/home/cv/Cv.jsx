import PropTypes from 'prop-types';
import Navigation from "../../../components/Navigation"
import Button from "../../../components/Button"
import cv from "../../../assets/img/cv.png"
import moon from "../../../assets/img/moon.svg"

const Cv = ({type}) => {
  return (
    <section>
    <Navigation section='cv' type={type}/>
      <h1>CV</h1>
      <img src={cv} alt='cv'/>
      <Button name='Get CV' link ='https://drive.google.com/file/d/1hpZ8Jhfe8rqFtprV3lQgck5dfVTES6Fs/view?usp=sharing'/>
      <img src={moon} className='hero-moon' alt='moon' />
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
