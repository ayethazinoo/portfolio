import React from 'react'
import cssPic from "./image/css-pic.png";
import htmlPic from "./image/html-pic.png";
import reactPic from "./image/react-pic.png";
import nodejsPic from "./image/nodejs-pic.png";
import teamsPic from "./image/teams-pic.png";
import vscodePic from "./image/vscode-pic.png";
import mongodbPic from "./image/mongodb-pic.png";
import expressPic from "./image/express-pic.png";
import gitPic from "./image/git-pic.png";
import githubPic from "./image/github-pic.png";



const Skill = () => {
  return (
    <div>
        <div className="w-full mt-6 px-4">
            <h4 className="text-3xl text-center font-bold tracking-tight text-blue-900">
                スキル
            </h4>
            <div className="container w-full mx-auto mt-10 mb-6">
                <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-2 justify-center items-center">
                    <img class="w-32 h-32 rounded-full" src={htmlPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={cssPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={reactPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={nodejsPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={expressPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={mongodbPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={gitPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={githubPic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={vscodePic} alt="htmlPic"></img>
                    <img class="w-32 h-32 rounded-full" src={teamsPic} alt="htmlPic"></img>  
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Skill
