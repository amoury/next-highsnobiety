import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsBag } from 'react-icons/bs';
import { TNavItem } from './index'
import Image from 'next/image'

type TProps = {
  navItems: Array<TNavItem>;
  showSearch: () => void;
}

const NavBar = ({ navItems, showSearch }: TProps): JSX.Element => {
  const router = useRouter();

  return (
    <Nav>
      <Logo onClick={() => router.push('/')}>
        <Image src='/assets/img/logo.svg' alt='main logo' width={160} height={28} />
      </Logo>      
      <Menu>
        <MenuList>
          {navItems.map(item => (
            <Link key={item.id} href={item.href}>
              <a className={router.pathname.includes(item.title.toLowerCase()) && 'active'}>
                <li>{item.title}</li>
              </a>
            </Link>
          ))}
        </MenuList>
      </Menu>
      <Misc>
        <IconContext.Provider value={{ size: '1.2em' }}>
          <MenuList>
            <Link href="/shop">
              <a className={router.pathname.includes('shop') && 'active'}>
                <li>Shop</li>
              </a>
            </Link>
            <li className='icon'><FiSearch onClick={showSearch} /></li>
            <li className='icon' onClick={() => router.push('/account/login')}><VscAccount /></li>
            <li className='icon'><BsBag /></li>
          </MenuList>
        </IconContext.Provider>
      </Misc>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 1200px;
`;

const Logo = styled.div`
  flex: 1;
  cursor: pointer;
`;

const Menu = styled.div``;

const MenuList = styled.ul`
  font-family: 'Univers-bold', sans-serif;
  list-style: none;
  display: flex;
  text-transform: uppercase;
  font-size: 15px;
  align-items: center;

  a {
    margin: 0 12px;
    position: relative;

    &:after{
      position: absolute;
      content: '';
      bottom: -2px;
      left: 0;
      border: 1px solid black;
      width: 0;
      opacity: 0;
      transition: width 0.3s ease-in-out;
    }

    &.active::after {
      opacity: 1;
      width: 100%;
    }

    &:hover::after {
      opacity: 1;
      width: 100%;
    }
  }

  > li {
    margin: 0 7px;
  }
  
  .icon {
    cursor: pointer;
  }
`;

const Misc = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export default NavBar
