import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const textItems = [
  "CAPTURING MEMORIES",
  "ONE FRAME AT A TIME",
  "STUDIO PERFECTION FOR EVERY OCCASION",
  "INNOVATION STARTS IN THE STUDIO",
  "VISUAL STORYTELLERS, WEAVING MAGIC IN EVERY FRAME"
];

const TextCard = ({ text }) => {
  return (
    <div className="flex  items-center mx-4">
      <span className="text-black text-lg font-medium whitespace-nowrap">
        {text}
      </span>
      <span className="text-black text-lg mx-4">/</span>
    </div>
  );
};

export function MarqueeDemo2() {
  return (
    <div className="w-full bg-[#FF7120] py-4 overflow-hidden">
      <Marquee pauseOnHover={false} className="[--duration:30s]">
        {textItems.map((text, index) => (
          <TextCard key={index} text={text} />
        ))}
      </Marquee>
    </div>
  );
}