import './Sidebar.css';
import { useForm } from '../context/FormContext';
import sidebarBg from '../assets/bg-sidebar-desktop.svg';
console.log('sidebarBg', sidebarBg);
export default function Sidebar() {
  const { state } = useForm();

  return (
    <div className='sidebar'>
      <img src={sidebarBg} alt='sidebar' className='sidebar-bg' />
      <div className={`step ${state.step === 1 ? 'active' : ''}`}>
        <span>1</span>
        <div className='step-text'>
          <p>STEP 1</p>
          <h4>YOUR INFO</h4>
        </div>
      </div>

      <div className={`step ${state.step === 2 ? 'active' : ''}`}>
        <span>2</span>
        <div className='step-text'>
          <p>STEP 2</p>
          <h4>SELECT PLAN</h4>
        </div>
      </div>

      <div className={`step ${state.step === 3 ? 'active' : ''}`}>
        <span>3</span>
        <div className='step-text'>
          <p>STEP 3</p>
          <h4>ADD-ONS</h4>
        </div>
      </div>

      <div className={`step ${state.step === 4 ? 'active' : ''}`}>
        <span>4</span>
        <div className='step-text'>
          <p>STEP 4</p>
          <h4>SUMMARY</h4>
        </div>
      </div>
    </div>
  );
}
