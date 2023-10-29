import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Suggestions from './components/suggestions/Suggestions';

function App() {
  return (
    <div className="h-screen max-w-6xl mx-auto pt-6 px-4 flex flex-col">
      <Navbar />
      <div>
        <Sidebar />
        <Feed />
        <Suggestions />
      </div>
    </div>
  );
}

export default App;
