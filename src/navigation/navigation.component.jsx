import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../src/assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
    return(
      <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
          </div>
        </div>
        <Outlet/>
      </>
    )
  }

export default Navigation