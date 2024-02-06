export type Props = {
  title: string;
  text: string;
  idx: number;
  cardName: string;
};

export enum CardNames {
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  RESULT = 'result',
}
