

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3x text-black '>
      <h1 className="font-['NeueMontreal'] text-[4vw]  leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      
      <div className="w-full  flex  border-t-[2px] pt-10 mt-20 border-[#a4c337]" >
      <div className="w-1/2">
        <h1 className="text-7xl">Our approach:</h1>
        <button className=" flex  uppercase gap-10 items-centerpx-10  px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white">Read More
          <div className="w-2 h-2 bg-zinc-100   rounded-full"></div>
        </button>
        <p className="py-6 font-semibold font-['NeueMontreal']">We create tailored presentations to help you persuade
         your colleagues, clients, or investors. Whether it’s live or
          digital, delivered for one or a hundred people.
          </p>
      </div>
      <div className="w-1/2 h-[50vh] rounded-3xl]">
        <img className="rounded-xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"/>
      </div>
      </div>
     
    </div>
  );
}

export default About
