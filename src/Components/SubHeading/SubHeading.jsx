import React from 'react'
import spoon from './spoon.png'
const SubHeading = ({title})=>(
<div style={{marginBottom:'1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={spoon} alt="spoon" className='spoon_img'/>
</div>
);
export default SubHeading;

