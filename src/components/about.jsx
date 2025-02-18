import React from "react";

const About = () => {
    return (
        <>
        <main id='about-sec' className='w-full h-full bg-[#2B292F]'>
            <div id='parent-con' className='container mx-auto h-full flex items-center justify-center'>
            
            <div className='container flex w-[68vw] h-[60vh] mt-[5rem] items-center space-x-10 bg-[#D9D9D9] p-10'>
                <div className='border border-black w-[15vw] h-[50vh] flex justify-center items-center p-2'>
                    <img src="/public/about.png" className='0 h-full ' alt="" />
                </div>

                <div className='flex flex-col space-y-4 flex-1 pr-6'>
                    <h1 className='font-bold text-[2rem]'>ABOUT ME</h1>
                    <h2 className='font-bold text-[#D8871A]'>PADWA TINGKASAN - FRONT DEVELOPER</h2>
                    <p className="text-justify">
                    A frontend developer who enjoys building user-friendly and visually appealing web applications. I’m still learning and improving my skills, but I have experience working with HTML, CSS, JavaScript, and some frontend framework like React Js.
                    <br /><br />I love exploring new technologies and figuring out how to create better user experiences. Right now, I’m focused on improving my understanding of responsive design, performance optimization, and accessibility.
                    <br /> <br />I’m always open to learning new things and growing as a developer. Looking forward to working on exciting projects and gaining more experience along the way!
                    </p>
                </div>
            </div>

            </div>
        </main>


        </>
    );
};

export default About;