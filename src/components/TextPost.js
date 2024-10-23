import { ListGroup, Button } from 'react-bootstrap';

function TextPost({ post, excluirPost }) {
  return (
    <ListGroup.Item>
      <h5>{post.titulo}</h5>
      <p><strong>Autor:</strong> {post.nome}</p> {/* Corrigido para 'nome' */}
      <p>{post.assunto}</p> {/* Adicionando o texto do post */}
      <Button variant="danger" onClick={() => excluirPost(post.id)}>Excluir Post</Button>
    </ListGroup.Item>
  );
}

export default TextPost;
