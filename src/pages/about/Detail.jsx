import Navigation from "../../components/Navigation"

const Detail = () => {
  return (
    <section id='detail'>
      <Navigation section='about'/>
      <h1>About Me</h1>
      <p className="detail">
      My coding journey started in 2022 with HTML, CSS, JS, React, and Ruby On Rails at Microverse, a remote software development program that offered me a chance to continue my developer journey. <br/>
      During Microverse, I had to study online and did pair programming with people worldwide for about a year.<br/>
      I have honed my skills in front-end and back-end development, as well as database management and server-side scripting. My ultimate goal is to build websites that not only meet the needs of my clients but also exceed their expectations in terms of functionality and design.  <br/>
      <br/>
      I can help you build a product, feature, or website. Take a look at my works.
      </p>
      <a href='/project'>Project</a>
    </section>
  )
}

export default Detail
