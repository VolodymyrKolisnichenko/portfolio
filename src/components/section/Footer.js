import "./Footer.css"

import instagram from "./img/icons/instagram.svg";
import twitter from "./img/icons/twitter.svg";
import gitHub from "./img/icons/gitHub.svg";
import linkedIn from "./img/icons/linkedIn.svg";

const Section = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://instagram.com/another_shine?igshid=YmMyMTA2M2Y="><img src={instagram} alt="Link" /></a></li>
                <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                <li className="social__item"><a href="https://github.com/anotherShine"><img src={gitHub} alt="Link" /></a></li>
                <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
                <p>© 2023 frontend-dev.com</p>
            </div>
        </div>
    </div>
</footer>

  );
};

export default Section;
