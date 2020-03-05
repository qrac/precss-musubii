import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewGridBasic,
  PreviewGridGap,
  PreviewGridGapVertical,
  PreviewGridGapHorizontal,
  PreviewGridAlign,
  PreviewGridReverse,
  PreviewGridStretch
} from "~/components/previews/preview-grid"

export const meta = {
  title: "Layout: Grid"
}

export class PageLayoutGrid extends React.Component {
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
        value: "gap",
        text: "gap",
        icon: "html5"
      },
      {
        id: 3,
        value: "align",
        text: "Align",
        icon: "html5"
      },
      {
        id: 4,
        value: "reverse",
        text: "Reverse",
        icon: "html5"
      },
      {
        id: 5,
        value: "stretch",
        text: "Stretch",
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
            return <PreviewGridBasic />
          } else if (this.state.preview === "gap") {
            return (
              <>
                <PreviewGridGap />
                <PreviewGridGapVertical />
                <PreviewGridGapHorizontal />
              </>
            )
          } else if (this.state.preview === "align") {
            return <PreviewGridAlign />
          } else if (this.state.preview === "reverse") {
            return <PreviewGridReverse />
          } else if (this.state.preview === "stretch") {
            return <PreviewGridStretch />
          }
        })()}
      </article>
    )
  }
}

export default PageLayoutGrid
