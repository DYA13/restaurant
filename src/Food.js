function Food({ itemsForSale }) {
    return (
      <div className="container">
        {itemsForSale.map((element) => {
          const { id, name, description, price, image } = element;
          return (
            <div className="foodContainer" key={id}>
              <img className="card_image" src={image} alt="food" />
  
              <div className="foodBox">
                <p>{name}</p>
  
                <p className="class_description">{description}</p>
                <p>${price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  export default Food;
  