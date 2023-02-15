import { Header, SectionFeatures, SectionHero } from "./components";
import { useState } from "react";
import data from "./data/data";

function App() {
  const [features, setFeatures] = useState(data);

  return (
    <>
      <Header />
      <div className="bg">
        <main className="container mx-auto px-4 md:px-0 relative z-10">
          <SectionHero />
          <section className="min-h-screen relative z-10 font-primary pb-8">
            <h2 className="font-semibold mb-6">Featured Jobs</h2>
            <div className="flex flex-col lg:flex-row gap-4">
              {features.map(function (feature) {
                return (
                  <SectionFeatures
                    key={feature.logoimg}
                    logoimg={feature.logoimg}
                    titlejob={feature.titlejob}
                    appjob={feature.appjob}
                    descjob={feature.descjob}
                    badgetool={feature.badgetool}
                    pricejob={feature.pricejob}
                    active={feature.active}
                  />
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
