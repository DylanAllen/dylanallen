import * as React from 'react'
import Link from './Link'
import { Nav } from 'grommet'

const NavMenu: React.FunctionComponent<any> = () => {

  return (
    <Nav direction="row-reverse" pad="medium">
      <Link path="/blog" label="Blog" />
      <Link path="/about" label="About" />
      <Link path="/" label="Home" />
    </Nav>
  )
}

export default NavMenu