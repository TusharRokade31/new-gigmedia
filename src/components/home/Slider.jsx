import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import logoE1 from "../../assets/images/i-e1.png"
import logoE2 from "../../assets/images/i-e2.png"
import logo2E1 from "../../assets/images/l2-e1.png"
import logo2E2 from "../../assets/images/l2-e2.png"
import logo3E1 from "../../assets/images/l3-e1.png"
import logo3E2 from "../../assets/images/l3-e2.png"
import logo4E1 from "../../assets/images/l4-e1.png"
import logo4E2 from "../../assets/images/l4-e2.png"
import logo5E1 from "../../assets/images/l-e1.png"
import logo5E2 from "../../assets/images/l-e2.png"
import logo6E1 from "../../assets/images/p-e1.png"
import logo6E2 from "../../assets/images/p-e2.png"
import Image from "next/image";

const logos = [
  {
    id: "logo1",
    defaultImg: logoE1,
    hoverImg: logoE2,
  },
  {
    id: "logo2", 
    defaultImg: logo2E1,
    hoverImg: logo2E2,
  },
  {
    id: "logo3",
    defaultImg: logo3E1,
    hoverImg: logo3E2,
  },
  {
    id: "logo4",
    defaultImg: logo4E1,
    hoverImg: logo4E2,
  },
  {
    id: "logo5",
    defaultImg: logo5E1,
    hoverImg: logo5E2,
  },
  {
    id: "logo6",
    defaultImg: logo6E1,
    hoverImg: logo6E2,
  },
];

const LogoCard = ({ defaultImg, hoverImg, id }) => {
  return (
    <div className="relative h-20 w-40  cursor-pointer mx-10 overflow-hidden group">
      {/* Default Image Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:translate-y-full">
        <Image 
          src={defaultImg} 
          alt={`${id} default`}
          width={160}
          height={80}
          className="object-contain max-h-full max-w-full"
        />
      </div>
      
      {/* Hover Image Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 -translate-y-full group-hover:translate-y-0">
        <Image 
          src={hoverImg} 
          alt={`${id} hover`}
          width={160}
          height={80}
          className="object-contain max-h-full max-w-full"
        />
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="w-full mt-10 px-5 flex items-center justify-center py-8">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden">
        <h2 className="text-white text-xl mb-8 text-center">
          Trusted by 1900+ Founders & Business Owners
        </h2>
        
        <Marquee pauseOnHover className="[--duration:20s]">
          {logos.map((logo) => (
            <LogoCard key={logo.id} {...logo} />
          ))}
        </Marquee>

      </div>
    </div>
  );
}