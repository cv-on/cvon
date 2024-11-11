import { ParagraphType } from "./common";

export type CompanyType = {
  name: string;
  fromDate: Date;
  toDate: Date | "present";
  position: string;
  projects: string[];
  techStacks: ParagraphType[];
  responsibilities: ParagraphType[];
  achievements: ParagraphType[];
};
