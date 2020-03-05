import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewButtonBasic,
  PreviewButtonSquare,
  PreviewButtonCircle,
  PreviewButtonAngle
} from "~/components/previews/preview-button"

export const meta = {
  title: "Element: Button"
}

export class ElementButton extends React.Component {
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
      },
      {
        id: 4,
        value: "angle",
        text: "Angle",
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
            return <PreviewButtonBasic />
          } else if (this.state.preview === "square") {
            return <PreviewButtonSquare />
          } else if (this.state.preview === "circle") {
            return <PreviewButtonCircle />
          } else if (this.state.preview === "angle") {
            return <PreviewButtonAngle />
          }
        })()}
      </article>
    )
  }
}

export default ElementButton
