import React from "react"
import beautify from "js-beautify"

//import DemoOption from "~/components/parts/demo-option"
//import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewClearfixBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="bl_example_float hp_cf"></div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_box hp_pd_md">
          <p className="el_txt hp_sm">
            ヘルパーで float プロパティを解除します。
          </p>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
