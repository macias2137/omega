import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/pricelist.sass"

const PriceList = () => (
    <Layout>
        <SEO title="Home" />
        <div className="faq">
            Cena kroplówek: 20 zł
        </div>
    </Layout>
)

export default PriceList
