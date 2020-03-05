import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewBadgeBasic,
  PreviewBadgeSquare,
  PreviewBadgeCircle
} from "~/components/previews/preview-badge"

export const meta = {
  title: "Element: Badge"
}

export class PageElementBadge extends React.Component {
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
        value: "square",
        text: "Square",
        icon: "html5"
      },
      {
        id: 3,
        value: "circle",
        text: "Circle",
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
            return <PreviewBadgeBasic />
          } else if (this.state.preview === "square") {
            return <PreviewBadgeSquare />
          } else if (this.state.preview === "circle") {
            return <PreviewBadgeCircle />
          }
        })()}
      </article>
    )
  }
}

export default PageElementBadge
