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

    const [anoPublicacao, setAnoPublicacao] = useState(Number);

    const [dataCadastro, setDataCadastro] = useState(Number);

    const [genero, setGenero] = useState("");

    const [descricao, setDescricao] = useState("");

    function adicionarLivro(event: any) {
        event.preventDefault();
        if (!id || !titulo || !autor || !anoPublicacao || !dataCadastro || !genero || !descricao) {
            alert("Preencha todos os campos");
            return;
        }

        const novoLivro = {
            id: livros.length + 1,
            titulo,
            autor,
            anoPublicacao,
            dataCadastro,
            genero,
            descricao,
        };

        setLivros([...livros, novoLivro]);

        setId(id);
        setTitulo("");
        setAutor("");
        setAnoPublicacao(Number);
        setDataCadastro(Number);
        setGenero("");
        setDescricao("");
    }

    function excluirLivro(id: number) {
        const livrosAtualizados = livros.filter((item) => item.id != id);

        setLivros(livrosAtualizados);
    }
    function atualizarLivro(id: number) {
        const livro = livros.find((item) => item.id == id);
        if (!livro) {
            alert("Livro inválido");
            return;
        }

        //setId(id);
        setTitulo(livro.titulo);
        setAutor(livro.autor);
        setAnoPublicacao(livro.anoPublicacao);
        // setDataCadastro(livro.dataCadastro);
        setGenero(livro.genero);
        setDescricao(livro.descricao);
    }

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
                {livros.map((item) => {
                    return (
                        <tr>
                            <td>{item.titulo}</td>
                            <td>{item.autor}</td>
                            <td>{item.anoPublicacao}</td>
                            <td>{item.dataCadastro}</td>
                            <td>{item.genero}</td>
                            <td>{item.descricao}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default App;
