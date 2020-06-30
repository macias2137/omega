import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="container">
                <h1 className="title has-text-white">Kroplówki</h1>
                <h3 className="subtitle">Koszalin, Szczecin, Darłowo</h3>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <figure className="image is-3by2">
                <img src="/kroplowka.jpg" alt="kroplówka" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
