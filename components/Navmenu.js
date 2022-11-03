import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import React from "react"

const Navmenu = () => {
   
class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </Menu>
    );
  }
}
}


export default Navmenu;