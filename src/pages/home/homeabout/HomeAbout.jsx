import Navigation from "../../../components/Navigation"
import saturn from "../../../assets/img/saturn.png"
import Button from "../../../components/Button"
import './HomeAbout.css';

const HomeAbout = () => {
  return (

    <section id="homeAbout" className="home-about">
      <Navigation section='homeAbout' className='grid-center nav'/>
      <div className='container'>
        <h1>About me</h1>
        <p className='intro'>
          Hello!<br/>
          I am <span className="name">Thiri Htet Htet Aung</span> (aka <span className="name">Grace</span>),<br/> <span className="highlight">React-Ruby On Rails</span> developer. <br/>
            I have always been passionate about creating and designing websites that are both visually appealing and user-friendly.
        </p>
        <Button name='See more...' link='/about'/>
      </div>
      <img src={saturn} className='saturn' alt={saturn} />
    
    </section>
  )
}

export default HomeAbout
