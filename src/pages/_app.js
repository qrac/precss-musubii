import React from "react"
import App from "next/app"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import AppHeader from "~/components/commons/app-header"
import AppHero from "~/components/commons/app-hero"
import AppNav from "~/components/commons/app-nav"
import AppBar from "~/components/commons/app-bar"
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
          <section className="ly_sect ly_sect_main">
            <div className="ly_sect_inner ly_sect_inner__desk_max_w_tab hp_pd_horiz_md">
              <div className="bl_card bl_card__bg_pj2 bl_card__flo bl_card__rad_md">
                <AppBar />
                <Component {...pageProps} />
              </div>
            </div>
          </section>
        </main>
        <AppFooter />
      </div>
    )
  }
}

export default MyApp
