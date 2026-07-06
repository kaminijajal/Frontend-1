import React, { useState } from 'react'
import PlusIcon from '@iconify-react/flat-color-icons/plus';
import MinusIcon from '@iconify-react/fluent-emoji-flat/minus';

function CartItem() {
    const [count, setCount] = useState(1);

    const plus = () => {
        setCount(count+1);

    };
    const minus = () => {
        // setCount(count-1);
        if(count>1){
            setCount(count-1);
        }
    };
  return (
    <div >
        
        <span onClick={plus}><PlusIcon height="3em" /></span>
       <p style={{paddingBottom:"10px",fontSize:"30px",paddingTop:"10px",}}>{count}</p>
        <span onClick={minus}><MinusIcon height="3em" /></span>
    
        <hr />
    </div>
  )
}

export default CartItem