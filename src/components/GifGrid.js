import React, {useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {

   
   const { data, loading} = useFetchGifs( category );

    //useEffect solo se ejecuta la primera vez que se renderiza el componente
     // useEffect( () => {
      // getGifs( category ).then( setImages )
    // }, [ category ])

    

    
    //getGifs();

    return (
        <> 
        <h2 className="animate__animated animate__fadeIn"> { category } </h2>
        { loading && <p className="animate__animated animate__flash"> Loading </p>}
        <hr />
        
        <div className="container gifs">
           
                {
                    data.map( img => (
                        <GifGridItems 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            
        </div>
        </>
    )
}
