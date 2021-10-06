import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    /* 
       const handleAdd = () => {
       setCategories(['Demon Slayer', ...categories ]);
    }
    */


    return (
        <>
            <h1> Gif App </h1>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                    )        
                }            
            </ol>      
        </>
    )
}

