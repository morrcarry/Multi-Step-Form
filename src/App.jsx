import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import MultiStepForm from './pages/MultiStepForm';

function App() {
  // function HomePage() {
  //   return <div>This is home page</div>;
  // }
  // function AboutPage() {
  //   return <div>This is About page</div>;
  // }
  return (
    <div>
      {/* <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes> */}

      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </div>
  );
}

export default App;
