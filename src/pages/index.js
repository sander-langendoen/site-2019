import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProfilePic from '../components/Global/ProfilePic'
// import Typewrite from '../components/Typewrite'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Layout>
            <section className="section section-intro">
                Deze website wordt momenteel aan gewerkt.<br/><br/><br/>
            </section>

            <section className="section section-intro">

                <div className="columns"> 
                    <div className="column">
                        <h1 className="page-title page-title-home">Freelance (UI) front-end voor jouw project</h1>
                        <p className="page-content-intro page-content-intro-home">
                            Ik realiseer de HTML, CSS, Javascript (en soms PHP code) van websites of online applicaties. 
                            Ik ben creatief, en heb oog voor design. Hoe mensen mij verder noemen?
                        </p>
                        <p className="page-content-intro page-content-intro-home">
                            Je vindt hier meer &nbsp;
                            <Link to="/over-mij">
                              over mij
                            </Link>.<br/>
                            Hier lees je meer over &nbsp;
                            <Link to="/wie-ben-jij">
                              jezelf
                            </Link>.<br/>
                            <br/>
                            Ik heb voor ontwikkelaars ook een &nbsp;
                            <Link to="/blog">
                              blog
                            </Link>&nbsp; over front-end ontwikkeling.<br/>
                            <br/>
                            Je kunt contact met mij opnemen over jouw project. We zouden perfect voor elkaar kunnen zijn?<br/><br/>
                            <Link className="btn-primary" to="/contact">
                              Contact
                            </Link>
                        </p>
                    </div>
                    <div className="column">
                        <ProfilePic />
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
                            
                            <small>{post.frontmatter.date}</small>
                            <span> &bull; </span>
                            <small>{post.frontmatter.tags}</small>
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
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" } 
        tags: {
          nin: ["front-end ontwikkeling, probeer"]
        }
    }}
    
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
            tags
          }
        }
      }
    }
  }
`