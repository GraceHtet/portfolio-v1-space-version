import Navigation from "../../../components/Navigation"
import saturn from "../../../assets/img/saturn.png"
import Button from "../../../components/Button"
// import style from './HomeAbout.module.css';
import './HomeAbout.css';

const HomeAbout = () => {
  return (
    // <section id="homeAbout" className={style["home-about"]}>
    //   <Navigation section='homeAbout' className={`p-abs ${style.nav}`}/>
    //   <div className={style.container}>
    //     <h1>About me</h1>
    //     <p className={` ${style.intro}`}>
    //       Hello!<br/>
    //       I am <span className="name">Thiri Htet Htet Aung</span> (aka <span className="highlight">Grace</span>),<br/> <span className="hightlight">React-Ruby On Rails</span> developer. <br/>
    //         I have always been passionate about creating and designing websites that are both visually appealing and user-friendly.
    //     </p>
    //     <Button name='See more...' link='/about'/>
    //   </div>
    //   <img src={saturn} className={style.saturn} alt={saturn} />
    
    // </section>

    <section id="homeAbout" className="home-about">
      <Navigation section='homeAbout' className='p-abs nav'/>
      <div className='container'>
        <h1>About me</h1>
        <p className='intro'>
          Hello!<br/>
          I am <span className="name">Thiri Htet Htet Aung</span> (aka <span className="highlight">Grace</span>),<br/> <span className="hightlight">React-Ruby On Rails</span> developer. <br/>
            I have always been passionate about creating and designing websites that are both visually appealing and user-friendly.
        </p>
        <Button name='See more...' link='/about'/>
      </div>
      <img src={saturn} className='saturn' alt={saturn} />
    
    </section>
  )
}

export default HomeAbout
