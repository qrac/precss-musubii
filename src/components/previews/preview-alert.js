import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  {
    id: 0,
    role: "",
    text: "WordPressプラグインの設定へようこそ！",
    icon: "thumbs-up"
  },
  {
    id: 1,
    role: "bl_alert__primary",
    text: "WordPressプラグインの設定へようこそ！",
    icon: "thumbs-up",
    iconRole: "el_icon__primary"
  },
  {
    id: 2,
    role: "bl_alert__info",
    text: "プラグインに関するチュートリアルはこちら。",
    icon: "info-circle",
    iconRole: "el_icon__info"
  },
  {
    id: 3,
    role: "bl_alert__success",
    text: "プラグインの設定は自動的に保存されました。",
    icon: "check",
    iconRole: "el_icon__success"
  },
  {
    id: 4,
    role: "bl_alert__warning",
    text: "プラグインはアクティベートされていません。",
    icon: "exclamation-triangle",
    iconRole: "el_icon__warning"
  },
  {
    id: 5,
    role: "bl_alert__danger",
    text: "プラグインは削除されました。",
    icon: "times",
    iconRole: "el_icon__danger"
  }
]

const tails = [
  { id: 0, text: "Top Left", value: "bl_alert__tail_t_l" },
  { id: 1, text: "Top Center", value: "bl_alert__tail_t_c" },
  { id: 2, text: "Top Right", value: "bl_alert__tail_t_r" },
  { id: 3, text: "Right Top", value: "bl_alert__tail_r_t" },
  { id: 4, text: "Right Middle", value: "bl_alert__tail_r_middle" },
  { id: 5, text: "Right Bottom", value: "bl_alert__tail_r_b" },
  { id: 6, text: "Bottom Right", value: "bl_alert__tail_b_r" },
  { id: 7, text: "Bottom Center", value: "bl_alert__tail_b_c" },
  { id: 8, text: "Bottom Left", value: "bl_alert__tail_b_l" },
  { id: 9, text: "Left Bottom", value: "bl_alert__tail_l_b" },
  { id: 10, text: "Left Middle", value: "bl_alert__tail_l_middle" },
  { id: 11, text: "Left Top", value: "bl_alert__tail_l_t" }
]

const beautifyHtmlOptions = {
  inline: ["s"],
  indent_size: 2
}

export class PreviewAlertRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = items
      .map(
        item =>
          `<div class="bl_alert ${item.role}">
            <i aria-hidden="true" class="fas fa-${item.icon} ${item.iconRole} el_icon el_icon__fit hp_mg_r_xxs"></i>
            <span class="el_txt ${item.role}">${item.text}</span>
          </div>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box hp_space_sm"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewAlertTail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tail: "bl_alert__tail_t_l"
    }
    this.changeTail = this.changeTail.bind(this)
  }
  changeTail(value) {
    this.setState({ tail: value })
  }
  render() {
    const tail = this.state.tail
    const contents = items
      .map(
        item =>
          `<div class="bl_alert ${item.role} ${tail}">
            <i aria-hidden="true" class="fas fa-${item.icon} ${item.iconRole} el_icon el_icon__fit hp_mg_r_xxs"></i>
            <span class="text ${item.role}">${item.text}</span>
          </div>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Tail"}>
              <DemoOptionBoxRadios
                patterns={tails}
                parentChange={value => this.changeTail(value)}
                checked={this.state.tail}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box hp_space_sm"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
