import imgD from '../assets/images/newYear.jpg'

const ChangeImg = () => {
  return (
    <div className="changeImg">
      <div className="showChange">
        <div className="rowCC">
          <span>20</span>
        </div>
        <div className="rowCC animated">
          <span>2</span>
          <span className="number old">4</span>
          <span className="number new">5</span>
        </div>
      </div>

      <div className="showimg">
          <img src={imgD}/>
        </div>
    </div>
  )
}

export default ChangeImg