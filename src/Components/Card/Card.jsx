import Pp from "../../../../images/image-jeremy.png";

function Card() {
  return (
    <>
      <div className="bg-[#1D204B] text-[#F7FAFF] w-100 h-160 justify-center rounded-3xl items-center">
        <div className="bg-[#5746EA] text-[#F7FAFF] w-100% h-100 pt-10 pb-10 pl-2 pr-2 mb-4 rounded-3xl">
            <img src={Pp} className="h-30 w-35 mb-10 pl-5" />
            <span className="text-1xl pl-5 text-[#918EEC]">Report for</span>
            <h1 className="text-6xl pl-5">Jeremy Robson</h1>
        </div>
        <div className="ml-7">
            <p className="mt-10 text-2xl text-[#918EEC]">Daily</p>
            <p className="mt-3 text-2xl">Weekly</p>
            <p className="mt-3 text-2xl text-[#918EEC]">Monthly</p>
        </div>
      </div>
    </>
  )
}

export default Card
