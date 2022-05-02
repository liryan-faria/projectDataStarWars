import type { NextPage } from 'next'
import GlobalStyles from '../styles/global'
import { NavBar } from '../../components/elements/navbar/navbar'
import { People } from '../../components/elements/menu/people/people'
import { Planets } from '../../components/elements/menu/planets/planets'
import { Footer } from "../../components/elements/footer/footer"
import { Species } from '../../components/elements/menu/species/species'
import { Starships } from '../../components/elements/menu/starships/starships'



const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles />
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

  )
}

export default Home
