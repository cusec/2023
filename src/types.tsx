import { ReactElement } from "react";

export enum Stagger {
  Top = "top",
  Bottom = "bottom",
}

export type FAQType = {
  id: number;
  question: string;
  answer: ReactElement | string;
};

export enum UniYear {
  First = "1st",
  Second = "2nd",
  Third = "3rd",
  Forth = "4th",
  Fifth = "5th",
}

export type CusecExec = {
  name: string;
  uni: string;
  year: UniYear;
  major: string;
  quote: string;
  fact: string;
};
