import download from "../assets/downloads.png";
import appleIcon from "../assets/apple.svg";
import windowsIcon from "../assets/windows10.svg";

function Hero() {
  const downloadMacFile = () => {
    window.location.href =
      "https://cyc-deployed-files.s3.ap-northeast-2.amazonaws.com/checkyourcss-1.0.0-arm64-mac.zip";
  };

  const downloadWindowsFile = () => {
    window.location.href =
      "https://cyc-deployed-files.s3.ap-northeast-2.amazonaws.com/checkyourcss+Setup+1.0.0.exe";
  };

  return (
    <sections className="flex md:flex-row flex-col mb-32 sm:py-16 py-6">
      <div className="flex justify-center items-start flex-1 flex-col xl:px-0 sm:pl-16 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black">
            Check <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Your CSS</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black w-full">
          in your Project.
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[18px] max-w-[500px] mt-5">
          "Check Your CSS" checks the CSS compatibilities in your projects using
          TailwindCSS and styled-components.
        </p>
      </div>

      <div className="flex gap-32 flex-1 justify-center items-center md:my-0 my-10 mr-32 relative">
        <div className="flex flex-col justify-center items-center gap-10">
          <img src={appleIcon} alt="apple icon" className="w-[75px]" />
          <button
            onClick={downloadMacFile}
            className="flex gap-5 border-4 border-black rounded-xl p-4 font-poppins font-medium text-[18px] hover:bg-black hover:text-white"
          >
            <img
              src={download}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
            <span>Mac Download</span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <img src={windowsIcon} alt="apple icon" className="w-[75px]" />
          <button
            onClick={downloadWindowsFile}
            className="flex gap-5 border-4 border-black rounded-xl p-4 font-poppins font-medium text-[18px] hover:bg-black hover:text-white"
          >
            <img
              src={download}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
            <span>Windows Download</span>
          </button>
        </div>
      </div>
    </sections>
  );
}

export default Hero;
