import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem";

export function RespositoryList() {

    const repository = {
        name: "MineGrep",
        description: "Grep rescrito em Rust",
        link: "https://github.com/kleysoncastro/minegrep"
    }

    return (
        
        <section className="repository-list">
            
            <h1>Lista de repositorios</h1>

        <ul>
           
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>



        </ul>
        </section>
    );
}