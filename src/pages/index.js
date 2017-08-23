import React from 'react';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="w-third dib v-top pa2">
          <div className='relative shadow' style={{backgroundImage: 'url("/image/e2-common.jpg")', backgroundSize: 'cover', height:'220'}}>
          <div className='absolute top-0 bottom-0 right-0 left-0 bg-black-60 pa4 tc'>
          <h2 className='white top-0 ma0'>{post.frontmatter.title}</h2>
          <p className='white f7 mt2'>Last updated {post.frontmatter.date}</p>
          <p className='white f7 mt2'>{post.frontmatter.type}</p>
          </div>
          </div>
          <div className="pv3 ph3 bg-white">
            <p><i className="material-icons pr2" style={{fontSize: '15'}}>place</i>{post.frontmatter.address}</p>
            <p> <i className="material-icons pr2" style={{fontSize: '15'}}>wifi</i>{post.frontmatter.wifi}</p>
            <p><i className="material-icons pr2" style={{fontSize: '15'}}>wifi_lock</i>{post.frontmatter.password}</p>
            <p><i className="material-icons pr2" style={{fontSize: '15'}}>access_time</i> {post.frontmatter.hours}</p>
            <a className='fw6 grow' href={`${post.frontmatter.directions}`}>Get direction</a>
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
