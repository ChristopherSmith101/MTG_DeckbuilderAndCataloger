export interface ScryfallCard {
  object: 'card';
  name: string;
  mana_cost?: string;
  type_line: string;
  image_uris?: {
    normal: string;
  };
  card_faces?: {
	name: string;
	image_uris?: {
		normal: string;
	};
  }[];
}