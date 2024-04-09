import github from "../assets/github.svg";

function Footer() {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-full flex justify-between items-center md:flex-row flex-col py-3 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
          Copyright Ⓒ 2024 CheckYourCSS. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          <img
            src={github}
            alt="github icon"
            className={`w-[21px] h-[21px] bg-white rounded-full cursor-pointer mr-6`}
            onClick={() =>
              window.open("https://github.com/TeamTitans1/checkyourcss")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
