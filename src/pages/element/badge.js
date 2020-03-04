import React from "react"

import AppHead from "~/components/commons/app-head"
import { PreviewBadgeBasic } from "~/components/previews/preview-badge"

import pjt from "../../../project.json"

export const meta = {
  title: "Element: Badge"
}

export class PageElementBadge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <article className="bl_page">
        <AppHead meta={meta} />
        <PreviewBadgeBasic />
      </article>
    )
  }
}

export default PageElementBadge
