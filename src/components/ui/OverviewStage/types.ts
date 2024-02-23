export type OverviewStageProps = {
  title: string;
  desc: string;
  keySolutions?: KeySolution[];
};

type KeySolution = {
  label: string;
  summary: string;
};
