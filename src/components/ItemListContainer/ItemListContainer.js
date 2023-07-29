import React from 'react';

function ItemListContainer( {greeting} ) {
    return(
        <>
        <div> <h1 className='text-center mt-5' >{greeting}</h1> </div>
        </>
    )
}

export default ItemListContainer