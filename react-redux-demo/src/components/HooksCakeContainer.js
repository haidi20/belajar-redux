import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { buyCake } from '../redux';  

function HooksCakeContainer(){
    const dispatch      = useDispatch(); 
    const numOfCakes    = useSelector(state => state.cake.numOfCakes);
    return(
        <div>
            <h2>Num of cakes -{numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer;