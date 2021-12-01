import React from "react";
import "../../App.css";
import { useEffect } from "react";
import "./dVox.css";
import Aleksandr from "../../images/Aleksandr_compress100.jpg";
import Fatima from "../../images/Fatima_compress100.jpg";
import Revaz from "../../images/Revaz_compress80.jpg";
import David from "../../images/David.jpg";
import SocialMediaButtons from "react-social-media-buttons";
import YouTube from 'react-youtube';
import "./dVox.css"

class Person extends React.Component {
  render() {
    return (
      <div className="developers-person-container">
        <div className="card-teamDev">
          <img src={this.props.img} className="dev-placeimg" alt="Developer"></img>
        </div>
        <div className="developers-person-sectionOne">
          <div className="developers-person-text-container">
            <ul>
              <h3 className="developers-person-name"> {this.props.name} </h3>
              <h4 className="developers-person-title"> {this.props.title} </h4>
              <h4 className="developers-person-title">
                {" "}
                {this.props.subtitle}{" "}
              </h4>
              <a
                className="developers-person-email-a"
                href={"mailto:" + this.props.email}
              >
                {" "}
                <h4 className="developers-person-email">
                  {" "}
                  {this.props.email}{" "}
                </h4>{" "}
              </a>
            </ul>
            <div className="developers-person-social-media">
              <SocialMediaButtons
                links={[this.props.github, this.props.linkedin]}
                className="social-mendia-buttons"
                buttonStyle={{
                  margin: "0px 10px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  border: "2px solid #000000",
                }}
                iconStyle={{ color: "#000000" }}
                openNewTab={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default function DVox() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <ReactPlayer
        className="videoTag"
        playing="true"
        loop="true"
        moot="true"
        height="100vh"
        width="100vw"
        config={{
          file: {
            attributes: {
              style: {
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              },
            },
          },
        }}
        url={videoProjects}
      /> */}



      {/* <Link to="/projects">Go back to projects</Link> */}

      {/* this is the second section with the image of DVox and description */}
      <div>



        <div>

          <div>
            <div className="dVox-Card">
             
              <div className="dvoxtext">
                <h1>dVox</h1>
              </div>
              <h1 className="vyt">voice your thoughts</h1>
              <div className="downloadApp">
                <a href='https://dpearth.com/dvoxIos'>
                  <button className="btnDownload">iOS download</button>
                </a>
                <a href='https://dpearth.com/dvoxAndroid'>
                  <button className="btnDownload">Android download</button>
                </a>
              </div>
              <div className="descriptiondVox">
                <p>
                  A decentralized application built to help Kalamazoo College students share their thoughts and ideas anonymously.
                  Built with Ethereum blockchain system.
                </p>
              </div>
              <div className="YouTube-mobile">
                <YouTube   opts={{
                              width: '100%'                          }}
                videoId="Eu2gW1d_whY" />
                <br/>
                <YouTube opts={{
                              width: '100%'
                            }}
                 videoId="X_9bzjMV16I" />
              </div>
            </div>

            <div className="dev-column">

              <Person
                name="Aleksandr Molchagin"
                title="Founder, 1st gen dev"
                subtitle="CS & Business @ Kalamazoo College"
                img={Aleksandr}
                email="contact@aleksandrmolchagin.com"
                github="https://github.com/AleksandrMolchagin"
                linkedin="https://www.linkedin.com/in/amolchagin/"
              ></Person>

              <Person
                name="Revaz Bakuradze"
                title="1st gen dev"
                subtitle="CS & Math @ Kalamazoo College"
                img={Revaz}
                github="https://github.com/RevazBakuradze"
                linkedin="https://www.linkedin.com/in/revaz-bakuradze/"
                email="revaz.bakuradze18@kzoo.edu"
              ></Person>

            </div>
            <div className="dev-column">

              <Person
                name="David Xu"
                title="1st gen dev"
                subtitle="CS + Math minor @ Kalamazoo College"
                img={David}
                github="https://github.com/DaveXFin"
                linkedin="https://www.linkedin.com/in/david-xu-976384207/"
                email="david.xu@windowslive.com"
              ></Person>

              <Person
                name="Fatima Ortega"
                title="1st gen dev"
                subtitle="CS & Business @ Kalamazoo College"
                img={Fatima}
                github="https://github.com/FatimaOrtega"
                linkedin="https://www.linkedin.com/in/fatima-ortega-402015170/"
                email="fatimarortega@gmail.com"
              ></Person>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
