import { FlipWords } from "./ui/flip-words";
const Intro = () => {
    const message = 'Hi, I\'m'
    const name = 'Juan Patrick Gallardo'
    const profession = 'Professional'
    const professionList = ['Software_Developer', 'AI_Developer', 'Python_Developer']

    return (
        <>
        <div className="flex flex-col-reverse sm:flex-row sm:pt-24 justify-between">
            <div className="pl-9 sm:pt-32 sm:pl-20 pt-2">
                <div className="text-white text-[56px] font-bold arimo mb-[-1.5rem]">{message}</div>
                <div className="w-[60%] sm:w-[100%] text-[#ffb703] text-[56px] font-bold montserrat drop-shadow-[-2px_4px_#a85b03]">{name}</div>
                <div className="text-white text-[28px] font-bold arimo">{profession}</div>
                <FlipWords className='text-white text-[28px] font-bold arimo' words={professionList} />
                
             </div> 
            <div className="sm:self-center sm:pt-0 pt-20 ml-20 mr-20 sm:ml-5 sm:mr-5">
                <img className="rounded-full sm:ml-0 sm:w-[100%] aspect-auto" src={require('../assets/front-photo.png')} alt="profile-photo"></img>
            </div>
        </div>
        </>
    )
}

export default Intro;