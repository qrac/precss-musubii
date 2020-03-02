import React from "react"
import App from "next/app"

import AppHead from "~/components/commons/app-head"
import AppHeader from "~/components/commons/app-header"
import AppNav from "~/components/commons/app-nav"
import AppFooter from "~/components/commons/app-footer"

import "~/assets/scss/project.scss"

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="app">
        <AppHead />
        <AppHeader />
        <AppNav />
        <main className="main">
          <Component {...pageProps} />
        </main>
        <AppFooter />
      </div>
    )
  }
}

export default MyApp
