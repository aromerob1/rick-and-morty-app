import { useState } from "react";
import CharacterListItem from "./CharacterListItem";
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { SidebarProps } from "../types/sidebar";


export default function Sidebar({ characters }: SidebarProps) {
    const [starredCharacters, setStarredCharacters] = useState([]);

    return (
        <aside className='h-screen'>
            <nav className="h-full flex flex-col bg-gray-50 border-r shadow-sm px-8">
                <div className="pb-2 pt-4 flex text-xl">
                    <h2>Rick and Morty List</h2>
                </div>
                <div className="flex pb-12 relative items-center focus-within:text-gray-400">
                    <MagnifyingGlassIcon className="absolute w-5 h-5 pointer-events-none ml-2 text-gray-400 "></MagnifyingGlassIcon>
                    <AdjustmentsVerticalIcon className="absolute w-5 h-5 right-0 mr-2 text-purple-500 cursor-pointer"></AdjustmentsVerticalIcon>
                    <input className="bg-gray-200 rounded-md pl-8 pr-16 py-2" placeholder="Search or filter results">
                    </input>
                </div>
                <div>
                    <h4 className="text-xs pl-2">STARRED CHARACTERS (2)</h4>
                    <ul className="flex-1">
                        <li className="relative flex items-center py-2 my-1 rounded-md cursor-pointer transition-colors">
                            <CharacterListItem></CharacterListItem>
                        </li>
                    </ul>
                    <h4 className="text-xs pl-2">CHARACTERS ({characters.length})</h4>
                    {characters.map(character => {
                        return (
                            <ul className="flex-1" key={character.id}>
                                <li className="relative flex items-center py-2 my-1 rounded-md cursor-pointer transition-colors">
                                    <CharacterListItem character={character}></CharacterListItem>
                                </li>
                            </ul>
                        )
                    })}
                    
                </div>
            </nav>
        </aside>
    )
}