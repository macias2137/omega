import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/faq.sass"

const Faq = () => (
    <Layout>
        <SEO title="Home" />
        <div className="faq">
            <h1>Czy bić dzieci?</h1>
            <h2>Odpowiedź nie jest jednoznaczna</h2>
        </div>
    </Layout>
)

export default Faq
