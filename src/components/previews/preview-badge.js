import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "任意", icon: "tag" },
  { id: 1, role: "el_badge__primary", text: "推奨", icon: "check" },
  { id: 2, role: "el_badge__info", text: "情報", icon: "info" },
  { id: 3, role: "el_badge__success", text: "重要", icon: "check" },
  { id: 4, role: "el_badge__warning", text: "注意", icon: "info" },
  { id: 5, role: "el_badge__danger", text: "必須", icon: "minus" }
]

const tags = [
  { id: 0, text: "Span", value: "span" },
  { id: 1, text: "Div", value: "div" }
]

const patterns = [
  { id: 0, text: "Plain", value: "el_badge__plain" },
  { id: 1, text: "Outline", value: "el_badge__outline" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewBadgeBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "span",
      pattern: "el_badge__plain",
      strong: false,
      round: false,
      disabled: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleStrong() {
    this.setState({ strong: !this.state.strong })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const strong = this.state.strong ? "el_badge__strong" : ""
    const round = this.state.round ? "el_badge__round" : ""
    const disabled = this.state.disabled
    const disabledClass = disabled ? "el_badge__disabled" : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="el_badge ${pattern} ${item.role} ${strong} ${round} ${disabledClass}"
          >${item.text}</${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="bl_demo_options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Strong"}
                parentChange={() => this.toggleStrong()}
                checked={this.state.strong}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
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

export class PreviewBadgeSquare extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "span",
      pattern: "el_badge__plain",
      disabled: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const disabled = this.state.disabled
    const disabledClass = disabled ? "el_badge__disabled" : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="el_badge ${pattern} el_badge__square ${item.role} ${disabledClass}"
          ><i aria-hidden="true" class="fas fa-${item.icon} el_icon"></i></${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="bl_demo_options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
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

export class PreviewBadgeCircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "span",
      pattern: "el_badge__plain",
      disabled: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const disabled = this.state.disabled
    const disabledClass = disabled ? "el_badge__disabled" : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="el_badge ${pattern} el_badge__circle ${item.role} ${disabledClass}"
          ><i aria-hidden="true" class="fas fa-${item.icon} el_icon"></i></${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="bl_demo_options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
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
