import "./Button.css";

const Button = ({ text, onClickFunc }) => {
  return (
    <button className="button" onClick={onClickFunc}>
      {text}
    </button>
  );
};

export default Button;
