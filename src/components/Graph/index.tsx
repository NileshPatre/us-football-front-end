import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { LastFiveGames } from "../../types/globalTypes";
interface Props {
  lastFiveGames: LastFiveGames[];
}
const LineGraph: React.FC<Props> = ({ lastFiveGames }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={lastFiveGames}
        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="gameNo"
          label={{ value: "Game number", position: "bottom" }}
        />
        <YAxis label={{ value: "Score", angle: -90, position: "insideLeft" }} />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const game = payload[0].payload;
              return (
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #ccc",
                    padding: "10px"
                  }}
                >
                  <p>{`${game.gameNoLabel}`}</p>
                  <p>{`Score - ${game.stats}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="statValue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <text
          x="50%"
          y="10%"
          dy={-10}
          textAnchor="middle"
          fontSize="16px"
          fontWeight="bold"
        >
          Last Five Games
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
