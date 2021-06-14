import { BsPersonFill } from "react-icons/bs";
import { FiType } from "react-icons/fi";
import { GiWoodenPegleg } from "react-icons/gi";
export const DotaCard = (props) => {
  const iconSize = 30;
  return (
    <div
      style={{
        margin: 24,
        width: 500,
        height: 200,
        backgroundColor: "red",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: 30, display: "flex", alignItems: "center" }}>
        <BsPersonFill size={iconSize} />
        <h2>{props.hero}</h2>
      </div>
      <div style={{ padding: 30, display: "flex", alignItems: "center" }}>
        <FiType size={iconSize} />
        <h2>{props.type}</h2>
      </div>
      <div style={{ padding: 30, display: "flex", alignItems: "center" }}>
        <GiWoodenPegleg size={iconSize} />
        <h2>{props.leg}</h2>
      </div>
    </div>
  );
};
