import React from 'react';
import { render } from 'react-dom';
import './babel';
import { Chat } from './client/components/chat/Chat';

const App = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

render(<App/>, document.getElementById('app'));
