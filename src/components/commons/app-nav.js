import Link from "next/link"
import { useRouter } from "next/router"

import pjt from "../../../project.json"

export default () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <nav className="ly_sect ly_sect_nav">
      <div className="ly_sect_inner ly_sect_inner__desk_max_w_tab hp_pd_horiz_md">
        <ul className="bl_nav_btns bl_nav_btns__c">
          {pjt.navs.map((nav, i) => (
            <li className="bl_nav_item" key={i}>
              <Link href={nav.path}>
                <a
                  className={
                    path === nav.path ? "el_nav_btn is_active" : "el_nav_btn"
                  }
                >
                  {nav.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
