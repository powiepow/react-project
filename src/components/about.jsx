import React from "react";
import aboutMe from"../assets/aboutme.png";

const About = () => {
    return (
        <>
        <main className="about">
            <div className="about-con">

                <div className="about-img">
                    <img src={aboutMe} alt="" />
                </div>

                <div className="about-text">
                    <h1>ABOUT ME</h1>
                    <h2>PADWA TINGKASAN - FRONTEND DEVELOPER</h2>
                    <p> A frontend developer who enjoys building user-friendly and visually appealing web applications. I’m still learning and improving my skills, but I have experience working with HTML, CSS, JavaScript, and some frontend framework like React Js.
                    <br /><br />I love exploring new technologies and figuring out how to create better user experiences. Right now, I’m focused on improving my understanding of responsive design, performance optimization, and accessibility.
                    <br /> <br />I’m always open to learning new things and growing as a developer. Looking forward to working on exciting projects and gaining more experience along the way!
                    </p>
                </div>

            </div>

        </main>
        </>
    );
};

export default About;