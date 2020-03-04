import Head from "next/head"
import { useRouter } from "next/router"

import pjt from "../../../project.json"

export default ({ meta }) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <Head>
      <title key="title">
        {meta.title ? meta.title + " - " + pjt.site.title : pjt.site.title}
      </title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        property="format-detection"
        content="telephone=no, email=no, address=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        key="description"
        property="description"
        content={pjt.site.description}
      />
      <meta
        property="og:title"
        content={
          meta.title ? meta.title + " - " + pjt.site.title : pjt.site.title
        }
      />
      <meta
        property="og:description"
        content={meta.description ? meta.description : pjt.site.description}
      />
      <meta
        property="og:url"
        content={meta.path ? pjt.site.url + path : pjt.site.url}
      />
      <meta
        property="og:image"
        content={
          path === "/"
            ? pjt.site.url + "/ogp.png"
            : pjt.site.url + "/apple-touch-icon.png"
        }
      />
      <meta property="og:site_name" content={pjt.site.title} />
      <meta property="og:type" content={path === "/" ? "website" : "article"} />
      <meta
        name="twitter:card"
        content={path === "/" ? "summary_large_image" : "summary"}
      />
      <meta property="twitter:creator" content={"@" + pjt.site.twitter_id} />
      {/*<link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Rokkitt:500&display=swap"
      ></link>*/}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        crossorigin="anonymous"
        //SameSite="none Secure"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
