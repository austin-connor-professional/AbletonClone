import './App.css';
import CallToAction from './components/call-to-action/callToAction';
import MainBody from './components/mainBody/mainBody';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <CallToAction />
      <MainBody/>
    </div>
  );
}

export default App;
