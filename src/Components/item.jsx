import "./item.css";
import icon from "../img/iconP.png";
import toast from "react-hot-toast";

function Item({ imgItem, nameItem, locItem, costItem, btnItem }) {
  const handleAdd = () => {
    toast.success(`${nameItem} added to cart!`, {
      duration: 2000,
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "8px",
      },
    });
  };

  return (
    <div className="itemBox">
      <img className="img1" src={imgItem} alt="" />
      <h5>{nameItem}</h5>
      <h6>
        <img src={icon} alt="" />
        {locItem}
      </h6>
      <p>{costItem}</p>
      <button onClick={handleAdd}>{btnItem}</button>
    </div>
  );
}

export default Item;
