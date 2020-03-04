import React from "react"

import AppHead from "~/components/commons/app-head"
import NestNavButtons from "~/components/parts/nest-nav-buttons"

import pjt from "../../../project.json"

export const meta = {
  title: "Block"
}

export class PageBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <article className="bl_page">
        <AppHead meta={meta} />
        <NestNavButtons navs={pjt.blockNavs} />
      </article>
    )
  }
}

export default PageBlock
