import PropTypes from "prop-types";

function Cart({ cart, handleDelete }) {
  const { imageURL, price, name, _id } = cart;

  return (
    <div>
      <div>
        <img src={imageURL} alt="" className=" shadow" />
      </div>
      <div className="text-center ">
        <p className=" font-semibold">
          {name && name.length > 10 ? name.slice(0, 10) : name}
        </p>
        <p>${price}</p>
        <button
          className="mt-2 text-xl bg-ash bg-opacity-30 px-1 rounded-sm"
          onClick={() => handleDelete(_id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default Cart;
