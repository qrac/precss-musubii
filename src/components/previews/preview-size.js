import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const sizes = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "hp_xxs" },
  { id: 6, text: "XS", value: "hp_xs" },
  { id: 5, text: "Small", value: "hp_sm" },
  { id: 4, text: "Medium", value: "hp_md" },
  { id: 3, text: "Large", value: "hp_lg" },
  { id: 2, text: "XL", value: "hp_xl" },
  { id: 1, text: "XXL", value: "hp_xxl" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewSizeBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: "",
    }
    this.changeSize = this.changeSize.bind(this)
  }
  changeSize(value) {
    this.setState({ size: value })
  }
  render() {
    const size = this.state.size
    const contents = `<button class="el_btn el_btn__plain el_btn__primary ${size}" type="button">ボタンA</button>
    <button class="el_btn el_btn__outline el_btn__danger ${size}" type="button">ボタンB</button>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Size"}>
              <DemoOptionBoxRadios
                patterns={sizes}
                name="radio-size-basic"
                parentChange={(value) => this.changeSize(value)}
                checked={this.state.size}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__fx hp_space_r_xs hp_space_b_xs hp_MG_r_xs hp_MG_b_xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
