

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex item-center  py-32 gap-5">
      <div className="cardcontainer  h-[50vh] w-1/2">
        <div className="card relative w-full rounded-lg  h-full  bg-[#004D43] flex items-center justify-center">
            <img className="" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""/>
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 text-[#a4c337] border-[#a4c337]">&copy;2003-2024</button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
      <div className="card  relative w-1/2 h-full  rounded-lg bg-[#212121] flex items-center justify-center">
        <img  className ="" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""/>
        <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full  border-2 border-[#fffff] ">RATING5.0 ON CLUTCH</button>

      </div>
      <div className="card  relative w-1/2 h-full rounded-lg  bg-[#212121] flex items-center justify-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""/>
        <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 text-[#ffffff] border-[#ffffff]">BUSSINESS BOOTCAMP</button>

      </div>


        </div>
    </div>
  )
}

export default Cards
