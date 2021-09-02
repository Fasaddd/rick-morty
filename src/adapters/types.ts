//#region Character
export type CharacterType = {
  id: number;
  created: string;
  image: string;
  status: string;
  gender: string;
  name: string;
  species: string;
  type: string;
  url: string;
  episode: string[];
  origin: CharacterOriginType;
  location: CharacterLocationType;
};
export type CharacterOriginType = {
  name: string;
  url: string;
}
export type CharacterLocationType = CharacterOriginType;

export enum CharacterDisplayedDetails {
  SPECIES = 'species',
  TYPE = 'type',
  LOCATION = 'location',
  ORIGIN = 'origin',
  STATUS = 'status'
}
export enum CharacterUnknownDetails {
  UNKNOWN = 'unknown',
  EMPTY = ''
}
export enum CharacterStatuses {
  ALIVE = 'Alive',
  DEAD = 'Dead'
}

//#endregion Character