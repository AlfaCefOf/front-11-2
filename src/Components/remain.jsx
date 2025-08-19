import "./remain.css"


function Remain({imgRem, nameRem, dayRem}) {
  return (
    <>
    <div className="remainBox">
      <img src={imgRem} alt="" />
      <h3>{nameRem}</h3>
      <div className="dateRem"><p>{dayRem}</p></div>
    </div>
    </>
  )
}

export default Remain