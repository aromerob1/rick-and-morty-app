export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    image: string;
}

export interface CharacterListItemProps {
    character: Character;
}