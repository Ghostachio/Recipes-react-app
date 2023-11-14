import React, { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form';
import Recipes from './components/Recipes';
import Title from './components/Title';

function App() {
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');



  useEffect(() => {
      getRecipes()
      console.log('rendering')
  }, [query])


  const getRecipes = async () => {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d482e5eb&app_key=ae042a4155002bb111abd4564ce392e0`)
  const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits)
  }


  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

  const inputSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
      <div className='flex flex-col items-center bg-[#84a98c]'>
        <Title />
        <Form onChange={inputHandler} onClick={inputSearch}/>
          <div className='w-screen flex flex-wrap justify-center'>
            {recipes.map((recipe, id) => (
              <Recipes key={id} title={recipe.recipe.label} image={recipe.recipe.image} calories={Math.floor(recipe.recipe.calories)} ingredients={recipe.recipe.ingredients}/>
            ))}
          </div>
      </div>
  )
}

export default App
