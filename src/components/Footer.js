import React from 'react'


class Footer extends React.Component {
  render() {
    return (
<section className='mt4'>
<footer className="pv4 ph3 ph5-ns tc">
  <small className="f7 db pb2 tc">Made by
  <a target='blank' href='https://twitter.com/jimmmy'> Jimmy </a>
  with
  <a target='blank' href='https://tachyons.io'> Tachyons.io</a>,
  <a target='blank' href='http://facebook.github.io/react'> Reactjs,</a>
  <a target='blank' href='https://github.com/netlify/netlify-cms'> NetlifyCMS</a>
  </small>
  <small className="f6 db pb3 tc">© 2017, ALL RIGHTS RESERVED</small>
</footer>
</section>
    )
  }
}
export default Footer

