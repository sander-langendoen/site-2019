import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
// import Layout from './Layout'


const BlogContent = class extends React.Component {

	// render() {
	// 	const { data } = this.props
	// 	const { edges: posts } = data.allMarkdownRemark

	// 	return (
	// 	  <Layout>
	// 	    <section className="section">
	// 	      <div className="container">

	// 	        {posts
	// 	          .map(({ node: post }) => (
	// 	            <div
	// 	              className="content"
	// 	              style={{ padding: '2rem 4rem 2rem 0rem' }}
	// 	              key={post.id}
	// 	            >
	// 	              <p>
	// 	                <Link className="has-text-primary" to={post.fields.slug}>
	// 	                  {post.frontmatter.title}
	// 	                </Link>
	// 	                <span> &bull; </span>
	// 	                <small>{post.frontmatter.date}</small>
	// 	              </p>
	// 	              <p>
	// 	                {post.excerpt}
	// 	                <br />
	// 	                <br />
	// 	                <Link className="button is-small" to={post.fields.slug}>
	// 	                  Lees verder →
	// 	                </Link>
	// 	              </p>
	// 	            </div>
	// 	          ))}
	// 	      </div>
	// 	    </section>
	// 	  </Layout>
	// 	)
	// }

}

// BlogContent.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }`

export default BlogContent