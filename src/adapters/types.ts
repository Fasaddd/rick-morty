//#region Character
export type Character = {
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
  origin: CharacterOrigin;
  location: CharacterLocation;
};
type CharacterOrigin = {
  name: string;
  url: string;
}
type CharacterLocation = CharacterOrigin;

//#endregion Character