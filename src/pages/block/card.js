import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewCardBasic,
  PreviewCardRadius,
  PreviewCardLink,
  PreviewCardZoom
} from "~/components/previews/preview-card"

export const meta = {
  title: "Block: Card"
}

export class BlockCard extends React.Component {
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
        value: "radius",
        text: "Radius",
        icon: "html5"
      },
      {
        id: 3,
        value: "link",
        text: "Link",
        icon: "html5"
      },
      {
        id: 4,
        value: "zoom",
        text: "Zoom",
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
            return <PreviewCardBasic />
          } else if (this.state.preview === "radius") {
            return <PreviewCardRadius />
          } else if (this.state.preview === "link") {
            return <PreviewCardLink />
          } else if (this.state.preview === "zoom") {
            return <PreviewCardZoom />
          }
        })()}
      </article>
    )
  }
}

export default BlockCard
