import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden relative pt-[14.5rem] md:pt-[23.375rem] lg:pt-[4.0625rem] pb-[9.5rem] md:pb-[13.5rem] lg:[pb-12.375rem] bg-black">
        <img
          src="./images/homepage/hero-bg.png"
          alt="Hero Background"
          className="absolute max-lg:left-1/2 max-lg:top-0 max-lg:-translate-x-1/2 max-md:-translate-y-[45%] max-lg:-translate-y-1/2 lg:-right-[19.25rem] lg:-bottom-[10.5rem] max-w-[20.75rem] md:max-w-[41rem] lg:max-w-full"
        />

        <div className="container relative text-white">
          <div className="flex flex-col max-lg:items-center lg:max-w-[508px]">
            <img
              src="./logo.svg"
              alt="Logo"
              className="w-20 md:w-[6.25rem] pb-9 lg:pb-40"
            />

            <h1 className="heading-xl max-lg:text-center pb-5 lg:pb-3">
              Exquisite dining
              <br /> since 1989
            </h1>

            <p className="max-lg:text-center pb-14 lg:pb-10">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>

            <div className="flex">
              <a
                href="#"
                className="max-w-[15.3125rem] px-6 pt-[1.625rem] pb-[1.375rem] flex items-center justify-center text-white border border-white duration-300 hover:bg-white hover:text-black"
              >
                <span className="font-semibold tracking-[2.5px] leading-none">
                  BOOK A TABLE
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>test</section>
    </>
  );
}
