import Heading from "../heading";

import "./index.css";

export default function TitleDescription({ title, children }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>

      <p className="description__text">{children}</p>
    </div>
  );
}
