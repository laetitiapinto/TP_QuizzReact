import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Banniere from './components/Banniere';
import Quiz from './components/Quiz';
import AjoutQuestion from './components/AjoutQuestion';
import EditQuestion from './components/EditQuestion';
import SuppressionQuestion from './components/SuppressionQuestion';

function App() {
  return (
    <div className="App container">
      <Banniere />
      <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='/ajout' element={<AjoutQuestion />} />
        <Route path='/edit/:id' element={<EditQuestion />} />
        <Route path='/suppression/:id' element={<SuppressionQuestion />} />
      </Routes>

    </div>
  );
}

export default App;
