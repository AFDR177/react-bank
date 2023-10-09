import "./index.css";

export default function Component({ title, desctiption }) {
  return (
    <div className="title">
      <h1 className="title__heading">{title}</h1>
      <p className="title__description">{desctiption}</p>
    </div>
  );
}
