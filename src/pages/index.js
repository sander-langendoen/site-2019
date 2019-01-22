import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Layout>

            <section className="section section-intro">

                <div className="columns">
                    <div className="column">
                        <h1 className="page-title page-title-home">Freelance front-end voor jouw project</h1>
                        <p className="page-content-intro page-content-intro-home">
                            Ik realiseer de HTML, CSS en Javascript code van websites of online applicaties. 
                            Ik ben creatief, en heb oog voor design.
                        </p>
                        <p className="page-content-intro page-content-intro-home">
                            Je vindt hier meer <a href="/over-mij">over mij</a>.<br/>
                            Hier lees je meer over <a href="/wie-ben-jij">wie jij bent</a>.<br/>
                            Je kunt <a href="/contact">contact</a> met mij opnemen over jouw project.<br/>
                            <br/>
                            Ik heb voor ontwikkelaars ook een <a href="/blog">blog</a> over front-end ontwikkeling.<br/>
                        </p>
                        </div>
                </div>
            </section>

            <section className="section section-articles">

                <div className="container">
                {posts
                  .map(({ node: post }) => (
                    <article
                          className="content"
                          style={{ padding: '2rem 4rem 2rem 0rem' }}
                          key={post.id}
                        >
                        <h3>
                            <Link className="has-text-primary" to={post.fields.slug}>
                              {post.frontmatter.title}
                            </Link>
                        </h3>
                        <span> &bull; </span>
                        <small>{post.frontmatter.date}</small>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="button is-small" to={post.fields.slug}>
                          Lees verder →
                        </Link>
                      </p>
                    </article>
                  ))}
                    </div>
            </section>
        </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
