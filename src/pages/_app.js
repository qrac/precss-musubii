import React from "react"
import App from "next/app"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import AppHeader from "~/components/commons/app-header"
import AppHero from "~/components/commons/app-hero"
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
      <div className="ly_app">
        <AppHeader />
        <AppHero />
        <AppNav />
        <main className="ly_main">
          <Component {...pageProps} />
        </main>
        <AppFooter />
      </div>
    )
  }
}

export default MyApp
