function ListRendering() {
  const fruits = [
    "Táo",
    "Chuối",
    "Cam",
    "Nho",
  ];

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 15000000,
    },
    {
      id: 2,
      name: "Chuột",
      price: 300000,
    },
    {
      id: 3,
      name: "Điện thoại",
      price: 12000000,
    },
    {
      id: 4,
      name: "Tai nghe",
      price: 800000,
    },
    {
      id: 5,
      name: "Bàn phím",
      price: 1200000,
    },
  ];

  const total = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách trái cây</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>Danh sách sản phẩm</h2>

      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              color:
                product.price > 1000000
                  ? "red"
                  : "black",
            }}
          >
            {product.name} -
            {product.price.toLocaleString()}đ
          </li>
        ))}
      </ul>

      <h3>
        Tổng giá:
        {total.toLocaleString()}đ
      </h3>
    </div>
  );
}

export default ListRendering;