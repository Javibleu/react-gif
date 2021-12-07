import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Grid } from './components/Grid';

const App = () => {

  const [categories, setCategories] = useState(['Cat']);


  return (
    <>
      <h2 className="ui header">Gif expert</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <div className='ui divider'></div>

        {categories.map((category) => 
          <Grid key={category} category={category} />
        )}
    </>
  );
}; 

export default App;
