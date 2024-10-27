import ExclusiveOffersSlider from "./ExclusiveOffersSlider"
import ExploreXiaomiSlider from "./ExploreXiaomiSlider"
import FeaturedProducts from "./FeaturedProducts"
import Footer from "./Footer"
import HeroSlider from "./HeroSlider"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSlider/>
    <FeaturedProducts/>
    <ExclusiveOffersSlider/>
    <ExploreXiaomiSlider/>
    <Footer/>
    </>
  )
}

export default Home