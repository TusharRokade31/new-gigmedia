import Banner from "@/components/home/Banner";
import DreamStudio from "@/components/home/DreamStudio";
import Exploreblog from "@/components/home/Exploreblog";
import Featuresprojects from "@/components/home/Featuresprojects";
import InnovatingSection from "@/components/home/InnovatingSection";
import OurServices from "@/components/home/OurServices";
import OurTeam from "@/components/home/OurTeam";
import OwnersSection from "@/components/home/OwnersSection";
import Slider, { MarqueeDemo } from "@/components/home/Slider";
import { MarqueeDemo2 } from "@/components/home/Slider2";
import TalkToUs from "@/components/home/TalkToUs";
import Testimonials from "@/components/home/Testimonials";
import { TextAnimation } from "@/components/home/TextAnimation";
import Worktogether from "@/components/home/Worktogether";


export default function Home() {
  return (
    <div>
      <Banner/>
      <MarqueeDemo/>
      <OwnersSection/>
      <DreamStudio/>
      <MarqueeDemo2/>
      <TextAnimation/>
      <OurServices/>
      <InnovatingSection/>
      <TalkToUs/>
      <OurTeam/>
      <Featuresprojects/>
      <Testimonials/>
      <Exploreblog/>
      <Worktogether/>
    </div>
  );
}
