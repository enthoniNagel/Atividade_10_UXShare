import React, { useState, useEffect } from "react";
import { db } from './firebase/firebaseConnection'; 
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { Container, Form, Button, Card } from "react-bootstrap";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TextPost from './TextPost'; 

function App() {
  const [nome, setNome] = useState('');
  const [titulo, setTitulo] = useState('');
  const [assunto, setAssunto] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    buscarPosts();
  }, []);

  async function adicionarPost() {
    const novoPost = { nome, titulo, assunto };
    
    try {
      await addDoc(collection(db, "posts"), novoPost);
      setNome('');
      setTitulo('');
      setAssunto('');
      buscarPosts();
    } catch (error) {
      console.error("Erro ao adicionar post: ", error);
    }
  }

  async function buscarPosts() {
    try {
      const postsSnapshot = await getDocs(collection(db, "posts"));
      const lista = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(lista);
    } catch (error) {
      console.error("Erro ao buscar posts: ", error);
    }
  }

  async function excluirPost(id) {
    try {
      await deleteDoc(doc(db, "posts", id));
      buscarPosts();
    } catch (error) {
      console.error("Erro ao excluir post: ", error);
    }
  }

  return (
    <Container>
      <h1>Rede Social UXShare</h1>
      <Form>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formTitulo">
          <Form.Label>Título do Texto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formAssunto">
          <Form.Label>Texto</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Digite seu texto sobre o livro"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={adicionarPost}>Adicionar Post</Button>
      </Form>

      <h2>Posts Recentes</h2>
      {posts.map((post) => (
        <TextPost key={post.id} post={post} excluirPost={excluirPost} /> 
      ))}
    </Container>
  );
}

export default App;
