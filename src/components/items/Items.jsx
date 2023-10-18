import "./style.css";

function Items(props) {
  return (
    <div className="content-container">
      <div className="items-container">
        <img src={props.url} />
        <h2>{props.name}</h2>
        <p>{props.info}</p>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}
export default Items;
