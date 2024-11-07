import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;