import axios from "axios";
import { APIParameters } from "./types";
import {
  TeamDetails,
  Header,
  ScoreOverview,
  PlayerCardStats,
  TeamsHeaders,
  ParsedData,
  PlayerStats,
  CompareGroup,
  Score,
  CardDetails,
  CardGroup,
  StatsList
} from "../../types/globalTypes";
export async function fetchData({
  method,
  url
}: APIParameters): Promise<TeamDetails[]> {
  const response = await axios({
    url,
    method
  });
  return response.data;
}
export function parseTeamsDetails(
  teamDetails: TeamDetails[]
): ParsedData | null {
  if (!teamDetails?.length) {
    return null;
  }
  const headerDetails: Header = { header: "Football", teamsHeader: [] };
  const scoreOverView: ScoreOverview = {
    header: "Score Overview",
    teamsHeader: [],
    statsList: []
  };
  const passingDetails: PlayerCardStats = {
    header: "Passing",
    teamsHeader: [],
    compareGroup: []
  };
  const rushingDetails: PlayerCardStats = {
    header: "Rushing",
    teamsHeader: [],
    compareGroup: []
  };
  const receivingDetails: PlayerCardStats = {
    header: "Receiving",
    teamsHeader: [],
    compareGroup: []
  };
  const touchDownsDetails: PlayerCardStats = {
    header: "Touchdowns",
    teamsHeader: [],
    compareGroup: []
  };
  teamDetails.forEach((team: TeamDetails, teamIndex: number) => {
    const teamsHeader: TeamsHeaders = { teamName: team.teamName };
    headerDetails.teamsHeader.push(teamsHeader);
    scoreOverView.teamsHeader.push({
      teamName: team.teamName,
      score: team.totalScore
    });
    scoreOverView.statsList = [
      ...parseOverallScoreData({
        overallScore: team.overallScore,
        dataKey: `team${teamIndex + 1}`,
        statsList: scoreOverView.statsList
      })
    ];
    passingDetails.teamsHeader.push(teamsHeader);
    passingDetails.compareGroup = parsePlayerStats({
      players: team.passing,
      compareGroup: passingDetails.compareGroup
    });
    rushingDetails.teamsHeader.push(teamsHeader);
    rushingDetails.compareGroup = parsePlayerStats({
      players: team.rushing,
      compareGroup: rushingDetails.compareGroup
    });
    receivingDetails.teamsHeader.push(teamsHeader);
    receivingDetails.compareGroup = parsePlayerStats({
      players: team.receiving,
      compareGroup: receivingDetails.compareGroup
    });
    touchDownsDetails.teamsHeader.push(teamsHeader);
    touchDownsDetails.compareGroup = parsePlayerStats({
      players: team.touchDowns,
      compareGroup: touchDownsDetails.compareGroup
    });
  });
  return {
    passingDetails,
    rushingDetails,
    receivingDetails,
    scoreOverView,
    headerDetails,
    touchDownsDetails
  };
}
function parsePlayerStats({
  players,
  compareGroup
}: {
  players: PlayerStats[];
  compareGroup: CompareGroup[];
}): CompareGroup[] {
  const tempCompareGroup: CompareGroup[] = [...compareGroup];
  players.forEach((player: PlayerStats, playerIndex: number) => {
    const cardGroup: CardDetails[] = player.score.map((score: Score) => {
      return { statName: score.label, value: score.score };
    });
    const parsedData: CardGroup = {
      title: player.player,
      cardDetails: cardGroup
    };
    if (tempCompareGroup[playerIndex]?.cardGroup.length) {
      tempCompareGroup[playerIndex].cardGroup.push(parsedData);
    } else {
      tempCompareGroup[playerIndex] = { ...{ cardGroup: [{ ...parsedData }] } };
    }
  });
  return tempCompareGroup;
}
function parseOverallScoreData({
  overallScore,
  dataKey,
  statsList
}: {
  overallScore: Score[];
  dataKey: string;
  statsList: StatsList[];
}): StatsList[] {
  const tempStatsList: StatsList[] = [...(statsList || [])];
  overallScore.forEach((score: Score) => {
    const statFound: StatsList | undefined = tempStatsList.find(
      (statVal) => statVal.statId === score.value
    );
    if (statFound) {
      statFound[dataKey] = score.score;
    } else {
      tempStatsList.push({
        [dataKey]: score.score,
        statName: score.label,
        statId: score.value
      });
    }
  });
  return tempStatsList;
}
