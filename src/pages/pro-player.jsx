import { Card, Select, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ProPlayerPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectPlayer, setSelectPlayer] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.opendota.com/api/proPlayers")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  const filterTeam = (team) => {
    const datas = data.filter((data) => data.team_name === team);
    console.log(datas);
    setSelectPlayer(datas);
    return datas;
  };
  const teamArr = ["OG", "Nigma", "Team Secret", "Team Liquid"];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <p>loading!</p> : null}
        <Select
          disabled={loading}
          onSelect={(value) => {
            console.log(value);
            filterTeam(value);
          }}
        >
          {teamArr.map((data, key) => {
            return (
              <Select.Option value={data} key={key}>
                {data}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {selectPlayer.map((data) => {
          return (
            <Card
              title={data.name}
              extra={<a href={data.profileurl}>More</a>}
              style={{ width: 300, margin: 20 }}
            >
              <img src={data.avatarmedium} />
              <Tag style={{ marginLeft: 20 }} color="blue">
                {data.country_code}
              </Tag>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default ProPlayerPage;
