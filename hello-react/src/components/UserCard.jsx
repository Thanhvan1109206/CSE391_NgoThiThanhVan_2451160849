function UserCard({
  name,
  email,
  avatar,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={avatar}
        alt={name}
        width="100"
      />

      <h3>{name}</h3>

      <p>{email}</p>
    </div>
  );
}

export default UserCard;