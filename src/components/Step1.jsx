import { useState } from 'react';
import { useForm } from '../context/FormContext';

export default function Step1() {
  const { state, dispatch } = useForm();

  // Local errors
  const [errors, setErrors] = useState({});

  function validateAndNext() {
    let newErrors = {};

    if (!state.name.trim()) newErrors.name = 'This field is required';
    if (!state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Enter a valid email';
    if (!state.phone.match(/^[0-9]{10}$/))
      newErrors.phone = 'Enter a valid 10-digit number';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: 'NEXT_STEP' });
    }
  }

  return (
    <div className='form-step'>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      {/* Name */}
      <label>Name</label>
      <input
        type='text'
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_FIELD',
            field: 'name',
            value: e.target.value,
          })
        }
        className={errors.name ? 'error-input' : ''}
      />
      {errors.name && <span className='error-text'>{errors.name}</span>}

      {/* Email */}
      <label>Email Address</label>
      <input
        type='text'
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_FIELD',
            field: 'email',
            value: e.target.value,
          })
        }
        className={errors.email ? 'error-input' : ''}
      />
      {errors.email && <span className='error-text'>{errors.email}</span>}

      {/* Phone */}
      <label>Phone Number</label>
      <input
        type='text'
        placeholder='e.g. +1 234 567 890'
        value={state.phone}
        onChange={(e) =>
          dispatch({
            type: 'UPDATE_FIELD',
            field: 'phone',
            value: e.target.value,
          })
        }
        className={errors.phone ? 'error-input' : ''}
      />
      {errors.phone && <span className='error-text'>{errors.phone}</span>}

      <button className='next-btn' onClick={validateAndNext}>
        Next Step
      </button>
    </div>
  );
}
