import DATA from "./assets/data.json";
import Hero from "./components/hero/Hero";
import HeroContainer from "./components/hero/HeroContainer";
import SearchBox from "./components/hero/SearchBox";
import Footer from "./components/layouts/Footer";
import Ill from "./components/ill/Ill";
import IllCard from "./components/ill/IllCard";
import IllContainer from "./components/ill/IllContainer";

export default function App() {
  return (
    <>
      <HeroContainer>
        <>
          <Hero />
          <SearchBox />
        </>
      </HeroContainer>
      <IllContainer>
        <Ill>
          {DATA.map((ill, idx) => (
            <IllCard {...ill} key={idx} />
          ))}
        </Ill>
      </IllContainer>
      <Footer />
    </>
  );
}
