import "./index.css";

export default function Button({
  children,
  style = {},
  className = "",
  onClick = {},
}) {
  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}
