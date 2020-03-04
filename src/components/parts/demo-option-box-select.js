export default ({ patterns, checked, parentChange }) => {
  return (
    <div className="bl_demo_option_box hp_mg_r_md">
      <div className="el_select">
        <select value={checked} onChange={e => parentChange(e.target.value)}>
          {patterns.map(patternEl => (
            <option value={patternEl.value} key={patternEl.id}>
              {patternEl.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
