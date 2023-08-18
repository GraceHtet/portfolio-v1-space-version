import Navigation from "../../../components/Navigation"
import saturn from "../../../assets/img/saturn.png"
import Button from "../../../components/Button"

const HomeAbout = () => {
  return (
    <section id="homeAbout">
      <Navigation section='homeAbout'/>
      <h1>About me</h1>
      <p>
        Hello!<br/>
        I am <span className="name">Thiri Htet Htet Aung</span> (aka <span className="highlight">Grace</span>),<br/> <span className="hightlight">React-Ruby On Rails</span> developer. <br/>
          I have always been passionate about creating and designing websites that are both visually appealing and user-friendly.
      </p>
      <Button name='See more...' link='/about'/>
      <img src={saturn} alt={saturn} />
    
    </section>
  )
}

export default HomeAbout
