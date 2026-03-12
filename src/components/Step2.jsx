import { useState } from 'react';
import { useForm } from '../context/FormContext';

export default function Step2() {
  const { state, dispatch } = useForm();
  const plans = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  };

  console.log('state', state);

  function selectPlan(planName, basePrice) {
    const price = state.billing == 'monthly' ? basePrice : basePrice * 10;
    dispatch({
      type: 'UPDATE_FIELD',
      field: 'plan',
      value: planName,
    });
    dispatch({
      type: 'UPDATE_FIELD',
      field: 'price',
      value: price,
    });
  }

  return (
    <div className='form-step-2'>
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className='plans'>
        <div
          className='plan-card'
          onClick={() => selectPlan('arcade', plans.arcade)}
        >
          <h3>Arcade</h3>
          <p>
            {state.billing == 'monthly'
              ? `$${plans.arcade}/mo`
              : `$${plans.arcade * 10}/yr`}
          </p>
          {state.billing == 'yearly' && <span>2 months free</span>}
        </div>
        <div
          className='plan-card'
          onClick={() => selectPlan('advanced', plans.advanced)}
        >
          <h3>Advanced</h3>
          <p>
            {state.billing == 'monthly'
              ? `$${plans.advanced}/mo`
              : `$${plans.advanced * 10}/yr`}
          </p>
          {state.billing == 'yearly' && <span>2 months free</span>}
        </div>
        <div className='plan-card' onClick={() => selectPlan('pro', plans.pro)}>
          <h3>Pro</h3>
          <p>
            {state.billing == 'monthly'
              ? `$${plans.pro}/mo`
              : `$${plans.pro * 10}/yr`}
          </p>
          {state.billing == 'yearly' && <span>2 months free</span>}
        </div>
      </div>
      <div className='billing-toggle'>
        <span className={state.billing === 'monthly' ? 'active' : ''}>
          Monthly
        </span>

        <label className='switch'>
          <input
            type='checkbox'
            checked={state.billing === 'yearly'}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'billing',
                value: e.target.checked ? 'yearly' : 'monthly',
              })
            }
          />
          <span className='slider'></span>
        </label>

        <span className={state.billing === 'yearly' ? 'active' : ''}>
          Yearly
        </span>
      </div>

      <div className='buttons'>
        <button onClick={() => dispatch({ type: 'PREV_STEP' })}>Go Back</button>

        <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>
          Next Step
        </button>
      </div>
    </div>
  );
}
