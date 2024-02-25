export type Score = {
  label: string;
  value: string;
  score: string | number;
};
export type LastFiveGames = {
  gameNo: number;
  stats: string | number;
};
export type PlayerStats = {
  player: string;
  score: Score[];
  lastFiveGames: LastFiveGames[];
};
export type TeamDetails = {
  teamName: string;
  totalScore: number;
  overallScore: Score[];
  passing: PlayerStats[];
  rushing: PlayerStats[];
  receiving: PlayerStats[];
  touchDowns: PlayerStats[];
};
export type TeamsHeaders = {
  logo?: string;
  teamName: string;
};

export type Header = {
  header: string;
  teamsHeader: TeamsHeaders[];
};
export type StatsList = {
  [key: string]: number | string;
  statName: string;
  statId: string;
};

export type ScoreOverview = {
  header: string;
  teamsHeader: (TeamsHeaders & { score: string | number })[];
  statsList: StatsList[];
};
export type CardGroup = {
  title: string;
  cardDetails: CardDetails[];
  lastFiveGames: LastFiveGamesForChart[];
};
export type CompareGroup = {
  cardGroup: CardGroup[];
};
export type PlayerCardStats = {
  header: string;
  teamsHeader: TeamsHeaders[];
  compareGroup: CompareGroup[];
};
export type CardDetails = {
  statName: string;
  value: string | number;
};
export type ParsedData = {
  passingDetails: PlayerCardStats;
  rushingDetails: PlayerCardStats;
  receivingDetails: PlayerCardStats;
  scoreOverView: ScoreOverview;
  headerDetails: Header;
  touchDownsDetails: PlayerCardStats;
};
export type ScoreOverviewHeader = TeamsHeaders & { score: string | number };
export type LastFiveGamesForChart = {
  gameNo: number;
  gameNoLabel: string;
  stats: string | number;
  statValue: number;
};
