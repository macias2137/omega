import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/faq.sass"

const ContactInfo = () => (
    <Layout>
        <SEO title="Home" />
        <div className="contact">
            <h1>Moj email: moroz128@gmail.com</h1>
        </div>
    </Layout>
)

export default ContactInfo