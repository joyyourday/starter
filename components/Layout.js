// Layout.js

import React from 'react'
import PropTypes from 'prop-types'

class Layout extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    // Your code here
    return {}
  }

  render() {
    const { children } = this.props
    return (
      <>
        {/* Your layout code here */}
        {children}
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
