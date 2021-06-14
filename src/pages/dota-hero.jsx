import axios from "axios";
import { useEffect, useState } from "react";
import { DotaCard } from "../components/dota-card";

function DotaHeroPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.opendota.com/api/heroes").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  console.log("ggg", data);
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((Value) => {
          return (
            <DotaCard
              hero={Value.localized_name}
              type={Value.attack_type}
              leg={Value.legs}
            />
          );
        })}
      </div>
    </div>
  );
}
export default DotaHeroPage;
