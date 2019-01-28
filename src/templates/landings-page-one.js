import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import Content, { HTMLContent } from '../components/Content'

export const LandingsPageOneTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <section className="section">
        
        <div className="container">
            
            <h1 className="page-title page-title-page">
                {title}
            </h1>
            
            <PageContent className="content" content={content} />

        </div>
    </section>
  )
}

LandingsPageOneTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LandingsPageOne = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div>
      <Layout>
        <LandingsPageOneTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />

        <Profile />
      </Layout>

    </div>
  )
}

LandingsPageOne.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LandingsPageOne

export const landingsPageOneQuery = graphql`
  query LandingsPageOne($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
