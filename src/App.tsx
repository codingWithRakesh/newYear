import './App.css'
import './media.css'
import ChangeImg from './component/ChangeImg'
import ChangeYear from './component/ChangeYear'
import Details from './component/Details'

function App() {

  return (
    <div className='container'>
      <div className="row fir">
        <Details />
        <ChangeYear />
      </div>
      <div className="row sec">
        <ChangeImg />
      </div>
    </div>
  )
}

export default App
