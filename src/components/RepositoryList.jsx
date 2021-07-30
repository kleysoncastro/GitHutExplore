import { RepositoryItem } from "./RepositoryItem";

export function RespositoryList() {

    const repository = {
        name: "MineGrep",
        description: "Grep rescrito em Rust",
        link: "https://github.com/kleysoncastro/minegrep"
    }

    return (
        
        <section className="repository-list">
            
            <p>Lista de repositorios</p>

        <ul>
           
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>




        </ul>
        </section>
    );
}