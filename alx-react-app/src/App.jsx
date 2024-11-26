import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer.jsx'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx';
import UserProfile from './components/UserProfile';

function App() {
  return (
      <>
      <div>hello</div>
        <Header />
        <WelcomeMessage />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
      </>
  );
}

export default App;
