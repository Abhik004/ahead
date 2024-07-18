import Image from "next/image";

interface BoxProps {
  title: string;
  description: string;
  imageSrc: string; // Assuming imageSrc is a string URL or key to an emoji
  bgColor: string; // Ensure bgColor is a valid Tailwind CSS color name or class
}

const Box = () => (
  <>
  <div className={`rounded-xl bg-purple-200 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">😠</span>
    <h3 className="font-bold text-lg">You argue with a colleague</h3>
    <p className="text-gray-700">You get angry and defensive, instead of staying open and working towards common ground</p>
  </div>
  
  <div className={`rounded-xl bg-blue-300 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">😳</span>
    <h3 className="font-bold text-lg">You get a prmotion at work</h3>
    <p className="text-gray-700">You question yourself and wonder unqualified imposter instead of trusting yourself & your abilites</p>
  </div>

  <div className={`rounded-xl bg-yellow-200 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">🤨</span>
    <h3 className="font-bold text-lg">You attend a class reunion</h3>
    <p className="text-gray-700">You compare yourelf with your peers your self judgement more indeoendent of others.</p>
  </div>

  <div className={`rounded-xl bg-violet-600 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">😖</span>
    <h3 className="font-bold text-lg">You hit dead end in a negotiation</h3>
    <p className="text-gray-700">You get fruzzeled, nervous and frustated instead of staying optmisitic and solution-oriented.</p>
  </div>

  <div className={`rounded-xl bg-blue-100 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">😖</span>
    <h3 className="font-bold text-lg">You are at a lively dinner party</h3>
    <p className="text-gray-700">You get fruzzeled, nervous and frustated instead of staying optmisitic and solution-oriented.</p>
  </div>

  <div className={`rounded-xl bg-purple-200 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">😒</span>
    <h3 className="font-bold text-lg">You argue with a colleague</h3>
    <p className="text-gray-700">You get angry and defensive,instead of staying open and working towards common ground.</p>
  </div>

  <div className={`rounded-xl bg-green-200 min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    <span className="text-4xl">🫠</span>
    <h3 className="font-bold text-lg">You are at a lively dinner party</h3>
    <p className="text-gray-700">You play on your phone instead of confidentaly approaching starangersand striking up a chat.</p>
  </div>
  
  
  </>
  
);

export default Box;
