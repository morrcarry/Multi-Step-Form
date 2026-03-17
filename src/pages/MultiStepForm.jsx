import './MultiStepForm.css';
import { useForm } from '../context/FormContext';
import Sidebar from '../components/Sidebar';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';

// later we will add Step2, Step3, Step4

export default function MultiStepForm() {
  const { state } = useForm();

  return (
    <div className='main-container'>
      <div className='form-wrapper'>
        <Sidebar />

        <div className='content'>
          {state.step === 1 && <Step1 />}
          {state.step === 2 && <Step2 />}
        </div>
      </div>
    </div>
  );
}
