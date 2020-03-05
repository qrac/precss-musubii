import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewSpaceBasic,
  PreviewSpaceWay
} from "~/components/previews/preview-space"

export const meta = {
  title: "Helper: Space"
}

export class PageHelperSpace extends React.Component {
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
        value: "way",
        text: "Way",
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
            return <PreviewSpaceBasic />
          } else if (this.state.preview === "way") {
            return <PreviewSpaceWay />
          }
        })()}
      </article>
    )
  }
}

export default PageHelperSpace
