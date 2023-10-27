import { useState } from "react";

import "./App.css";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    dataCadastro: number;
    genero: string;
    descricao: string;
}

function App() {
    const [livros, setLivros] = useState<Livro[]>([
        {
            id: 1,
            titulo: "Admirável mundo novo",
            autor: "Aldous Huxley",
            anoPublicacao: 2010,
            dataCadastro: 2011,
            genero: "drama",
            descricao: "Livro de drama comovente com histórias horripilantes",
        },
        {
            id: 2,
            titulo: "Eu não sei quem é você",
            autor: "Penny Hancock",
            anoPublicacao: 2015,
            dataCadastro: 2015,
            genero: "drama",
            descricao: "Duas amigas, uma acusação e incontáveis consequências",
        },
    ]);

    const [id, setId] = useState("");

    const [titulo, setTitulo] = useState("");

    const [autor, setAutor] = useState("");

    const [anoPublicacao, setAnoPublicao] = useState("");

    const [dataCadastro, setDataCadastro] = useState("");

    const [genero, setGenero] = useState("");

    const [descricao, setDescricao] = useState("");

    return (
        <div>
            <h1>Biblioteca</h1>
            <hr />
            <table>
                <tr>
                    <th>Título:</th>
                    <th>Autor:</th>
                    <th>Ano de Publicação:</th>
                    <th>Data de Cadastro:</th>
                    <th>Gênero:</th>
                    <th>Descrição:</th>
                </tr>
            </table>
        </div>
    );
}

export default App;
