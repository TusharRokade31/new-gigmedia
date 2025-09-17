import Banner from "@/components/home/Banner";
import DreamStudio from "@/components/home/DreamStudio";
import OwnersSection from "@/components/home/OwnersSection";
import Slider, { MarqueeDemo } from "@/components/home/Slider";
import { MarqueeDemo2 } from "@/components/home/Slider2";
import { TextAnimation } from "@/components/home/TextAnimation";


export default function Home() {
  return (
    <div>
      <Banner/>
      <MarqueeDemo/>
      <OwnersSection/>
      <DreamStudio/>
      <MarqueeDemo2/>
      <TextAnimation/>
    </div>
  );
}
