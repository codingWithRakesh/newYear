import './App.css'
import './media.css'
import ChangeImg from './component/ChangeImg'
import ChangeYear from './component/ChangeYear'
import Details from './component/Details'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <div className="row fir">
        <Router>
          <Routes>
            <Route path="/details" element={<Details />} />
            {/* Other routes */}
          </Routes>
        </Router>
        <ChangeYear />
      </div>
      <div className="row sec">
        <ChangeImg />
      </div>
    </div>
  )
}

export default App
