import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';


import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-drop-down/cart-drop-down.component';

import './navgation.styles.scss';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { cart } = useContext(CartContext);
    const { toggleCart } = cart;


    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>

                    <Link className='nav-link' to='/shop'>
                        shop
                    </Link>
                    {
                        currentUser ?
                            <span className='nav-link' onClick={signOutUser}>sign out</span>
                            :
                            <Link className='nav-link' to='/auth'>
                                sign in
                            </Link>
                    }
                    <CartIcon />
                </div>
                {toggleCart ? <CartDropdown /> : null}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;