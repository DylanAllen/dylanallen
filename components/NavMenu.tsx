import * as React from 'react'
import Link from 'next/link'

const NavMenu: React.FunctionComponent<any> = () => {

  return (
    <nav id="mainnav">
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/resume"><a>Resume</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/"><a>Home</a></Link>
    </nav>
  )
}

export default NavMenu