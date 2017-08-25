import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const Header = () =>
  <div>
  <nav className="pa3 pa4-ns">
        <Link className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" to='/' title="Home">Working-out</Link>
        <p className='tc'>A collection of free spaces to work in around London city centre</p>
        <div className="tc pb3">
          <Link className="link dim gray f6 f5-ns dib" tp="/add" title="Contact">Add to the list</Link>
        </div>
      </nav>
  </div>;

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>
      {!location.pathname.includes('/admin')
        ? <div>
             <Helmet
      title="Working out - free working spaces around London"
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png'},
        { rel: 'icon', sizes: '32x32', href: 'favicon/favicon-32x32.png'},
        { rel: 'icon', sizes: '16x16', href: 'favicon/favicon-16x16.png'},
        ]}

      meta={[
        { name: 'description', content: 'Working out- the best free spaces to work in around London. Designed with freelancers in mind' },
        { name: 'keywords', content: 'Freelance, Design, London, cafe, Library, remote working, London, Europe, coffee, tea, WIFI-speed, free working' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'Working out - free working spaces around London' },
        { name: 'og:description', content: 'Working out- the best free spaces to work in around London. Designed with freelancers in mind' },
        { name: 'og:image', content: 'https://working-out.design/images/preview.jpg' },
        { name: 'profile:first_name', content: 'James' },
        { name: 'profile:last_name', content: 'Ciclitira' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@jjiiimmmy' },
        { name: 'twitter:site', content: '@jjiiimmmy' },
        { name: 'twitter:title', content: 'Working out - free working spaces around London' },
        { name: 'twitter:description', content: 'Freelance, Design, London, cafe, Library, remote working, London, Europe, coffee, tea, WIFI-speed, free working' },
        { name: 'twitter:image', content: 'https://working-out.design/images/preview.jpg' },
      ]}
    />
            <Header />
            <div className='mw8 db center pt4'>
              {children()}
            </div>
          </div>
        : <div>
            {children()}
          </div>}
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
