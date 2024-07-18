import Navbar from "./Navbar/page";
import HomePage from "./HomePage/page"
import Logo from '../public/logo.png'
import EQbeatsIQ from "./Eq_Iq/page";
import SoundsFamiliar from "./SoundsFamiliar/page";
import MeetAhead from "./MeetAhead/page";
import SelfImprovement from "./SelfImprovment/page";
import Skills from "./Skills/page";
import Test from "./Test/page";
import Work from "./Work/page";
import OpenVacancies from "./Vacancy/page";
import Footer from "./Footer/page";


export default function Home() {
  
  return (
    <div className="max-w-[1440px] m-auto">
      <Navbar />
      <HomePage title="Ahead app" />
      <EQbeatsIQ />
      <SoundsFamiliar />
      <MeetAhead />
      <SelfImprovement />
      <EQbeatsIQ />
      <Skills />
      <Test />
      <Work />
      <OpenVacancies />
      <Footer />
    </div>
  )
}
