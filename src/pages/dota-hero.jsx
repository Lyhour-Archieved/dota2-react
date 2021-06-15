import axios from "axios";
import { useEffect, useState } from "react";
import { DotaCard } from "../components/dota-card";
import { LoadingOutlined } from "@ant-design/icons";
function DotaHeroPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.opendota.com/api/heroes")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log("ggg", data);
  return (
    <div>
      {loading === true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <LoadingOutlined size={200} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
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
      )}
    </div>
  );
}
export default DotaHeroPage;
