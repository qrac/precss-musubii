import { useRouter } from "next/router"

export default () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className="bl_bar">
      <ul className="bl_bar_btns">
        <li className="el_bar_btn el_bar_btn__red"></li>
        <li className="el_bar_btn el_bar_btn__yellow"></li>
        <li className="el_bar_btn el_bar_btn__green"></li>
      </ul>
      <p className="el_bar_pathName">{path}</p>
    </div>
  )
}
