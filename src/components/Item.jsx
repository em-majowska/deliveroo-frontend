import "../assets/fonts/icons.css";
const Item = (props) => {
  return (
    <article>
      <div className="col-1">
        <h3>{props.title}</h3>
        <p>{props.description.slice(0, 60)}</p>
        <div className="details">
          <span className="price">{props.price} €</span>
          {props.popular && (
            <span className="rating">
              <i className="icon-STAR_FILL"></i> Populaire
            </span>
          )}
        </div>
      </div>

      {props.picture && <img src={props.picture} alt="répas" />}
    </article>
  );
};

export default Item;
