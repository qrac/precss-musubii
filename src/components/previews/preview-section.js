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

export class PreviewSectionBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<section class="ly_sect"><div class="ly_sect_inner"></div></section>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_box hp_pd_md">
          <p className="el_txt hp_sm">
            画面幅が広くなった時に、自動で直下インナーに width
            を付与しセンタリングを行います。
          </p>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
