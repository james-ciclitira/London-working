import React from 'react';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <article className="w-third dib v-top pa2" target='blank' href={`${post.frontmatter.directions}`}>
          <a className='relative shadow db' style={{backgroundImage: `url(${post.frontmatter.image})`, height: '220', backgroundSize: 'cover'}}  target='blank' href={`${post.frontmatter.directions}`}>
          <div className='absolute top-0 bottom-0 right-0 left-0 bg-black-60 pa4 tc'>
          <h2 className='white top-0 ma0'>{post.frontmatter.title}</h2>
          <p className='white mt2' style={{fontSize: '10'}}>Last updated {post.frontmatter.date}</p>
          <p className='white f7 mt2'>{post.frontmatter.type}</p>
          <p className='white f7 mt2'>{post.frontmatter.address}</p>
          <p className='white f7 mt2'>Mon-Fri: {post.frontmatter.hours}</p>
          </div>
          </a>
          <div className='tc mt4'>
          <p className=' f7 mt2'>wifi-speed: {post.frontmatter.wifi}</p>
          <p className=' f7 mt2'>{post.frontmatter.password}</p>
          </div>
          </article>
        );
      })}
    </div>
  );
}

