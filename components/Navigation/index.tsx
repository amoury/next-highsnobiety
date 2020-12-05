import { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

export type TNavItem = {
  id: number;
  title: string;
  href: string;
}

const navItems: Array<TNavItem> = [
  { id: 1, title: 'Latest', href: '#' },
  { id: 2, title: 'Black lives matter', href: '#' },
  { id: 3, title: 'Style', href: '#' },
  { id: 4, title: 'Sneakers', href: '#' },
]

const Navigation = (): JSX.Element => {
  const [isSearchActive, setSearchActive] = useState(false);

  return (
    <NavWrapper>
      { isSearchActive ? 
        <SearchBar close={() => setSearchActive(false)} /> : 
        <NavBar navItems={navItems} showSearch={() => setSearchActive(true)} />
      }
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
  background-color: #fff;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  height: 74px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export default Navigation
