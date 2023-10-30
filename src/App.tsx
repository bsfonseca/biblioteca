import { useState } from "react";

import "./App.css";
import { Morcego } from "./components/Morcego";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    dataCadastro: Date;
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
            dataCadastro: new Date(2011, 2, 10),
            genero: "Drama",
            descricao: "Livro de drama comovente com histórias horripilantes",
        },
        {
            id: 2,
            titulo: "Eu não sei quem é você",
            autor: "Penny Hancock",
            anoPublicacao: 2010,
            dataCadastro: new Date(2012, 6, 11),
            genero: "Drama",
            descricao: "Duas amigas, uma acusação e incontáveis consequências",
        },
    ]);

    const [id, setId] = useState(-1);

    const [titulo, setTitulo] = useState("");

    const [autor, setAutor] = useState("");

    const [anoPublicacao, setAnoPublicacao] = useState<number>(2023);

    const [dataCadastro, setDataCadastro] = useState("");

    const [genero, setGenero] = useState("");

    const [descricao, setDescricao] = useState("");

    const lerNomeBotao = () => {
        if (id === -1) {
            return "Adicionar";
        }

        return "Salvar";
    };

    const dataAtual = new Date();

    function adicionarLivro(event: any) {
        event.preventDefault();
        if (!titulo || !autor || !anoPublicacao || !genero || !descricao) {
            alert("Preencha todos os campos");
            return;
        }

        if (anoPublicacao > dataAtual.getFullYear()) {
            alert("O ano de publicação informado é maior que o atual");
            return;
        }

        if (id >= 0) {
            salvarLivro(id, titulo, autor, anoPublicacao, genero, descricao);
            return;
        }
        if (!dataCadastro) {
            alert("A data de cadastro não foi preechida");
            return;
        }
        const novoLivro = {
            id: livros.length + 1,
            titulo,
            autor,
            anoPublicacao,
            dataCadastro: new Date(dataCadastro),
            genero,
            descricao,
        };

        setLivros([...livros, novoLivro]);

        setId(id);
        setTitulo("");
        setAutor("");
        setAnoPublicacao(dataAtual.getFullYear());
        setDataCadastro(Date);
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

        setId(id);
        setTitulo(livro.titulo);
        setAutor(livro.autor);
        setAnoPublicacao(livro.anoPublicacao);
        setGenero(livro.genero);
        setDescricao(livro.descricao);
    }

    function salvarLivro(
        id: number,
        titulo: string,
        autor: string,
        anoPublicacao: number,
        genero: string,
        descricao: string
    ) {
        const indice = livros.findIndex((item) => item.id == id);

        if (indice < 0) {
            alert("Livro não encontrado");
            return;
        }

        livros[indice].titulo = titulo;
        livros[indice].autor = autor;
        livros[indice].anoPublicacao = anoPublicacao;
        livros[indice].genero = genero;
        livros[indice].descricao = descricao;

        setLivros(livros);

        setTitulo("");
        setAutor("");
        setAnoPublicacao(dataAtual.getFullYear());
        setGenero("");
        setDescricao("");
    }

    return (
        <div>
            <Morcego />
            <h1 className="titulo">Biblioteca</h1>

            <table id="tabs-biblioteca">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ano de Publicação</th>
                        <th>Data de Cadastro</th>
                        <th>Gênero</th>
                        <th>Descrição</th>
                    </tr>
                </thead>

                <tbody>
                    {livros.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.titulo}</td>
                                <td>{item.autor}</td>
                                <td>{item.anoPublicacao}</td>
                                <td>{item.dataCadastro.toLocaleDateString("pt-BR")}</td>
                                <td>{item.genero}</td>
                                <td>{item.descricao}</td>
                                <td>
                                    <button onClick={() => excluirLivro(item.id)}>Excluir</button>
                                </td>
                                <td>
                                    <button onClick={() => atualizarLivro(item.id)}>Atualizar</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <form id="form-biblioteca" onSubmit={adicionarLivro}>
                <h2 className="titulo">Adicione um novo livro</h2>
                <div>
                    <label>Título </label>
                    <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label>Autor </label>
                    <input type="text" name="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                </div>

                {id === -1 && (
                    <div>
                        <label>Data de Cadastro </label>
                        <input
                            type="date"
                            name="data"
                            value={dataCadastro}
                            onChange={(e) => setDataCadastro(e.target.value)}
                        />
                    </div>
                )}

                <div>
                    <label>Gênero </label>
                    <input type="text" name="genero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                </div>
                <div>
                    <label>Descrição </label>
                    <textarea name="genero" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div>
                    <label>Ano de Publicação </label>
                    <input
                        type="number"
                        name="data"
                        value={anoPublicacao}
                        onChange={(e) => setAnoPublicacao(Number(e.target.value))}
                    />
                </div>
                <button id="form-submit">{lerNomeBotao()}</button>
            </form>
        </div>
    );
}

export default App;
