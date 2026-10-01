import Button from "./Component/Button";
import Card from "./Component/Card";
import Discover from "./Component/Discover";
import Explore from "./Component/Explore";
import Frame2 from "./Component/Frame2";
import GrowthPath from "./Component/GrowthPath";
import LastFrame from "./Component/lastFrame";
import Unlock from "./Component/Unlock";
import Footer from "./Footer/page";
import HeroPage from "./Hero/page";




export default function Home() {
  return (
   <div className="">

    {/* hero page */}
    <HeroPage></HeroPage>
    <Frame2></Frame2>
    <Discover></Discover>
    <Button></Button>
    <Card></Card>
    <Explore></Explore>

    <GrowthPath></GrowthPath>
    <Unlock></Unlock>

    <LastFrame></LastFrame>




    {/* footer */}

    <Footer></Footer>



   </div>
  );
}