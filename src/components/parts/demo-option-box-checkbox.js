export default ({ text, checked, parentChange }) => {
  return (
    <div className="bl_demo_option_box hp_mg_r_xl">
      <input
        className="el_form_input"
        type="checkbox"
        onChange={() => parentChange()}
        checked={checked}
      />
      <label
        className="el_form_label el_form__middle"
        onClick={() => parentChange()}
      >
        <span className="el_form_checkbox hp_mg_r_xxs"></span>
        <span className="el_txt">{text}</span>
      </label>
    </div>
  )
}
