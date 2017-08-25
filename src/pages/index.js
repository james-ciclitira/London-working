import React from 'react';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="w-third-ns w-100 dib v-top pv3 ph2">
          <a className='relative shadow db' href={`${post.frontmatter.directions}`} style={{backgroundImage: `url(${post.frontmatter.image})`, height: '200', backgroundSize: 'cover'}}>
          <div className='absolute top-0 bottom-0 right-0 left-0 bg-black-60 pa4 tc'>
          <h2 className='white top-0 ma0'>{post.frontmatter.title}</h2>
          <p className='white f7 mt2'>Last updated {post.frontmatter.date}</p>
          <p className='white f7 mt2'>{post.frontmatter.address}</p>
          <p className='white f7 mt2'>{post.frontmatter.hours}</p>
          </div>
          </a>
          <div className="sans-serif ph3 tc">
            <p>Wifi speed</p>
            <article className="cf">
              <div className="fl w-50 tc">
                <p className='ma0'>{post.frontmatter.upload}</p>
                <p className='f7 ma0'>Mbps upload</p>
              </div>
              <div className="fl w-50 tc">
                <p className='ma0'>{post.frontmatter.download}</p>
                <p className='f7 ma0'>Mbps download</p>
             </div>
            </article>
            <a className='fw6 grow dn'>Direction</a>
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
            upload
            download
            password
            hours
            directions
            image
          }
        }
      }
    }
  }
`;
