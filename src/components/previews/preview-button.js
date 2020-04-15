import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "戻る", icon: "angle-left" },
  { id: 1, role: "el_btn__primary", text: "決定", icon: "check" },
  { id: 2, role: "el_btn__info", text: "情報", icon: "info-circle" },
  { id: 3, role: "el_btn__success", text: "登録", icon: "save" },
  {
    id: 4,
    role: "el_btn__warning",
    text: "注意",
    icon: "exclamation-triangle",
  },
  { id: 5, role: "el_btn__danger", text: "削除", icon: "times" },
]

const tags = [
  { id: 0, text: "Button", value: "button" },
  { id: 1, text: "Anchor", value: "a" },
]

const patterns = [
  { id: 0, text: "Plain", value: "el_btn__plain" },
  { id: 1, text: "Outline", value: "el_btn__outline" },
  { id: 2, text: "Melt", value: "el_btn__melt" },
]

const angles = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Right", value: "el_btn__angle_r" },
  { id: 2, text: "Left", value: "el_btn__angle_l" },
  { id: 3, text: "Right Up", value: "el_btn__angle_r el_btn__angle_up" },
  { id: 4, text: "Right Down", value: "el_btn__angle_r el_btn__angle_dw" },
  { id: 5, text: "Left Up", value: "el_btn__angle_l el_btn__angle_up" },
  { id: 6, text: "Left Down", value: "el_btn__angle_l el_btn__angle_dw" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewButtonBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "el_btn__plain",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
      externalLink: false,
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
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
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const strong = this.state.strong ? "el_btn__strong" : ""
    const round = this.state.round ? "el_btn__round" : ""
    const floating = this.state.floating ? "el_btn__flo" : ""
    const disabled = this.state.disabled
    const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
    const disabledClass = disabled && tag === "a" ? "el_btn__disabled" : ""
    const disabledAttr = disabled && tag === "button" ? "disabled" : ""
    const disabledTabIndex = disabled && tag === "a" ? 'tabindex="-1"' : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        (item) =>
          `<${tag} class="el_btn ${pattern} ${item.role} ${strong} ${round} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledTabIndex} ${disabledAttr}>${item.text}</${tag}>`
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
                name="radio-button-basic-tag"
                parentChange={(value) => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                name="radio-button-basic-pattern"
                parentChange={(value) => this.changePattern(value)}
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
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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

export class PreviewButtonSquare extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "el_btn__plain",
      floating: false,
      disabled: false,
      externalLink: false,
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const floating = this.state.floating ? "el_btn__flo" : ""
    const disabled = this.state.disabled
    const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
    const disabledClass = disabled && tag === "a" ? "el_btn__disabled" : ""
    const disabledAttr = disabled && tag === "button" ? "disabled" : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        (item) =>
          `<${tag} class="el_btn ${pattern} el_btn__square ${item.role} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledAttr}
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
                name="radio-button-square-tag"
                parentChange={(value) => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                name="radio-button-square-pattern"
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="bl_demo_options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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

export class PreviewButtonCircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "el_btn__plain",
      floating: false,
      disabled: false,
      externalLink: false,
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const floating = this.state.floating ? "el_btn__flo" : ""
    const disabled = this.state.disabled
    const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
    const disabledClass = disabled && tag === "a" ? "el_btn__disabled" : ""
    const disabledAttr = disabled && tag === "button" ? "disabled" : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        (item) =>
          `<${tag} class="el_btn ${pattern} el_btn__circle ${item.role} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledAttr}
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
                name="radio-button-circle-tag"
                parentChange={(value) => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                name="radio-button-circle-pattern"
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="bl_demo_options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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

export class PreviewButtonAngle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "el_btn__plain",
      angle: "el_btn__angle_r",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
      externalLink: false,
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.changeAngle = this.changeAngle.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeAngle(value) {
    this.setState({ angle: value })
  }
  toggleStrong() {
    this.setState({ strong: !this.state.strong })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const angle = this.state.angle
    const strong = this.state.strong ? "el_btn__strong" : ""
    const round = this.state.round ? "el_btn__round" : ""
    const floating = this.state.floating ? "el_btn__flo" : ""
    const disabled = this.state.disabled
    const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
    const disabledClass = disabled && tag === "a" ? "el_btn__disabled" : ""
    const disabledAttr = disabled && tag === "button" ? "disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        (item) =>
          `<${tag} class="el_btn ${pattern} ${item.role} hp_fx0 ${angle} ${strong} ${round} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledTabIndex} ${disabledAttr}>${item.text}</${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Angle"}>
              <DemoOptionBoxRadios
                patterns={angles}
                name="radio-button-angle"
                parentChange={(value) => this.changeAngle(value)}
                checked={this.state.angle}
              />
            </DemoOption>
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                name="radio-button-angle-tag"
                parentChange={(value) => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                name="radio-button-angle-pattern"
                parentChange={(value) => this.changePattern(value)}
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
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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
