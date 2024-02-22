export type OverviewStageProps = {
  title: string;
  desc: string;
  keySolutions?: KeySolution[];
  containerStyle?: string;
};

type KeySolution = {
  label: string;
  summary: string;
};
