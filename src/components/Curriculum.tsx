import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { CiStar } from "react-icons/ci";


const Curriculum: React.FC = () => {
    return (
        <>
           <div className="w-screen h-screen scroll-smooth bg-slate-300 container relative justify-between mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"> 
                <section className="w-full mx-auto max-w-2xl space-y-8 bg-slate-300">
                    
                <div className="flex items-center">
                    
                 <div className="space-y-1">
                 <span className="relative shadow-2xl flex shrink-0 overflow-hidden hover:transition hover:rounded-md rounded-xl hover:scale-110 h-28 w-28">
                        <img className="aspect-square h-full w-full hover:transition hover:scale-105" src="aw.jpeg"></img>
                    </span>
                    <h1 className="text-3xl pt-2 flex items-center">Henrique Juste<CiStar className="text-green-800 hover:transition hover:text-yellow-400 pl-1 pt-1 font-extralight" /></h1>
                    <p className="font-light text-lg">16 Years old self taught developer.</p>
                    <a className="font-extralight pb-2 items-center flex"><PiPaperPlaneTiltBold  className="mr-1"/><span>São Paulo/Brazil</span></a>
                    
                    <div className="flex w-max text-2xl text-black text-opacity-50 shadow-2xl bg-white rounded">
                        <a href="mailto:aelysch@proton.me" className="transition border m-1 rounded border-black border-opacity-50 inline-flex items-center justify-center srounded-md font-medium hover:border-opacity-100 h-8 w-8">
                            <MdOutlineEmail className="hover:text-green-800"/>
                        </a>
                        <a href="tel:+5519989770025" className="transition border m-1 rounded border-black border-opacity-50 inline-flex items-center justify-center srounded-md font-medium hover:border-opacity-100 h-8 w-8">
                             <BsTelephone className="hover:text-green-800"/>
                        </a>
                        <a href="https://github.com/henriquejustee" className="transition border m-1 rounded border-black border-opacity-50 inline-flex items-center justify-center srounded-md font-medium hover:border-opacity-100 h-8 w-8">
                             <FiGithub className="hover:text-green-800" />
                        </a>
                   
                    </div>
                    <p className="pt-5 indent-3">I'm a young student from Brazil, i speak English and Portuguese, Currently learning Italian too. I love to learn and make new solutions to solve the day to day problems, i'm a programmer focused on Rust language, but i have a decent knowledge of web development.  </p>
                    <p className="pt-1 indent-3">It has been two years since I decided to invest my time in what I truly love – coding. I've never been dependent on others or school, and I'm only here because I've put in the effort to learn. I don't learn programming for the sake of money or solely for professional goals; it's what draws me in, sparks my curiosity, makes me think, and ultimately helps me develop as a discerning critic.</p>
                    <p className="font-light italic">* i love to learn things on the hardest way. *</p>
                 </div>
              
                </div>
                <section>
                    
                    <h1 className="text-3xl">Education</h1>
                    <div>
                    <p className="pt-2">Technical course at SENAC-RS</p>
                    <p className="text-sm font-light pl-2">- Technical in Software Development</p>
                    </div>
                    <div className="pt-2">
                    <p>High school</p>
                    <p className="text-sm font-light pl-2">- Currently coursing the second year of the high school.</p>
                    </div>
                 </section>

                 <section>
                
                        <h1 className="text-3xl">Skills</h1>
                        <p>I'm not a web developer, but as I mentioned earlier, I have a decent knowledge to create things like REST APIs and CRUD applications. My main focus is on low-level programming languages, more specifically, Rust.</p>
                        <div className="pt-2">
                        <p>Front-end</p>
                        <p className="text-sm font-light pl-2">- React, TailwindCSS, HTML/CSS.</p>
                        </div>
                        <div className="pt-2">
                        <p>Back-end</p>
                        <p className="text-sm font-light pl-2">- NodeJS, Javascript, Typescript, Express, SQL, Express, Prisma.</p>
                        </div>
                        <div className="pt-2">
                        <p>Others</p>
                        <p className="text-sm font-light pl-2">- Python, Git, Office, Bash, Linux, Yarn.</p>
                        </div>

                    </section>
                    
                
            </section>
           </div>

         
        </>
    );
};

export default Curriculum;