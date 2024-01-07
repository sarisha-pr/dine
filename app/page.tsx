import HeadingBorder from "@/components/HeadingBorder";
import HighlightItem from "@/components/Highlight/HighlightItem";
import HighlightList from "@/components/Highlight/HighlightList";
import HighlightItemImage from "@/components/Highlight/HighlightItemImage";
import HighlightItemDesc from "@/components/Highlight/HighlightItemDesc";
import Lines from "@/components/Pattern/Lines";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden relative pt-56 md:pt-96 lg:pt-16 pb-40 md:pb-56 lg:pb-48 bg-black">
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
      {/* End - HERO */}

      {/* Introduction */}
      <section className="overflow-hidden relative max-md:pb-28 -mt-20 lg:-my-20">
        \{/* 1 */}
        <div className="relative">
          <span className="max-md:hidden absolute w-[49.25vw] lg:w-[62.15vw] h-80 left-0 bottom-40 xl:bottom-20 rounded-tr-[6.25rem] opacity-[0.075] bg-secondary-shuttle"></span>
          <div className="container">
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between max-sm:gap-12 max-lg:gap-14">
              <div className="basis-full lg:basis-5/12 xl:basis-[37.5vw]">
                <img
                  src="./images/homepage/enjoyable-place-desktop.jpg"
                  alt="Enjoyable place for all the family"
                  className="img-shadows lg:block hidden mx-auto"
                />
                <img
                  src="./images/homepage/enjoyable-place-tablet.jpg"
                  alt="Enjoyable place for all the family"
                  className="img-shadows md:max-lg:block hidden mx-auto"
                />
                <img
                  src="./images/homepage/enjoyable-place-mobile.jpg"
                  alt="Enjoyable place for all the family"
                  className="img-shadows block md:hidden mx-auto"
                />
              </div>
              <div className="basis-full lg:basis-5/12 xl:basis-[30.9025vw] lg:mt-20">
                <HeadingBorder />
                <div className="md:max-lg:px-14 max-lg:text-center">
                  <h2 className="heading-l pb-3 md:pb-6">
                    Enjoyable place <br />
                    for all the family
                  </h2>
                  <p className="lg:text-[1.25rem] leading-normal">
                    Our relaxed surroundings make dining with us a great
                    experience for everyone. We can even arrange a tour of the
                    farm before your meal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End - 1 */}
        {/* 2 */}
        <div className="relative md:max-lg:pb-28">
          <span className="max-md:hidden absolute w-[50vw] lg:w-[62.15vw] h-80 right-0 bottom-0 lg:bottom-20 rounded-tl-[6.25rem] opacity-[0.075] bg-secondary-shuttle"></span>
          <div className="relative container pt-20 lg:pt-32">
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between max-sm:gap-12 max-lg:gap-14">
              <div className="relative basis-full lg:basis-5/12 xl:basis-[37.5vw] lg:order-1">
                <img
                  src="./images/homepage/locally-sourced-desktop.jpg"
                  alt="Enjoyable place for all the family"
                  className="img-shadows hidden lg:block mx-auto"
                />
                <img
                  src="./images/homepage/locally-sourced-tablet.jpg"
                  alt="Enjoyable place for all the family"
                  className="img-shadows hidden md:max-lg:block mx-auto"
                />
                <img
                  src="./images/homepage/locally-sourced-mobile.jpg"
                  alt="Enjoyable place for all the family"
                  className="img-shadows block md:hidden mx-auto"
                />
                <Lines className="absolute right-0 top-[39.15%] translate-x-[36.25%] lg:translate-x-[40%] min-[1400px]:translate-x-[71.25%] max-md:hidden" />
              </div>
              <div className="basis-full lg:basis-5/12 xl:basis-[30.9025vw] lg:mb-20">
                <HeadingBorder />
                <div className="max-lg:text-center">
                  <h2 className="heading-l pb-3 md:pb-6">
                    The most locally <br />
                    sourced food
                  </h2>
                  <p className="lg:text-[1.25rem] leading-normal">
                    All our ingredients come directly from our farm or local
                    fishery. So you can be sure that you’re eating the freshest,
                    most sustainable food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End - 2 */}
      </section>
      {/* End - Introduction */}

      {/* Highlight */}
      <section className="py-28 lg:py-48 text-white bg-primary-cod">
        <div className="relative container">
          <div className="flex max-lg:flex-col lg:justify-between gap-20 sm:gap-14">
            <div className="basis-full lg:basis-5/12 xl:basis-[30.9025vw]">
              <HeadingBorder />
              <div className="max-lg:text-center">
                <h2 className="heading-l pb-3 md:pb-6">
                  A few highlights from our menu
                </h2>
                <p className="lg:text-[1.25rem] leading-normal">
                  We cater for all dietary requirements, but here’s a glimpse at
                  some of our diner’s favourites. Our menu is revamped every
                  season.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-5/12 xl:basis-[37.5vw] lg:mt-16">
              <HighlightList>
                <HighlightItem>
                  <HighlightItemImage>
                    <img
                      src="./images/homepage/salmon-desktop-tablet.jpg"
                      alt="Seared Salmon Fillet"
                      className="max-md:hidden"
                    />
                    <img
                      src="./images/homepage/salmon-mobile.jpg"
                      alt="Seared Salmon Fillet"
                      className="md:hidden"
                    />
                  </HighlightItemImage>

                  {/* Text Desc */}
                  <HighlightItemDesc>
                    <h3 className="heading-m pb-2">Seared Salmon Fillet</h3>
                    <p className="text-[1rem]">
                      Our locally sourced salmon served with a refreshing
                      buckwheat summer salad.
                    </p>
                  </HighlightItemDesc>
                  {/* End - Text Desc */}
                </HighlightItem>

                <HighlightItem>
                  <HighlightItemImage>
                    <img
                      src="./images/homepage/beef-desktop-tablet.jpg"
                      alt="Rosemary Filet Mignon"
                      className="max-md:hidden"
                    />
                    <img
                      src="./images/homepage/beef-mobile.jpg"
                      alt="Rosemary Filet Mignon"
                      className="md:hidden"
                    />
                  </HighlightItemImage>

                  {/* Text Desc */}
                  <HighlightItemDesc>
                    <h3 className="heading-m pb-2">Rosemary Filet Mignon</h3>
                    <p className="text-[1rem]">
                      Our prime beef served to your taste with a delicious
                      choice of seasonal sides.
                    </p>
                  </HighlightItemDesc>
                  {/* End - Text Desc */}
                </HighlightItem>

                <HighlightItem>
                  <HighlightItemImage>
                    <img
                      src="./images/homepage/chocolate-desktop-tablet.jpg"
                      alt="Summer Fruit Chocolate Mousse"
                      className="max-md:hidden"
                    />
                    <img
                      src="./images/homepage/chocolate-mobile.jpg"
                      alt="Summer Fruit Chocolate Mousse"
                      className="md:hidden"
                    />
                  </HighlightItemImage>

                  {/* Text Desc */}
                  <HighlightItemDesc>
                    <h3 className="heading-m pb-2">
                      Summer Fruit Chocolate Mousse
                    </h3>
                    <p className="text-[1rem]">
                      Creamy mousse combined with summer fruits and dark
                      chocolate shavings.
                    </p>
                  </HighlightItemDesc>
                  {/* End - Text Desc */}
                </HighlightItem>
              </HighlightList>
            </div>
          </div>
        </div>
      </section>
      {/* End - Highlight */}

      {/* Slider */}
      <section className="py-28 lg:py-48">
        <div className="relative container">
          <Lines className="max-md:hidden absolute left-10 top-10" />
        </div>
        <div className="lg:container">
          <Slider />
        </div>
      </section>
      {/* End - Slider */}
    </>
  );
}
