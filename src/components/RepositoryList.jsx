import { useState, useEffect } from 'react';
import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem";

export function RespositoryList() {


    const  [repositories, setrepositories] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/orgs/Rocketseat/repos')
        .then(response => response.json())
        .then(data => setrepositories(data))
    }, [repositories])


    return (
        
        <section className="repository-list">
            
            <h1>Lista de repositorios</h1>

        <ul>
        {repositories.map(repository => {
        return <RepositoryItem key={repository.name} repository={repository}/>
            })}


        </ul>
        </section>
    );
}