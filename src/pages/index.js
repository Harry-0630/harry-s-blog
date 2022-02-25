import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Harry's Personal Blog Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          this is my perfect blog website with some some cool features
          will publish here my personal and Devloper blogs both so stay tuned for
            extrme fun.
        </p>
        <p>Now let's jump into it !</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>

         <Link to="/aboutme/">
          <Button marginTop="35px">About Me</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
