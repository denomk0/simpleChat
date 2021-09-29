import React,{ useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

export const Chat: React.FC = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [status, setStatus] = useState('');
  const [value, setValue] = useState('');

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setWs(new WebSocket('ws://localhost:3333'));
  }, []);

  useEffect(() => {
    if (ws) {
      ws.onopen = () => setStatus('online');
      ws.onclose = () => setStatus('offline');
      ws.onmessage = (response) => {
        setMessages((prev) => [...prev, response.data]);
      };
    }
  }, [ws]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      ws.send(value);
      setValue('');
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <div style={{
        color: status === 'online' ? 'green' : 'red',
      }}
      >
        {`Status: ${status}`}
      </div>
      <div>{ messages.map((message) => (<div>{message}</div>)) }</div>
      <input type="text" onChange={handleChange} onKeyUp={handleKeyUp} value={value} />
    </div>
  );
};
