"use client";
import { BackgroundGradient } from "./ui/background-icon";
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
const Intro = () => {
    const message = 'Hi, I\'m'
    const name = 'Juan Patrick Gallardo'
    const profession = 'Professional Software Developer'

    return (
        <>
        <div className="flex flex-col-reverse sm:flex-row sm:pt-24 justify-between">
            <div className="pl-12 sm:pt-32 sm:pl-20 pt-2">
                <div className="text-white text-[56px] font-bold arimo mb-[-1.5rem]">{message}</div>
                <div className="w-[60%] sm:w-[100%] text-[#ffb703] text-[56px] font-bold montserrat w-[365px] drop-shadow-[-2px_4px_#a85b03]">{name}</div>
                <TextGenerateEffect words={profession} duration={2} filter={false} />
             </div> 
            <div className="sm:self-center sm:pt-0 pt-20 ml-20 mr-20 sm:ml-5 sm:mr-5">
            <BackgroundGradient className="rounded-full max-w-sm">
                <img className="rounded-full sm:ml-0 sm:w-[100%] aspect-auto" src={require('../assets/front-photo.png')} alt="profile-photo"></img>
                </BackgroundGradient>
            </div>
        </div>
        </>
    )
}

export default Intro;