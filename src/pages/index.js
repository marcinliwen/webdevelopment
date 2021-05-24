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



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero hero_image={false} />
    <Specials />
    <Products />
    <Steps />
  </Layout>
)

export default IndexPage
