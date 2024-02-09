import { motion } from "framer-motion"

const Featured = () => {

    return (
        <div className="w-full py-20 ">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-8xl font-['NeueMontreal'] tracking-tight">Featured Projects</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10 ">
                    <div className="cardcontainer relative w-1/2 h-[75vh]">

                        <div className=" card w-full h-full rounded-xl overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </div>

                    <div className="cardcontainer  relative w-1/2 h-[75vh] rounded-lg">

                        <div className=" card w-full h-full rounded-xl overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Featured
