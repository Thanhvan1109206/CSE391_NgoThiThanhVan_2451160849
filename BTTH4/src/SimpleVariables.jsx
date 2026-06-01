function SimpleVariables() {
  const ten = "Ngô Thị Thanh Vân";
  const tuoi = 20;
  const queQuan = "Hà Nội";
  const canNang = 50;
  const chieuCao = 1.6;

  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);

  const gio = new Date().getHours();

  const loiChao =
    gio < 12
      ? "Chào buổi sáng"
      : gio < 18
      ? "Chào buổi chiều"
      : "Chào buổi tối";

  return (
    <div style={{ padding: "20px" }}>
      <h2>{loiChao}</h2>

      <p>Tên: {ten}</p>

      <p>Tuổi: {tuoi}</p>

      <p>Tuổi năm sau: {tuoi + 1}</p>

      <p>Quê quán: {queQuan}</p>

      <p>BMI: {bmi}</p>
    </div>
  );
}

export default SimpleVariables;