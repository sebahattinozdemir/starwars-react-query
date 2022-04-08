import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
};

function People() {
    const { data, status } = useQuery('people', fetchPeople);

    console.log(data);

    return (
        <div>
            <h1>People</h1>
            {status === 'loading' && <div>Loading data ...</div>}
            {status === 'error' && <div>Error while fetching</div>}
            {status === 'success' && (
                <div>
                    {data?.results.map((person) => (
                        <Person key={person.url} person={person} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default People;
