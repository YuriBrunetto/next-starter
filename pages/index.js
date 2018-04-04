import React, { Component } from 'react'
import Meta from '../components/Meta'

export default class extends Component {
  render() {
    return (
      <div>
        <Meta />

        <main>
          <h1>next-starter <span>v1.0.0</span> 🚀</h1>
          <h2>made with ❤️ by <a href="https://twitter.com/yuribrunetto" target="_blank">@yuribrunetto</a></h2>
        </main>
      </div>
    )
  }
}