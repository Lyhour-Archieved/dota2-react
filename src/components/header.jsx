import { Link } from "react-router-dom";
import logo from "../assets/dota.png";
export const Header = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: 20,
        paddingTop: 30,
      }}
    >
      <Link to="/">
        <div>
          <img width={50} src={logo} alt="log" />
        </div>
      </Link>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <Link to="/dota-hero">
            <li style={{ paddingRight: 20 }}>dota hero </li>
          </Link>
          <Link to="/pro-player">
            <li>Top player</li>
          </Link>
          <Link to="/crud">
            <li>Crud</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
