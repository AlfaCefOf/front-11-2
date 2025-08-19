import "./food.css"

function Food({imgFood, foodName}) {
  return (
    <div className="foodBox">
        <img src={imgFood} alt="" />
        <p>{foodName}</p>
    </div>
  )
}

export default Food