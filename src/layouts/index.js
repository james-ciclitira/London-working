import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const Header = () =>
  <div>
    <div className='mw8 pv3 db center tc'>
      <h1 className='f4'>
        <Link to="/" className=''>WORKING NOT WORKING</Link>
      </h1>
    <p className=''>A collection of free spaces to work in around London city centre</p>
    </div>
  </div>;

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>
      {!location.pathname.includes('/admin')
        ? <div>
            <Helmet title="Home | Blog" />
             <Helmet
      title="Working not working"
      link={[
        { rel:"stylesheet", href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]}
      meta={[
        { name: 'description', content: 'A collection of the best free spaces to work in around London city centre' },
        { name: 'og:type', content: 'profile' },
        { name: 'twitter:creator', content: '@jjiiimmmy' },
        { name: 'twitter:site', content: '@jjiiimmmy' },
        { name: 'twitter:title', content: 'James Ciclitira - Freelancer Product Designer' },
        { name: 'twitter:description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
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
