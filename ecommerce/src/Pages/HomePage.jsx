import Card from "../Components/Card";
import Hero from "../Components/Hero";
import MarketFeatures from "../Components/MarketFeatures";
import { features } from "../data";
import NavBar from "../Navbar";



function HomePage(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <MarketFeatures text="Marketplace Features" description=" Discover what makes our campus marketplace unique and effortless." item={features} />
        <MarketFeatures text="The Process" description="simple,fast and secure market place integration"/>
        </>

    );

}
export default HomePage;