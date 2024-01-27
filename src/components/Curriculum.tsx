import React from "react";


import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { Grid } from "@material-ui/core";


const Curriculum: React.FC = () => {
    return (
        <>
           <div className="w-screen h-screen bg-slate-300 container relative justify-between mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"> 
                <section className="w-full mx-auto max-w-2xl space-y-8 bg-slate-300">
                    
                <div className="flex items-center">
                    
                 <div className="space-y-1">
                 <span className="relative shadow-2xl flex shrink-0 overflow-hidden rounded-xl h-28 w-28">
                        <img className="aspect-square h-full w-full" src="aw.png"></img>
                    </span>
                    <h1 className="text-3xl pt-2">Henrique Juste</h1>
                    <p className="font-light text-lg">16 Years old self taught developer.</p>
                    <a className="font-extralight pb-2 items-center flex"><PiPaperPlaneTiltBold  className="mr-1"/><span>São Paulo/Brazil</span></a>
                    
                    <div className="flex w-max text-2xl text-black text-opacity-50 shadow-2xl bg-white rounded">
                        <a href="mailto:aelysch@proton.me" className="transition border m-1 rounded border-black border-opacity-50 inline-flex items-center justify-center srounded-md font-medium hover:border-opacity-100 h-8 w-8">
                            <MdOutlineEmail/>
                        </a>
                        <a href="tel:+5519989770025" className="transition border m-1 rounded border-black border-opacity-50 inline-flex items-center justify-center srounded-md font-medium hover:border-opacity-100 h-8 w-8">
                             <BsTelephone />
                        </a>
                        <a href="https://github.com/LysImbecile" className="transition border m-1 rounded border-black border-opacity-50 inline-flex items-center justify-center srounded-md font-medium hover:border-opacity-100 h-8 w-8">
                             <FiGithub />
                        </a>
                   
                    </div>
                    <p className="pt-5">I'm a young student from Brazil, i speak English and Portuguese, Currently learning Italian too. I love to learn and make new solutions to solve the day to day problems, i'm a developer focused in Backend but i have experience developing Frontend applications with modern frameworks.  </p>
                 </div>
              
                </div>
                <section>
                    
                    <h1 className="text-3xl">Education</h1>
                    <div>
                    <p className="pt-2">Technical course at SENAC</p>
                    <p className="text-sm font-light pl-2">- Technical in Software Development</p>
                    </div>
                    <div className="pt-2">
                    <p>High school</p>
                    <p className="text-sm font-light pl-2">- Currently coursing the second year of the high school.</p>
                    </div>
                 </section>

                 <section>
                
                        <h1 className="text-3xl">Skills</h1>
                        <div className="pt-2">
                        <p>Front-end</p>
                        <p className="text-sm font-light pl-2">- HTML, CSS, Javascript, Typescript, React, TailwindCSS.</p>
                        </div>
                        <div className="pt-2">
                        <p>Back-end</p>
                        <p className="text-sm font-light pl-2">- NodeJS, Python, Express, Sqlite, MySQL, Express, Fastify, Prisma</p>
                        </div>
                        <div className="pt-2">
                        <p>Others</p>
                        <p className="text-sm font-light pl-2">- Git, Github, Figma, Office, Bash, Linux, Yarn.</p>
                        </div>

                    </section>
                    
                
            </section>
           </div>

         
        </>
    );
};

export default Curriculum;