import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { useEffect, useState } from 'react';
import { Character } from '../types/characters';

export default function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(response => {
            setCharacters(response.results)
            console.log(response.results)
            setLoading(false)
        })
    }, [])

    return (
        <>
            {loading ? 
            (
                <div className="flex justify-center items-center h-screen">
                    <svg className="animate-spin h-10 w-10 mr-3 bg-purple-500" viewBox="0 0 24 24"/>
                </div>
            )
            : (
                <div className='flex'>
                    <Sidebar characters={characters} />
                    <div className=''>
                        <Outlet />
                    </div>
                </div>
            )}
        </>
        
    )
}