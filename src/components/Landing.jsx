import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";

const Landing = () => {
    
    return (
        <div className="w-full h-screen bg-zinc-900 border-t-2">
            <div className="textstructure mt-52 px-20">
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return (<div key={index} className="masker">
                        <div className="w-fit flex  items-end overflow-hidden">
                            {index === 1 && (
                                <motion.div initial={{width:0}} 
                                animate={{width:"9vw"}}
                                 transition={{ease:[0.76, 0, 0.24, 1],}} 
                                className=" mr-4 rounded-md w-[9vw] h-[6.5vw] relative top-[1vw]">
                                    <img className="border-lg" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"alt=""/>
                                </motion.div>
                            )}
                            <h1 className="uppercase text-[7vw]  leading-[7vw] tracking-tightfont-[' Test Founders_Grotesk X-Cond SmBd'] font-semibold">
                                {item}
                            </h1>
                        </div>
                    </div>
                    );
                })}


            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[2px] border-zinc-800   text-sm capitalize font-semibold rounded-full ">Start the Project</div>
                    <div className="w-9 h-9 flex items-center justify-center border-[2px] border-zinc-800 rounded-full">
                        <span className="rotate-[45deg]">
                            <FaLongArrowAltUp />
                        </span>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Landing
