export interface ICompare {
  target: string;
  hashTarget: string;
}

export abstract class IHashService {
  hash: (target: string) => Promise<string>;
  compare: (data: ICompare) => Promise<boolean>;
}
