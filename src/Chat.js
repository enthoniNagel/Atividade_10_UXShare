import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function Chat() {
  const [mensagem, setMensagem] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      setChatMessages([...chatMessages, mensagem]);
      setMensagem(''); 
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <Form>
        <Form.Group controlId="formMensagem">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </Form.Group>
        <Button onClick={enviarMensagem}>Enviar</Button>
      </Form>

      <h3>Mensagens</h3>
      <ListGroup>
        {chatMessages.map((msg, index) => (
          <ListGroup.Item key={index}>{msg}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Chat;
