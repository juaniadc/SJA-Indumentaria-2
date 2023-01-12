import Cart from "./cart.png"

const CartWidget = () => {
    return (
        <div>
        <button>
            <img src={Cart} alt="Cart" className="App-logo"/>
        </button>
        <span className="Carrito">5</span>
        </div>
        
    
    );
};

export default CartWidget;