import React from 'react'
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <div>
      <Helmet>
      <title>Add new location</title>
      <script type='text/javascript' src='https://embed.typeform.com/embed.js' />
    </Helmet>
       <div className='absolute top-0 right-0 left-0 bottom-0' >
        <iframe id="typeform-full" width="100%" height="100%" frameBorder={0} src="https://jimi10.typeform.com/to/sDppYQ">
        </iframe>
      </div>
  </div>
)

export default NotFoundPage
