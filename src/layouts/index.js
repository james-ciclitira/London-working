import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const Header = () =>
  <div>
    <div className='mw8 pv3 db center tc'>
      <h1 className='f4'>
        <Link to="/" className='white'>WORKING NOT WORKING</Link>
        <div className='bg-accent center' style={{width: '82', height: '2'}}></div>
      </h1>
    <p className='white'>A collection of free spaces to work in around London city centre</p>
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
      meta={[
        { name: 'description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'keywords', content: 'Freelance Product Design, James Ciclitira, UI/UX, User Interface Design, User Experiences Design, London, Europe, HTML, CSS, React, iOS, Andriod, Mobile, Web, Sketch, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Interaction Design, Front-end Development, Digital Product Design, Jimmy, Jimi, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'James Ciclitira - Freelancer Product Designer' },
        { name: 'og:description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'og:url', content: 'https://jciclitira.com/' },
        { name: 'og:image', content: 'https://jciclitira.com/images/preview.png' },
        { name: 'profile:first_name', content: 'James' },
        { name: 'profile:last_name', content: 'Ciclitira' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@jjiiimmmy' },
        { name: 'twitter:site', content: '@jjiiimmmy' },
        { name: 'twitter:title', content: 'James Ciclitira - Freelancer Product Designer' },
        { name: 'twitter:description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'twitter:image', content: 'https://jciclitira.com/images/preview.png' },
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
