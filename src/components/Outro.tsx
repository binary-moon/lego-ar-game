import legoLogo from "../images/brand_header_legodreamzzz@2x.png";
import background from "../images/Background@2x.png";
import mainText from "../images/Main_Text@2x.png";
import primeLogo from "../images/Prime_Logo@2x.png";
import legoCharacter from "../images/Lego_Character_2@2x.png";

export function Outro() {
  return (
    <div
      className="flex flex-col justify-between items-center w-full h-full absolute top-0 left-0 px-8 pt-20 pb-12"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img src={legoLogo} className="w-[90%]" alt="Lego - Dreamzzz" />
        <img
          src={legoCharacter}
          className="absolute top-[30%] -right-4 w-[40%]"
          alt="Lego Character"
        />
        <img
          src={mainText}
          className="w-[100%]"
          alt="Did you like and want more"
        />
        <a
          href="/"
          className="text-center text-md underline bg-tertiary rounded-full text-3xl/8 font-400 no-underline w-[80%] py-4"
        >
          Watch LEGO&reg; <br /> DreamZzzz&trade; Season 2
        </a>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={primeLogo} className="w-[200px]" alt="Amazon Prime Video" />
        <p className="text-center text-md">
          Prime membership required. Restrictions apply. Amazon, Prime Video,
          and all related marks are trademarks of Amazon.com, Inc. and its
          afffiliates.
        </p>
      </div>
    </div>
  );
}
