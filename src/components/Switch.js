import "./Switch.css";

const Switch = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={props.darkMode} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
