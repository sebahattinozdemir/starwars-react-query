import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
    const res = await fetch(`http://swapi.dev/api/planets/`);
    return res.json();
};

function Planets() {
    const { data, status } = useQuery('planets', fetchPlanets);

    return (
        <div>
            <h1>Planets</h1>

            {status === 'loading' && <div>Loading data ...</div>}
            {status === 'error' && <div>Error while fetching</div>}
            {status === 'success' && (
                <div>
                    {data?.results.map((planet) => (
                        <Planet key={planet.url} planet={planet} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Planets;
