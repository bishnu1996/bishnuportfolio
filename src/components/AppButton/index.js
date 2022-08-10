import "./style.css";

const AppButton = (props) => {
  const getClassNames = () => {
    return `${props.className}`;
  };
  return (
    <button type="button" className={getClassNames()}>
      {props.children}
    </button>
  );
};
export default AppButton;
