import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";

const Top = () => {
  return (
    <div className="top">
      <div className="holder">
        <a
          target="_blank"
          className="link"
          href="https://twitter.com/NateTheWebDev"
        >
          NateTheWebDev{" "}
          <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faTwitterSquare} />
        </a>
        <h1 className="hero">
          <Typewriter
            options={{
              strings: [
                "Nathaniel Richards Is A Software Engineer",
                "Nathaniel Richards Is A Game Developer",
                "Nathaniel Richards Is A 3D Artist",
                "Nathaniel Richards Is A Cheese Lover",
                "Nathaniel Richards Built His First Computer At 11",
                "Nathaniel Richards Loves Dungeons and Dragons",
              ],
              delay: 0.4,
              cursor: "_",
              deleteSpeed: 0.2,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="links">
          <a
            className="hero-link"
            href="mailto:nthnlrichards@gmail.com"
            target="_blank"
          >
            Email
          </a>
          <a
            className="hero-link"
            href="https://github.com/NateTheDev1"
            target="_blank"
          >
            Github
          </a>
          <a
            className="hero-link"
            href="https://www.linkedin.com/in/nathaniel-richards-dev/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hero-link"
            href="https://open.spotify.com/playlist/4E9d78E05ZrXZMPi3ZKtDQ?si=30aa5f9bf8664dbd"
            target="_blank"
          >
            Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
