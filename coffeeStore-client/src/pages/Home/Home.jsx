import Products from "../../components/Private/Products/Products";
import Follow from "../../components/Shared/Follow/Follow";
import Hero from "../../components/Shared/Hero/Hero";
import Services from "../../components/Shared/Services/Services";

const Home = () => {

  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Products></Products>
      <Follow></Follow>
    </div>
  );
};

export default Home;
