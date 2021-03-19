import React, { useState, useEffect, useRef } from 'react'
import {NavLink} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <NavLink to="/" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </NavLink>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" >
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem >HTML</DropdownItem>
          <DropdownItem >CSS</DropdownItem>
          <DropdownItem >JavaScript</DropdownItem>
          <DropdownItem >Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem >Kangaroo</DropdownItem>
          <DropdownItem >Frog</DropdownItem>
          <DropdownItem >Horse?</DropdownItem>
          <DropdownItem >Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export function NavItem(props) {
	// console.log(props.props)
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
			<NavLink to='/'
				// className="icon-button"
				onClick={() => setOpen(!open)}>{props.props}
      </NavLink>

      {open && props.children}
    </li>
  );
}