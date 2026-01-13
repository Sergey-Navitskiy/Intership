import "./ButtonGroup.css";

function ButtonGroup({ buttons }) {
  return (
    <>
      <div className="button-group">
        {buttons.map((button, indx) => (
          <button key={indx} style={{ backgroundColor: button.color }}>
            {button.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonGroup;
