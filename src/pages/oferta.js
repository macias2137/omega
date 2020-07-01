import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/oferta.sass"

const Offer = () => (
    <Layout>
        <SEO title="Home" />
        <div className="offer-main">
            <div className="container offer-container">
                <h1 className="title offer-title">Oto moja oferta: </h1>
                <div className="offer-text">
                    {/* <h1>W ofercie posiadamy: </h1> */}
                    <p>Dlatego zapraszamy. Korzystne ceny.</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default Offer