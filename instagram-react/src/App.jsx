import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { Sidebar } from './components/sidebar';
import { MessageUtility } from './components/MessageUtility';
import { Container } from './components/Container';
import { Messages } from './components/Messages';
function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <MessageUtility />
      <Routes>
        <Route path = '/' element={<Container />} />
        <Route path = '/messages' element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
