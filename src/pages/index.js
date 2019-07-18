import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProfilePic from '../components/Global/ProfilePic'
import logoPCL from '../img/logo-postcodeloterij.jpg'
import logoMZ from '../img/logo-menzis.jpg'
import logoAZ from '../img/logo-anderzorg.jpg'
import logoSIM from '../img/logo-SIM.jpg'
import logoKubion from '../img/logo-kubion.jpg'
import logoScorius from '../img/logo-scorius.png'
// import Typewrite from '../components/Typewrite'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>

        <section className="section section-intro">

          <div className="container">

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
                                </Link>.<br />
                  Hier lees je meer over &nbsp;
                                <Link to="/wie-ben-jij">
                    jezelf
                                </Link>.<br />
                  <br />
                  <span className="hidden">
                    Ik heb voor ontwikkelaars ook een &nbsp;
                                <Link to="/blog">
                      blog
                                </Link>&nbsp; over front-end ontwikkeling.</span><br />
                  <br />

                  Je kunt contact met mij opnemen over jouw project. We zouden perfect voor elkaar kunnen zijn?<br /><br />
                  <Link className="btn-primary" to="/contact">
                    Contact
                                </Link>
                </p>
              </div>
              <div className="column">
                <ProfilePic />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-projects">

          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Recente opdrachten</h2>

            <div className="article-list">
              <article
                className="content"
                style={{ backgroundColor: '#fff' }}
              >
                <h3 style={{ float: "left" }}>Scorius</h3>
                <img src={logoScorius} alt="logo Kubion" style={{ float: "left", paddingLeft: "10px", maxWidth: "65px" }} />

                <p style={{ clear: "both" }}>
                  Bij Scorius ben ik bezig met het redesign, refactoren en het themen van een Angular 8 webapplicatie t.b.v. een performance tool.
                            </p>

                <p><strong>Opdrachtgever</strong><br />Scorius</p>

                <p><strong>Keywords:</strong><br /> SASS, CSS3, Javascript, Typescript, HTML5, NPM, Webpack</p>
              </article>

              <article
                className="content"
                style={{ backgroundColor: '#fff' }}
              >
                <h3 style={{ float: "left" }}>Kubion</h3>
                <img src={logoKubion} alt="logo Kubion" style={{ float: "left", paddingLeft: "10px", maxWidth: "65px" }} />

                <p style={{ clear: "both" }}>
                  Bij Kubion werkte ik aan de front-end van websites voor grote woningstichtingen.
                  In deze opdracht werkte ik voornamelijk aan de CSS/SASS-structuur, maar schreef ik ook extra JS functionaliteit
                  voor de verschillende templates.
                            </p>

                <p><strong>Opdrachtgever</strong><br />Kubion</p>

                <p><strong>Keywords:</strong><br /> SASS, CSS3, Javascript, jQuery, HTML5, Foundation, NPM, Gulp</p>
              </article>

              <article
                className="content"
                style={{ backgroundColor: '#fff' }}
              >
                <h3 style={{ float: "left" }}>SIMGroep</h3>
                <img src={logoSIM} alt="logo SIMgroep" style={{ float: "left", paddingLeft: "10px", maxWidth: "65px" }} />

                <p style={{ clear: "both" }}>
                  Bij de SIMGroep mocht ik iedere dag voor miljoenen Nederlanders hun 'online te regelen zaken',
                  met de overheid, makkelijker maken. Dit heb ik gedaan door te werken aan de front-end van
                  digitale producten voor diverse gemeenten en andere overheidsinstellingen in Nederland,
                  Aruba en Curacao.
                            </p>

                <p style={{ display: "none" }}> Denk aan websites, social intranets of andere digitale oplossingen zoals
                    het inbouwen van extra toegankelijksheidseisen voor de overheid zoals Readspeaker. Ook heb
                    ik voor het development team een workshop Flexbox mogen organiseren. Ik heb ook de LESS-architectuur
                    voor hun sociale intranetten opnieuw mogen opzetten. Hiernaast heb ik ook de SASS-structuren voor
                    onze afdeling opnieuw mogen opzetten, en tevens Gulp hier geïntroduceerd.
                            </p>
                <p><strong>Opdrachtgever</strong><br />SIMGroep</p>

                <p><strong>Keywords:</strong><br /> PHP, HTML5, Javascript, SASS, CSS3, Flexbox, Javascript, jQuery, WCAG</p>
              </article>

              <article
                className="content"
                style={{ backgroundColor: '#fff' }}
              >
                <h3 style={{ float: "left" }}>Postcode Loterij <br />BankGiro Loterij <br />Vriendenloterij</h3>
                <img src={logoPCL} alt="logo Postcode Loterij" style={{ float: "left", paddingLeft: "10px", maxWidth: "65px" }} />

                <p style={{ clear: "both" }}>
                  Voor award winning digital agency The Valley in Amsterdam werkte ik
                  voor klanten als de Nationale Postcodeloterij, BankGiro Loterij en
                  de Vriendenloterij. De werkzaamheden betroffen het opzetten van Landingspages
                  en campagne websites voor verschillende online campagnes. Ook heb ik hier campagnes geanimeerd met de Greensock library.
                            </p>

                <p><strong>Opdrachtgever</strong><br />The Valley</p>

                <p><strong>Keywords:</strong><br /> Javascript (o.a. Moustache JS), HTML5, CSS3 (Sass), Git, Gulp, Jira, Fabricator</p>
              </article>

              <article
                className="content"
                style={{ backgroundColor: '#fff' }}
              >
                <h3 style={{ float: "left" }}>Menzis <br />Anderzorg</h3>
                <img src={logoMZ} alt="logo Menzis" style={{ float: "left", paddingLeft: "10px", maxWidth: "65px" }} />
                <img src={logoAZ} alt="logo Anderzorg" style={{ float: "left", paddingLeft: "10px", maxWidth: "65px" }} />

                <p style={{ clear: "both" }}>
                  Voor de verzekeraars Menzis en Anderzorg werden door Yourzine e-mailcampagnes opgezet.
                  Voor deze campagnes moesten landingspagina's met verschillende tabbladen worden opgezet.
                  Hiervoor was ik samen met twee andere ontwikkelaars verantwoordelijk. De meeste uitdaging
                  zat in de conditionele data die we middels PHP per doelgroep toonden op de landingspagina.
                            </p>

                <p><strong>Opdrachtgever</strong><br />Yourzine</p>

                <p><strong>Keywords:</strong><br /> PHP, Javascript (jQuery), HTML5, CSS3 (Sass), Git, Gulp, Trello</p>
              </article>
            </div>
          </div>

        </section>

        <section className="section section-articles">

          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Mijn laatste blog-posts</h2>

            <div className="article-list">
              {posts
                .map(({ node: post }) => (
                  <article
                    className="content"
                    style={{ backgroundColor: '#fff' }}
                    key={post.id}
                  >
                    <h3>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>

                    <small>{post.frontmatter.date}</small>

                    <span> &bull; </span>

                    <Link to="/tags/frond-end-ontwikkeling">
                      <small>{post.frontmatter.tags}</small>
                    </Link>

                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="btn-primary" to={post.fields.slug}>
                        Lees verder <span className="btn-arrow">→</span>
                      </Link>
                    </p>
                  </article>
                ))}
            </div>
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