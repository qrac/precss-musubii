import Link from "next/link"

import SiteLogo from "~/assets/images/site-logo"

export default () => {
  return (
    <>
      <Link href="/">
        <a className="un_siteLogo_link">
          <SiteLogo />
        </a>
      </Link>
    </>
  )
}
