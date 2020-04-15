import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const sizes = [
  { id: 0, text: "未設定", value: "" },
  { id: 13, text: "伸縮幅", value: "hp_fx0" },
  { id: 1, text: "1/12", value: "hp_fx1" },
  { id: 2, text: "2/12", value: "hp_fx2" },
  { id: 3, text: "3/12", value: "hp_fx3" },
  { id: 4, text: "4/12", value: "hp_fx4" },
  { id: 5, text: "5/12", value: "hp_fx5" },
  { id: 6, text: "6/12", value: "hp_fx6" },
  { id: 7, text: "7/12", value: "hp_fx7" },
  { id: 8, text: "8/12", value: "hp_fx8" },
  { id: 9, text: "9/12", value: "hp_fx9" },
  { id: 10, text: "10/12", value: "hp_fx10" },
  { id: 11, text: "11/12", value: "hp_fx11" },
  { id: 12, text: "12/12", value: "hp_fx12" },
  { id: 14, text: "Full", value: "hp_fx_full" },
  { id: 15, text: "Auto", value: "hp_fx_auto" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewFlexBasic extends React.Component {
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
    const contents = `<div class="ly_grid ly_grid__gap_xs">
        <div class="ly_grid_col ${size}">
          <button class="el_btn el_btn__plain el_btn__primary hp_fx_full" type="button">ボタンA</button>
        </div>
        <div class="ly_grid_col ${size}">
          <button class="el_btn el_btn__outline el_btn__danger hp_fx_full" type="button">ボタンB</button>
        </div>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Flex"}>
              <DemoOptionBoxRadios
                patterns={sizes}
                name="radio-flex-basic"
                parentChange={(value) => this.changeSize(value)}
                checked={this.state.size}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
