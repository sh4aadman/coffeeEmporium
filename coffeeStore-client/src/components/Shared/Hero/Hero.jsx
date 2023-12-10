const Hero = () => {
  return (
    <div className="hero min-h-[70vh] bg-hero">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content grid grid-cols-2">
        <div></div>
        <div className="">
          <h1 className="mb-5 text-5xl font-bold font-rancho">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5 font-raleway">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="font-rancho text-2xl bg-[#E3B577] py-2 px-6 text-[#242222]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
