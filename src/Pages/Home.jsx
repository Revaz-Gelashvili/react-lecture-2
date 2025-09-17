import Hero from "../components/Hero/Hero";
import Exchange from "../components/Exchange/Exchange";
import About from "../components/About/About";
import Comments from "../components/Comments/Comments";
import Footer from "../components/Footer/Footer";
import Arrow from "../assets/arrow.svg";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-sm md:w-150 lg:w-200 xl:w-300">
          <Hero />
        </div>

        <Exchange />
        <div className="w-sm md:w-150 lg:w-200 xl:w-300">
          <About />
          <Comments />
        </div>
        <Footer />
      </div>

      <img
        className="arrow fixed bottom-5 end-5 md:bottom-10 md:end-10 w-15 cursor-pointer hover:scale-125 transition-all ease-linear"
        src={Arrow}
        alt="Land"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </>
  );
}
