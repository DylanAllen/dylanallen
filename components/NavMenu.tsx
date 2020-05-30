import * as React from 'react'
import Link from './Link'
import { Nav } from 'grommet'
import { auth } from '../utils/auth';

const login = () => {
  auth.login();
}

const NavMenu: React.FunctionComponent<any> = () => {
  auth.init();
  return (
    <Nav direction="row-reverse" pad="medium">
      {!auth.user && <Link onClick={login}>Login</Link>}
      <Link path="/blog" label="Blog" />
      <Link path="/about" label="About" />
      <Link path="/" label="Home" />
    </Nav>
  )
}

export default NavMenu