import React from 'react';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="w-third dib v-top pa2">
          <div className="pv2 ph3 shadow bg-white br2">
            <h4 className='ma0 mv3'>{post.frontmatter.title}</h4>
            <p className='f7'>Last updated {post.frontmatter.date}</p>
            <p>{post.frontmatter.type}</p>
            <p>Location: {post.frontmatter.address}</p>
            <p>Wifi-speed: {post.frontmatter.wifi}</p>
            <p>Wifi-password: {post.frontmatter.password}</p>
            <p>{post.frontmatter.hours}</p>
            <a className='fw6 grow' href={`${post.frontmatter.directions}`}>Direction</a>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 550)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            type
            address
            wifi
            password
            hours
            directions
          }
        }
      }
    }
  }
`;
