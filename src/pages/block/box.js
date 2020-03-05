import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewBoxBasic,
  PreviewBoxFlexbox,
  PreviewBoxOutline,
  PreviewBoxSeparate,
  PreviewBoxLink
} from "~/components/previews/preview-box"

export const meta = {
  title: "Block: Box"
}

export class BlockBox extends React.Component {
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
        value: "flexbox",
        text: "Flexbox",
        icon: "html5"
      },
      {
        id: 3,
        value: "outline",
        text: "Outline",
        icon: "html5"
      },
      {
        id: 4,
        value: "separate",
        text: "Separate",
        icon: "html5"
      },
      {
        id: 5,
        value: "link",
        text: "Link",
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
            return <PreviewBoxBasic />
          } else if (this.state.preview === "flexbox") {
            return <PreviewBoxFlexbox />
          } else if (this.state.preview === "outline") {
            return <PreviewBoxOutline />
          } else if (this.state.preview === "separate") {
            return <PreviewBoxSeparate />
          } else if (this.state.preview === "link") {
            return <PreviewBoxLink />
          }
        })()}
      </article>
    )
  }
}

export default BlockBox
