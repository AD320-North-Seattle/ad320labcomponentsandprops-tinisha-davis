import { recipes } from './data.js';
import './App.css';
import RecipeContainer from './components/RecipeContainer.jsx';

function App() {


  return (
    <>
    <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
