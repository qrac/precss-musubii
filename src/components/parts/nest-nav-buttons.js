import Link from "next/link"

export default ({ navs }) => {
  return (
    <nav className="bl_nest_nav_btns">
      <ul className="bl_box bl_box__sepa_parent">
        {navs.map((nav, i) => (
          <li className="bl_box" key={i}>
            <Link href={nav.path}>
              <a className="bl_box bl_box__fx bl_box__link hp_pd_l_lg hp_fx_full">
                <div className="bl_box bl_box__fx bl_box__sepa_child bl_box__angle_r hp_pd_vert_md hp_pd_r_xl hp_fx_full">
                  {nav.title}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
