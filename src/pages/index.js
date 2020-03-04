import React from "react"
import beautify from "js-beautify"

import AppHead from "~/components/commons/app-head"
import DemoPre from "~/components/parts/demo-pre"

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export const meta = {}

export class PreviewBasicMarkup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `npm install precss-musubii`
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <article className="bl_page">
        <AppHead meta={meta} />
        <DemoPre language="" code={formattedCode} />
      </article>
    )
  }
}

export default PreviewBasicMarkup
