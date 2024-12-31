import { useOutletContext, useParams } from "react-router"
import { Character } from "../types/characters";


export default function CharacterDetailPage() {
    const { characterId } = useParams();
    const { characters } = useOutletContext<{ characters: Character[] }>();
    const character = characters.find(character => character.id === Number(characterId));

    return (
        <div className="mt-4 ml-24">
            <div className="relative">
                <img className="w-24 h-24 rounded-full" src={character?.image} alt="Image"/>
                {/* Heart icon */}
            </div>
            <h1 className="text-xl font-bold mb-6">{character?.name}</h1>
            <ul>
                <li className="border-b py-2">
                    <h4 className="font-bold">Specie</h4>
                    <h4 className="text-gray-600">{character?.species}</h4>
                </li>
                <li className="border-b py-2">
                    <h4 className="font-bold">Status</h4>
                    <h4 className="text-gray-600">{character?.status}</h4>
                </li>
                <li>
                    <h4 className="font-bold py-2">Occupation</h4>
                    <h4 className="text-gray-600">{character?.type}</h4>
                </li>
            </ul>
        </div>
    )
}