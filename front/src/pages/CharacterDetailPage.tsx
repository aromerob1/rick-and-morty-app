

export default function CharacterDetailPage() {

    return (
        <div className="mt-4 ml-24">
            <div className="relative">
                <img className="w-24 h-24 rounded-full" alt="Image"/>
                {/* Heart icon */}
            </div>
            <h1 className="text-xl font-bold mb-6">Abadango Cluster Princess</h1>
            <ul>
                <li className="border-b py-2">
                    <h4 className="font-bold">Specie</h4>
                    <h4 className="text-gray-600">Alien</h4>
                </li>
                <li className="border-b py-2">
                    <h4 className="font-bold">Status</h4>
                    <h4 className="text-gray-600">Alive</h4>
                </li>
                <li>
                    <h4 className="font-bold py-2">Occupation</h4>
                    <h4 className="text-gray-600">Princess</h4>
                </li>
            </ul>
        </div>
    )
}