export default ({ patterns, checked, parentChange }) => {
  return (
    <>
      {patterns.map(patternEl => (
        <div className="bl_demo_option_box hp_mg_r_md" key={patternEl.id}>
          <input
            className="el_form_input"
            type="radio"
            onChange={() => parentChange(patternEl.value)}
            checked={checked === patternEl.value}
          />
          <label
            className="el_form_label el_form__middle"
            onClick={() => parentChange(patternEl.value)}
          >
            <span className="el_form_radio hp_mg_r_xxs"></span>
            <span className="el_txt">{patternEl.text}</span>
          </label>
        </div>
      ))}
    </>
  )
}
