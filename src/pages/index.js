import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero landing__hero" id="landingHero">
      <div className="landing__hero__body">
        <h1 className="landing__hero__title">Kroplówki</h1>
        <h3 className="subtitle landing__hero__subtitle">
          Kroplówki witaminowe w Koszalinie, Szczecinie, Darłowie
        </h3>
        <Link to="/oferta" className="button is-primary is-large">
          Więcej informacji
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
