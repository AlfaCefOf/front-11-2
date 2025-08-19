import "./working.css";

function Working({ imgWork, nameWork, descWork }) {
  return (
    <div className="workWrap">
      <img src={imgWork} alt="" />
      <h4>{nameWork}</h4>
      <p>{descWork}</p>
    </div>
  );
}

export default Working;
