import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "25000000",
      image:
        "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Samsung S24",
      price: "22000000",
      image:
        "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Xiaomi 14",
      price: "15000000",
      image:
        "https://via.placeholder.com/200",
    },
  ];

  return (
    <div>
      <Header />

      <h2>Sản phẩm</h2>

      <div
        style={{
          display: "flex",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <h2>Người dùng</h2>

      <UserCard
        name="Minh"
        email="minh@gmail.com"
        avatar="https://via.placeholder.com/100"
      />

      <UserCard
        name="An"
        email="an@gmail.com"
        avatar="https://via.placeholder.com/100"
      />

      <UserCard
        name="Linh"
        email="linh@gmail.com"
        avatar="https://via.placeholder.com/100"
      />

      <Footer />
    </div>
  );
}

export default App;