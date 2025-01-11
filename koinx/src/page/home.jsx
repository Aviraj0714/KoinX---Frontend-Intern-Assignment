import { useParams } from 'react-router-dom';
import About from "../components/about";
import CardsPromo from "../components/card";
import TrendingCoins from "../components/card2";
import PerformanceSection from "../components/performance";
import SentimentSection from "../components/sentiments";

import Team from "../components/team";
import Tokenomics from "../components/tokenomics";
import SuggestionSection from "../components/footer";
import PageHolder from "../components/Pageholder";
import ToggleSection from "../components/navigation";
import Overview from "../components/overview";

function Home() {
  const { coinId } = useParams();

  return (
    <div className="h-full w-screen bg-slate-200/40">
      {/* Page Holder Section */}
      <PageHolder />
      <div className="w-screen lg:flex">
        {/* Main Content */}
        <div className="lg:w-8/12z lg:ml-14 mx-4">
          <Overview coinId={coinId} />
          <ToggleSection />
          <PerformanceSection />
          <SentimentSection />
          <About />
          <Tokenomics />
          <Team />
        </div>
        {/* Sidebar */}
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <CardsPromo />
          <TrendingCoins />
        </div>
      </div>
      {/* Suggestions Section */}
      <SuggestionSection />
    </div>
  );
}

export default Home;