import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const types = [
  { id: 0, text: "Text", value: "text" },
  { id: 1, text: "Password", value: "password" },
  { id: 2, text: "URL", value: "url" },
  { id: 3, text: "TEL", value: "tel" },
  { id: 4, text: "Number", value: "number" },
  { id: 5, text: "Date", value: "date" },
  { id: 6, text: "Time", value: "time" },
]

const patterns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Plain", value: "el_form__plain" },
  { id: 2, text: "Underline", value: "el_form__underline" },
  { id: 3, text: "Inside", value: "el_form__inside" },
]

const multiplePatterns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Plain", value: "el_form__plain" },
  { id: 3, text: "Inside", value: "el_form__inside" },
]

const buttonPatterns = [
  { id: 0, text: "Plain", value: "el_btn__plain" },
  { id: 1, text: "Outline", value: "el_btn__outline" },
  { id: 2, text: "Melt", value: "el_btn__melt" },
]

const roles = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Success", value: "el_form__success" },
  { id: 2, text: "Danger", value: "el_form__danger" },
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "left", value: "el_form__l" },
  { id: 2, text: "Center", value: "el_form__c" },
  { id: 3, text: "Right", value: "el_form__r" },
]

const buttonRoles = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Primary", value: "el_btn__primary" },
  { id: 2, text: "Info", value: "el_btn__info" },
  { id: 3, text: "Success", value: "el_btn__success" },
  { id: 4, text: "Warning", value: "el_btn__warning" },
  { id: 5, text: "Danger", value: "el_btn__danger" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewFormBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "text",
      pattern: "",
      role: "",
      align: "",
      round: false,
      disabled: false,
      readonly: false,
    }
    this.changeType = this.changeType.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.changeAlign = this.changeAlign.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleReadonly = this.toggleReadonly.bind(this)
  }
  changeType(value) {
    this.setState({ type: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleReadonly() {
    this.setState({ readonly: !this.state.readonly })
  }
  render() {
    const type = this.state.type
    const pattern = this.state.pattern
    const role = this.state.role
    const align = this.state.align
    const round = this.state.round ? "el_form__round" : ""
    const disabled = this.state.disabled ? "disabled" : ""
    const readonly = this.state.readonly ? "readonly" : ""
    const subText = type === "text" ? 'placeholder="Text"' : ""
    const subUrl = type === "url" ? 'placeholder="https://example.com"' : ""
    const subEmal = type === "email" ? 'placeholder="example@gmail.com"' : ""
    const subTel = type === "tel" ? 'placeholder="000-0000-0000"' : ""
    const subNumber = type === "number" ? 'step="100" placeholder="10000"' : ""
    const subDate = type === "date" ? 'value="2020-01-01"' : ""
    const subTime = type === "time" ? 'value="09:30:00"' : ""
    const contents = `<input class="el_form_input ${pattern} ${role} ${align} ${round}"
      type="${type}" name="${type}"
      ${subText} ${subUrl} ${subEmal} ${subTel} ${subNumber} ${subDate} ${subTime}
      ${disabled} ${readonly} />`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Type"}>
              <DemoOptionBoxRadios
                patterns={types}
                parentChange={(value) => this.changeType(value)}
                checked={this.state.type}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Align"}>
              <DemoOptionBoxRadios
                patterns={aligns}
                parentChange={(value) => this.changeAlign(value)}
                checked={this.state.align}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
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
              <DemoOptionBoxCheckbox
                text={"Readonly"}
                parentChange={() => this.toggleReadonly()}
                checked={this.state.readonly}
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

export class PreviewFormTextarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "",
      role: "",
      disabled: false,
      readonly: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleReadonly = this.toggleReadonly.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleReadonly() {
    this.setState({ readonly: !this.state.readonly })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const disabled = this.state.disabled ? "disabled" : ""
    const readonly = this.state.readonly ? "readonly" : ""
    const contents = `<textarea class="el_form_textarea ${pattern} ${role}"
      name="text" ${disabled} ${readonly}></textarea>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"Readonly"}
                parentChange={() => this.toggleReadonly()}
                checked={this.state.readonly}
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

export class PreviewFormFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "el_btn__plain",
      role: "",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
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
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const strong = this.state.strong ? "el_btn__strong" : ""
    const round = this.state.round ? "el_btn__round" : ""
    const floating = this.state.floating ? "el_btn__flo" : ""
    const disabled = this.state.disabled
    const disabledClass = disabled ? "el_btn__disabled" : ""
    //const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const contents = `<label class="el_btn ${pattern} ${role}
      ${strong} ${round} ${floating} ${disabledClass}">
        <span class="el_txt">ファイル選択</span>
        <input class="el_form_input" type="file" name="file">
      </label>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={buttonPatterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={buttonRoles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
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

export class PreviewFormRadio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="bl_box bl_box__fx hp_space_r_md"><div class="bl_box">
        <input class="el_form_input" id="radio-demo-1-1" type="radio" name="radio-demo-1" checked>
        <label class="el_form_label el_form__middle" for="radio-demo-1-1">
          <span class="el_form_radio hp_mg_r_xxs"></span>
          <span class="el_txt">むすびー</span>
        </label>
      </div>
      <div class="bl_box">
        <input class="el_form_input" id="radio-demo-1-2" type="radio" name="radio-demo-1">
        <label class="el_form_label el_form__middle" for="radio-demo-1-2">
          <span class="el_form_radio hp_mg_r_xxs"></span>
          <span class="el_txt">むすびい</span>
        </label>
      </div>
      <div class="bl_box">
        <input class="el_form_input" id="radio-demo-1-3" type="radio" name="radio-demo-1" disabled>
        <label class="el_form_label el_form__middle" for="radio-demo-1-3">
          <span class="el_form_radio hp_mg_r_xxs"></span>
          <span class="el_txt">むすび</span>
        </label>
      </div></div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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

export class PreviewFormCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="bl_box bl_box__fx hp_space_r_md"><div class="bl_box">
        <input class="el_form_input" id="checkbox-demo-1-1" type="checkbox" name="checkbox-demo-1" checked>
        <label class="el_form_label el_form__middle" for="checkbox-demo-1-1">
          <span class="el_form_checkbox hp_mg_r_xxs"></span>
          <span class="el_txt">むすびー</span>
        </label>
      </div>
      <div class="bl_box">
        <input class="el_form_input" id="checkbox-demo-1-2" type="checkbox" name="checkbox-demo-1">
        <label class="el_form_label el_form__middle" for="checkbox-demo-1-2">
          <span class="el_form_checkbox hp_mg_r_xxs"></span>
          <span class="el_txt">むすびい</span>
        </label>
      </div>
      <div class="bl_box">
        <input class="el_form_input" id="checkbox-demo-1-3" type="checkbox" name="checkbox-demo-1" disabled>
        <label class="el_form_label el_form__middle" for="checkbox-demo-1-3">
          <span class="el_form_checkbox hp_mg_r_xxs"></span>
          <span class="el_txt">むすび</span>
        </label>
      </div></div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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

export class PreviewFormSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "",
      role: "",
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const disabled = this.state.disabled ? "disabled" : ""
    const contents = `<div class="el_form_select ${pattern} ${role}">
        <select ${disabled}>
          <option>Select A</option>
          <option>Select B</option>
          <option>Select C</option>
          <option>Select D</option>
          <option>Select E</option>
        </select>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
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
            className="bl_box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewFormSelectMultiple extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "",
      role: "",
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const disabled = this.state.disabled ? "disabled" : ""
    const contents = `<div class="el_form_select el_form_select__multi ${pattern} ${role}">
        <select size="5" multiple ${disabled}>
          <option>Select A</option>
          <option>Select B</option>
          <option>Select C</option>
          <option>Select D</option>
          <option>Select E</option>
        </select>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={multiplePatterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
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
            className="bl_box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewFormFieldset extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<fieldset class="el_form_fieldset">
        <p class="el_txt">フォームテキスト</p>
      </fieldset>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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

export class PreviewFormButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "el_btn__plain",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
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
  render() {
    const pattern = this.state.pattern
    const strong = this.state.strong ? "el_btn__strong" : ""
    const round = this.state.round ? "el_btn__round" : ""
    const floating = this.state.floating ? "el_btn__flo" : ""
    const disabled = this.state.disabled ? "disabled" : ""
    const contents = `<div class="bl_box bl_box__fx hp_space_r_xs">
          <button class="el_btn ${pattern} ${strong} ${round} ${floating}" type="button" ${disabled}>ボタン</button>
          <button class="el_btn ${pattern} el_btn__primary ${strong} ${round} ${floating}" type="button" ${disabled}>ボタン</button>
        </div>
        <div class="bl_box bl_box__fx hp_space_r_xs">
          <button class="el_btn ${pattern} ${strong} ${round} ${floating}" type="reset" ${disabled}>リセット</button>
          <button class="el_btn ${pattern} el_btn__warning ${strong} ${round} ${floating}" type="reset" ${disabled}>リセット</button>
          <button class="el_btn ${pattern} el_btn__danger ${strong} ${round} ${floating}" type="reset" ${disabled}>リセット</button>
        </div>
        <div class="bl_box bl_box__fx hp_space_r_xs">
          <button class="el_btn ${pattern} el_btn__primary ${strong} ${round} ${floating}" type="submit" ${disabled}>送信</button>
          <button class="el_btn ${pattern} el_btn__success ${strong} ${round} ${floating}" type="submit" ${disabled}>送信</button>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={buttonPatterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
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
