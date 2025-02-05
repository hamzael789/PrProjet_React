import TroisP from "../../../../images/icon-ellipsis.svg";
// import Ex from "../../../../images/icon-exercise.svg";
// import Play from "../../../../images/icon-play.svg";
// import Self from "../../../../images/icon-self-care.svg";
// import Social from "../../../../images/icon-social.svg";
// import Study from "../../../../images/icon-study.svg";
// import Word from "../../../../images/icon-work.svg";


function MiniCard() {
  return (
    <>
      <div>
        <div className="bg-conic-{Self} rounded-3xl h-100 rounded-3xl">
            <div className=" bg-[#1D204B] rounded-3xl text-[#FAFDFF] h-80 w-90">
                <div className="flex justify-between items-center pt-5 pl-5 pr-5">
                    <h1 className="text-2xl m-5  font-bold">Work</h1>
                    <img src={TroisP} className="h-2 w-8 m-5 mt-3" />
                </div>
                <div className="mt-5 m-5">
                    <h1 className="text-8xl">32hrs</h1>
                    <p className="text-[#918EEC] text-2xl pt-5">Last Week - 36hrs</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MiniCard
