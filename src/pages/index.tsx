import type { NextPage } from "next";
import { Footer } from "../components/elements/footer/footer";
import { Planets } from "../components/modules/planets";
import { Species } from "../components/modules/species";
import { Starships } from "../components/modules/starships";
import { NavBar } from "../components/modules/navbar/navbar";
import { People } from "../components/modules/people";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="menuA">
        <People />
        <Planets />
      </div>
      <div className="menuB">
        <Species />
        <Starships />
      </div>
      <Footer />
    </>
  );
};

export default Home;
