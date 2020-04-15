import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const buttonItems = [
  { id: 0, text: "左揃え", icon: "align-left" },
  { id: 1, text: "中央揃え", icon: "align-center" },
  { id: 2, text: "右揃え", icon: "align-right" },
]

const badgeItems = [
  { id: 0, role: "", text: "Build" },
  { id: 1, role: "el_badge__success", text: "Passing" },
]

const patterns = [
  { id: 0, text: "Plain", value: "el_btn__plain" },
  { id: 1, text: "Outline", value: "el_btn__outline" },
]

const beautifyHtmlOptions = {
  inline: ["img"],
  indent_size: 2,
}

export class PreviewJointButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "el_btn__outline",
      joint: true,
      grow: false,
      round: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.toggleJoint = this.toggleJoint.bind(this)
    this.toggleGrow = this.toggleGrow.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleJoint() {
    this.setState({ joint: !this.state.joint })
  }
  toggleGrow() {
    this.setState({ grow: !this.state.grow })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  render() {
    const pattern = this.state.pattern
    const joint = this.state.joint ? "bl_joint" : ""
    const grow = this.state.grow ? "hp_fx0" : ""
    const round = this.state.round ? "el_btn__round" : ""
    const jointTagBefore = `<div class="${joint}">`
    const jointTagAfter = `</div>`
    const items = buttonItems
      .map(
        (item) =>
          `<button class="el_btn ${pattern} ${grow} ${round}" type="button">
          <i aria-hidden="true" class="el_icon fas fa-${item.icon} el_icon__fit hp_mg_r_xxs"></i>
          <span class="el_txt">${item.text}</span>
        </button>`
      )
      .join("")
    const contents = (jointTagBefore + items + jointTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Joint"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJoint()}
                checked={this.state.joint}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                name="radio-joint-button-pattern"
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Grow"}
                parentChange={() => this.toggleGrow()}
                checked={this.state.grow}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewJointBadge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joint: true,
      round: false,
    }
    this.toggleJoint = this.toggleJoint.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
  }
  toggleJoint() {
    this.setState({ joint: !this.state.joint })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  render() {
    const joint = this.state.joint ? "bl_joint" : ""
    const round = this.state.round ? "el_badge__round" : ""
    const jointTagBefore = `<div class="${joint}">`
    const jointTagAfter = `</div>`
    const items = badgeItems
      .map(
        (item) => `<span class="el_badge el_badge__plain ${item.role}
        ${round}">${item.text}</span>`
      )
      .join("")
    const contents = (jointTagBefore + items + jointTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Joint"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJoint()}
                checked={this.state.joint}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewJointForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joint: true,
      grow: false,
      round: false,
    }
    this.toggleJoint = this.toggleJoint.bind(this)
    this.toggleGrow = this.toggleGrow.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
  }
  toggleGrow() {
    this.setState({ grow: !this.state.grow })
  }
  toggleJoint() {
    this.setState({ joint: !this.state.joint })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  render() {
    const joint = this.state.joint ? "bl_joint" : ""
    const grow = this.state.grow ? "hp_fx0" : ""
    const round = this.state.round ? "el_form__round" : ""
    const jointTagBefore = `<div class="${joint}">`
    const jointTagAfter = `</div>`
    const items = `<div class="el_form_select ${round}">
        <select>
          <option>Select A</option>
          <option>Select B</option>
          <option>Select C</option>
        </select>
      </div>
      <input type="text" class="el_form_input ${grow} ${round}" name="text" placeholder="キーワード">
      <button type="submit" class="el_btn el_btn__plain el_btn__info ${round}">
        <i class="el_icon fas fa-search" aria-hidden="true"></i>
      </button>`
    const contents = (jointTagBefore + items + jointTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Joint"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJoint()}
                checked={this.state.joint}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Grow (Text Input)"}
                parentChange={() => this.toggleGrow()}
                checked={this.state.grow}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
