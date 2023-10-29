import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Suggestions from './components/suggestions/Suggestions';

function App() {
  return (
    <div className="h-screen max-w-6xl mx-auto pt-6 px-4 flex justify-between overflow-hidden">
      <Sidebar />
      <Feed />
      <Suggestions />
    </div>
  );
}

export default App;
