import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([]);
  useEffect(()=> {
    fetch('mySkills.json')
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      setSkills(data)
    })
  },[])
  return (
    <div className="App">
      <section className="identity">
        <h1 className="title">Abbas Ali</h1>
        <h4 className="profession"> Full Stack Developer</h4>
        <p className="location"> Rajbari District, Dhaka, Bangladesh</p>
      </section>
      <section className="contact">
        <h3 className="contacts">Contacts</h3>
       <div className="contact-container">
       <div>
        <div className="email-container">
          <h5 className="email-title">Email</h5>
          <p className="email">mabbasaliofficial@gmail.com</p>
        </div>
        <div className="github-container">
          <h5 className="github-title">GitHub</h5>
          <p className="github">https://github.com/mabbasaliofficial</p>
        </div>
        </div>
        <div>
        <div className="email-container">
          <h5 className="email-title">LinkedIn</h5>
          <p className="email">https://linkedin.com/in/mabbasaliofficial/</p>
        </div>
        <div className="github-container">
          <h5 className="github-title">Portfolio</h5>
          <p className="github">https://github.com/mabbasaliofficial</p>
        </div>
        </div>
       </div>
      </section>
      <section className="summary">
        <h3 className="summary-title">Summary</h3>
        <p className="summary-body">
          I am a Full Stack Web Developer. I have experience in both front-end and back-end
          development. I can develop high-quality web applications that are responsive, powerful,
          modern style, and visually attractive.
        </p>
      </section>
      <section className="skills">
        <h3>Skills & Proficiencies</h3>
        <div>
          {
            skills?.map(skill => <button className="skills-name" key={skill.id} disabled>{skill.name} <span className="skills-category">{skill.level}</span></button>)
          }
         
        </div>
      </section>
    </div>
  );
}

export default App;
