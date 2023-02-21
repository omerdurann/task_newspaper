import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../style.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Profile from "../img/3.png";

export const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="about">
          <div className=" mt-5">
            <div className="resume-container">
              <div className="about-section me">
                <img src={Profile} alt="" />
                <h1>Ömer Duran</h1>
                <p>
                  <b>Junior Frontend Developer</b>
                </p>
                <p>omerduran4433@gmail.com</p>
                <a
                  className="icons"
                  href="https://www.linkedin.com/in/omerdurann/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="icons"
                  href="https://github.com/omerdurann"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a
                  className="icons"
                  href="https://twitter.com/omer_durannt"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>

              <div className="shadow-1-strong bg-white my-5 p-5" id="about">
                <div className="about-section">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h2 fw-light mb-4">About Me</h2>
                      <p>
                        Selam ben Ömer Duran. İnönü Üniversitesi Bilgisayar
                        Programcılığı bölümünden 2021 yılında mezun oldum. Web
                        tasarım ve geliştirme üzerinde çalışıyorum. Kendimi
                        <strong> Front-End</strong> alanında geliştiriyorum.
                        Çabuk öğrenen ve işi bitiren bir ekip çalışanıyım.
                      </p>
                      <p>
                        Daha önce Vircon Group Technologies şirketinde 10 ay
                        staj yaptım. Staj yaptığım sürede HTML, CSS, BOOTSTRAP,
                        JAVASCRIPT, GOLANG, MONGODB gibi birçok teknoloji
                        kullanarak projeler geliştirdim.
                      </p>
                    </div>
                    <div className="col-md-5 offset-lg-1">
                      <div className="row mt-2">
                        <p className="mt-5">
                          Haz 22 - Ağu 22 Tarihleri arasında Wingie Group
                          Enuygun.com'un düzenlemiş olduğu QA Test Automation
                          Bootcamp'ine katılım sağladım. Bootcamp sürecinde
                          JAVA, SELENIUM ve APPIUM eğitimi aldım.
                        </p>
                        <p>
                          Eyl 22 - Ara 22 Tarihleri arasında Kodluyoruz'un
                          düzenlemiş olduğu REACT Bootcamp'ine katılım sağladım.
                          Bootcamp sürecinde JAVASCRIPT ve REACT eğitimi aldım.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
