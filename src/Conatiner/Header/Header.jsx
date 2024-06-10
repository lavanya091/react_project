import React from 'react';
import './Header.css'
import SubHeading from '../../Components/SubHeading/SubHeading';
import welcome from './welcome.png'
const Header=()=>
(
 <div className='app_header'>
    <div className='app_wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className="app_header-h1">The Key to Fine Dining</h1>
        <p className='p_opensans' style={{margin:'2rem 0'}}>Welcome to our restaurant, where every dish is made with care and the freshest ingredients. Enjoy the cozy atmosphere as the delicious smells of our kitchen greet you.</p>
        <button type="button" className='custom_button'>Explore Menu</button>
    </div>
    <div className='app_wrapper_img'>
    <img src={welcome} alt="n0_img"/>
    </div>
 </div>   
)
export default Header;
