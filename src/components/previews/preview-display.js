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

export class PreviewDisplayBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="bl_box hp_none"></div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_box hp_pd_md">
          <p className="el_txt hp_sm">
            ヘルパーでディスプレイプロパティを変更できます。以下は非表示にする例。
          </p>
        </div>
        <DemoPre language="html" code={formattedCode} />
        <div className="bl_box hp_pd_md">
          <table class="bl_table bl_table__border">
            <thead>
              <tr class="bl_box bl_table__paint">
                <th>Block</th>
                <th>Inline</th>
                <th>Inline Block</th>
                <th>None</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code class="el_code">.hp_block</code>
                </td>
                <td>
                  <code class="el_code">.hp_inline</code>
                </td>
                <td>
                  <code class="el_code">.hp_inline-block</code>
                </td>
                <td>
                  <code class="el_code">.hp_none</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
