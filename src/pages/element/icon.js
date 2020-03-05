import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewIconDark,
  PreviewIconLight,
  PreviewIconRole,
  PreviewIconFit
} from "~/components/previews/preview-icon"

export const meta = {
  title: "Element: Icon"
}

export class ElementIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: "basic"
    }
    this.changePreview = this.changePreview.bind(this)
  }
  changePreview(value) {
    this.setState({ preview: value })
  }
  render() {
    const previews = [
      {
        id: 1,
        value: "basic",
        text: "Basic",
        icon: "html5"
      },
      {
        id: 2,
        value: "fit",
        text: "Fit",
        icon: "html5"
      }
    ]
    return (
      <article className="bl_page">
        <AppHead meta={meta} />
        <DemoTabs
          patterns={previews}
          parentChange={value => this.changePreview(value)}
          checked={this.state.preview}
        />
        {(() => {
          if (this.state.preview === "basic") {
            return (
              <>
                <PreviewIconDark />
                <PreviewIconLight />
                <PreviewIconRole />
              </>
            )
          } else if (this.state.preview === "fit") {
            return <PreviewIconFit />
          }
        })()}
      </article>
    )
  }
}

export default ElementIcon
