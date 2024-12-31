import { HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Character } from "../types/characters";

export default function CharacterListItem( { character, isSelected }: { character: Character, isSelected: boolean }) {
    //Heart icon state
    const [isStarred, setIsStarred] = useState(false);
    const toggleStarred = () => setIsStarred(!isStarred);

    //Component state
    const [isActive, setIsActive] = useState(false);
    useEffect(() => setIsActive(isSelected), [isSelected]);
    console.log(character);

    return (
        <div className={`flex border-y p-4 ${isActive ? 'bg-purple-100': ''} hover:bg-purple-100 items-center justify-between w-full rounded-xl`}>
            <div className="flex">
                <div className="flex mr-4 items-center">
                    <img src={character?.image} className="w-9 h-9 rounded-full" />
                </div>
                <div className="">
                    <h2 className="font-medium">{character?.name}</h2>
                    <h4 className="">{character?.species}</h4>
                </div>
            </div>
            <div className={`ml-auto rounded-full p-1 ${isStarred && isActive ? 'bg-white': ''}`}>
                <HeartIcon className={`w-5 h-5 ${isStarred ? 'fill-green-600 text-green-600': 'fill-none'}`} onClick={toggleStarred}></HeartIcon>
            </div>
        </div>
    );
}