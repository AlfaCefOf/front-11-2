import "./result.css";

function Result({
  articleResult,
  infoResult,
  btnResult,
  imgResult,
  className,
}) {
  return (
    <div className={`resultContainer ${className || ""}`}>
      <div className="leftResult">
        <h3>
          Best deals <span>Crispy Sandwiches</span>
        </h3>
        <p>{infoResult}</p>
        <button>{btnResult}</button>
      </div>
      <div className="rightResult">
        <img src={imgResult} alt="" />
      </div>
    </div>
  );
}

export default Result;
