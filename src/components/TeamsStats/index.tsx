import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchData, parseTeamsDetails } from "./service";
import Header from "../Header";
import OverviewCard from "../OverviewCard";
import PlayerCard from "../PlayerCard";
import { ParsedData, TeamDetails } from "../../types/globalTypes";
import SubscriptionComponent from "../Subscription";
import ErrorComponent from "../Error";
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
      {parsedData ? (
        <>
          <Header headerData={parsedData?.headerDetails} />
          <OverviewCard cardData={parsedData.scoreOverView} />
          <PlayerCard cardData={parsedData.passingDetails} showGraph={true} />
          <PlayerCard cardData={parsedData.rushingDetails} showGraph={true} />
          <PlayerCard cardData={parsedData.receivingDetails} showGraph={true} />
          <PlayerCard
            cardData={parsedData.touchDownsDetails}
            showGraph={true}
          />
          <SubscriptionComponent />
        </>
      ) : isLoading ? (
        <ErrorComponent message={"Loading..."} />
      ) : isError ? (
        <ErrorComponent message={"Error"} />
      ) : (
        ""
      )}
    </>
  );
};

export default TeamsStats;
