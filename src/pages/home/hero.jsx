import { images } from "../../assets";

function Hero() {
  return (
    <section>
      <div
        className="max-w-6xl mx-auto flex flex-col justify-center items-center
         bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)] space-y-6 
         border-[3px] rounded-2xl border-[#fff] p-4 my-4"
      >
        {/* hero title */}
        <h1 className="w-full text-xl md:text-4xl font-extrabold text-center flex-1">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>

        {/* hero des */}
        <p className="md:w-[80%] w-full text-center text-[#0F0F0F] font-[500] text-sm flex-1">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>

        {/* hero search */}
        <div className="w-full flex items-center justify-center sm:space-y-0 space-y-4 sm:space-x-4 flex-col sm:flex-row">
          <input
            className="input rounded-full py-4 px-4 placeholder:text-xs md:w-2/4 w-2/3"
            placeholder="Search any doctor..."
            type="text"
          />
          <button className="btn-primary py-4 md:w-[15%] w-2/3">
            Search Now
          </button>
        </div>

        {/* hero gallery */}
        <div className="w-full flex items-center justify-center space-x-4">
          <img className="w-[40%]" src={images.bannerImg} alt="" />
          <img className="w-[40%]" src={images.bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
