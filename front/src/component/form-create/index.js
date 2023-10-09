import "./index.css";
import FormField from "../../component/form-field";

export default function FormCreate({ button }) {
  const handlClick = () => {
    console.log();
  };

  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <div className="">
      <FormField onSubmit={handleSubmit} button={button} />
    </div>
  );
}
