import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header, Footer } from './components';

function App() {
  return (
    <div className='dark:bg-slate-800'>
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
