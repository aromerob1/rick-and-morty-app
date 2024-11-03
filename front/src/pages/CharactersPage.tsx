import { Outlet } from 'react-router-dom';

export default function CharactersPage() {

    return (
        <div>
            <h1>Characters</h1>
            <Outlet />
        </div>
        
    )
}