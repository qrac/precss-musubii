import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewFormBasic,
  PreviewFormTextarea,
  PreviewFormFile,
  PreviewFormRadio,
  PreviewFormCheckbox,
  PreviewFormSelect,
  PreviewFormSelectMultiple,
  PreviewFormFieldset,
  PreviewFormButton
} from "~/components/previews/preview-form"

export const meta = {
  title: "Element: Form"
}

export class ElementForm extends React.Component {
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
        value: "radio",
        text: "Radio",
        icon: "html5"
      },
      {
        id: 3,
        value: "checkbox",
        text: "Checkbox",
        icon: "html5"
      },
      {
        id: 4,
        value: "select",
        text: "Select",
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
                <PreviewFormBasic />
                <PreviewFormTextarea />
                <PreviewFormFile />
                <PreviewFormButton />
                <PreviewFormFieldset />
              </>
            )
          } else if (this.state.preview === "radio") {
            return <PreviewFormRadio />
          } else if (this.state.preview === "checkbox") {
            return <PreviewFormCheckbox />
          } else if (this.state.preview === "select") {
            return (
              <>
                <PreviewFormSelect />
                <PreviewFormSelectMultiple />
              </>
            )
          }
        })()}
      </article>
    )
  }
}

export default ElementForm
