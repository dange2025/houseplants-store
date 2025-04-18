import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    padding: "1rem",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "800px",
    margin: "0 auto",
  },
  link: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
};

