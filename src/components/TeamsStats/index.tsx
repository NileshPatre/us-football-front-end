import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchData, parseTeamsDetails } from "./service";
import Header from "../Header";
import OverviewCard from "../OverviewCard";
import PlayerCard from "../PlayerCard";
import { ParsedData, TeamDetails } from "../../types/globalTypes";
const TeamsStats = () => {
  const { data, isLoading, isError } = useQuery<TeamDetails[], Error>(
    "teamDetails",
    () =>
      fetchData({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/teams/getTeamsDetails`
      })
  );
  const parsedData: ParsedData | null = useMemo(() => {
    if (data) {
      return parseTeamsDetails(data);
    } else {
      return null;
    }
  }, [data]);

  return (
    <>
      <Header />
      {parsedData ? (
        <>
          <OverviewCard cardData={parsedData.scoreOverView} />
          <PlayerCard cardData={parsedData.passingDetails} />
          <PlayerCard cardData={parsedData.rushingDetails} />
          <PlayerCard cardData={parsedData.receivingDetails} />
          <PlayerCard cardData={parsedData.touchDownsDetails} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TeamsStats;
