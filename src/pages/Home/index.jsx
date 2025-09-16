import Banner from "../../components/Banner"
import Header from "../../components/Header"
import Gallery from "../../components/Gallery"
import { useEffect } from "react";

function Home() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <Banner />
      <Gallery />
    </div>    
  )
}

export default Home
