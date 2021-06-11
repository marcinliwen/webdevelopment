import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Products from "../components/Products"
import Steps from "../components/Steps"
import Specials from "../components/Specials"
import Realisations from "../components/Realisations"
import Kontakt from "../components/Kontakt"
import OldWhale from "../components/OldWhale"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero hero_image={false} />
    <Specials />
    <Products />
    <Steps />
    <Realisations />
    <About />
    <OldWhale />
    <Kontakt />
  </Layout>
)

export default IndexPage
