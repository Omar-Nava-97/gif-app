import React from 'react'

export const GifGridItems = ( {id, title, url} ) => {

    //console.log( {id, title, url } );
    
    return (
        <div className="animate__animated animate__fadeIn">
            <img src={ url } alr={ title } />
             
        </div>
    )
}
