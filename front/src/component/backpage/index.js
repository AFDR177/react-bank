import "./index.scss";
import BackArrow from "./back-arrow.svg";

export default function BackPage() {
  const handleClick = () => {
    return window.history.back();
  };
  return (
    <div className="back-button click" onClick={handleClick}>
      <img src={BackArrow} alt="backarrow" width="20px" height="20px" />
    </div>
  );
}
