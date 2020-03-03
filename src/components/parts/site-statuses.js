import pkg from "../../../package.json"

export default () => {
  return (
    <span className="el_txt el_txt__line_height_xxs hp_xs">v{pkg.version}</span>
  )
}
