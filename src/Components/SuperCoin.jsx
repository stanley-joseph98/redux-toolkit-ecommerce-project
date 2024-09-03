import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuperCoins = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (totalAmount < 100) {
      setSuperCoins(0);
    } else if (totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount < 300) {
      setSuperCoins(20);
    } else {
      setSuperCoins(30);
    }
  }, [totalAmount, cartItems]);

  return (
    <div className="super-coins" style={{ textAlign: "center" }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {superCoins} super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoins;