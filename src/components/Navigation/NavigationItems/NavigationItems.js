import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
const navigationItems = (props) => {
    return (<ul className='NavigationItems'>
        <NavigationItem link = '/' exact >Burger Builder</NavigationItem>
        <NavigationItem link = '/Orders'>Orders</NavigationItem>

    </ul>  );
}
 
export default navigationItems;