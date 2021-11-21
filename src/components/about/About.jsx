import "./About.css";
import Award from "../../img/award2.png";
import AboutImg from "../../img/about.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={AboutImg}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                    JavaScript & ReactJS Developer
                </p>
                <p className="a-desc">
                    Hi, my name is Ruslan. Junior Web-developer with a Bachelor's degree in
                    "Information systems and technologies in telecommunications" of
                    Kyrgyz State Technical University named after I.Razzakov.
                    Graduate of the training center "DevCIT Pro" of the American
                    University of Central Asia.
                    Recently, I've been doing web development, coding
                    and I work as a freelancer creating a business card websites.
                    Coding is easy. Coding is life.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h3 className="a-award-title">JavaScript developer | DEVcit Pro</h3>
                        <p className="a-award-desc">
                            Сompleted programming courses at the "DEVcit pro"
                            training center and received a certificate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
