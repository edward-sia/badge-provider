import React from 'react'

const styles = {
  container: {
    padding: '8px 16px',
    alignContent: 'center'
  }
}

const Page = ({ children }) => (
  <div style={styles.container}>
    { children }
  </div>
)

export default Page
