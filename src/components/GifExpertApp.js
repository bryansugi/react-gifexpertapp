import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = ({title='App GifExpert'})=>{

    const [categories, setCategories] = useState(['gifs']);

    return (
        <>
        <h2>{title}</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>

        <ol>
            {
                categories.map(category => 
                    <GifGrid
                        key={category} 
                        category={category}
                    />
                )
            }
        </ol>

        </>
    );
}

export default GifExpertApp;