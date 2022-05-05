import type { AppProps } from "next/app";
import { PeopleProvider } from "../context/peopleContext";
import { PlanetsProvider } from "../context/planetsContext";
import { SpeciesProvider } from "../context/speciesContext";
import { StarshipsProvider } from "../context/starshipsContext";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <PeopleProvider>
        <PlanetsProvider>
          <SpeciesProvider>
            <StarshipsProvider>
              <Component {...pageProps} />
            </StarshipsProvider>
          </SpeciesProvider>
        </PlanetsProvider>
      </PeopleProvider>
    </>
  );
}

export default MyApp;
