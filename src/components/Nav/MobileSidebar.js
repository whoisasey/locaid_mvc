// from https://github.com/briancodex/react-sidebar-dropdown

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import {Mobile} from '../reusables/Logo'
import { IconContext } from 'react-icons/lib';

// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
background: #c4c4c4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 20;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MobileSidebar = ({props, searchVal, locations, categories, searchSpace}) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="nav_mobile">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="mobile_nav_header">
          <NavLink className="mobile_nav_link" to='/'>
						<FaIcons.FaBars onClick={showSidebar} />
						<Mobile />
          </NavLink>
        </div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavLink className="mobile_nav_link" to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavLink>
            {SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} searchVal={searchVal} searchSpace={searchSpace}/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </nav>
  );
};

export default MobileSidebar;