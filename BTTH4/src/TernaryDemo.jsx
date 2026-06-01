function TernaryDemo() {
  const isLoggedIn = true;
  const score = 8.5;

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        {isLoggedIn
          ? "Chào mừng bạn!"
          : "Vui lòng đăng nhập"}
      </h2>

      <p>
        Kết quả:
        {score >= 5 ? " Đậu" : " Rớt"}
      </p>

      <p>
        Xếp loại:
        {score >= 9
          ? " Xuất sắc"
          : score >= 8
          ? " Giỏi"
          : score >= 7
          ? " Khá"
          : score >= 5
          ? " Trung bình"
          : " Yếu"}
      </p>
    </div>
  );
}

export default TernaryDemo;