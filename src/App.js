import React, { useState, useEffect } from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";
import HashLoader from "react-spinners/HashLoader";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])
  return (
    <div >
      {
        loading ?
          <div className="app">
            <HashLoader color={"#9013FE"} loading={loading} size={150} />

          </div>
          :


          <div className="App" style={{ position: "relative" }}>
            <MyNavbar />
            <MyTitleMessage />
            <MyCarousal />
            <Particles
              className="particles particles-box"
              params={particlesOptions}
            />

            <div>
              <Parallax
                blur={{ min: -30, max: 30 }}

              >
                <hr />
                <div>
                  <Container className="container-box rounded">
                    <Fade duration={500}>
                      <About />
                    </Fade>
                  </Container>
                </div>
              </Parallax>
            </div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <hr />
                <Skills />
              </Slide>
            </Container>
            <div>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <hr />

                  <Experience />
                </Fade>
              </Container>
            </div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
                <ContactForm />
              </Fade>
            </Container>

            <hr />
            <FooterPanel />
          </div>


      }
    </div>
  );
};

export default App;
