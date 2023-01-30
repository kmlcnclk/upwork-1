import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from './store/slices/customerSlice';
import {
  createAbandoned,
  deleteAbandoned,
  updateAbandoned,
} from './store/slices/abandonedSlice';
import { useState } from 'react';

function App() {
  const customer = useSelector((state) => state.customer.value);
  const abandoned = useSelector((state) => state.abandoned.value);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [abandonedState, setAbandonedState] = useState('');

  const createCustomerFormFunc = async (e) => {
    e.preventDefault();

    await dispatch(
      createCustomer({
        firstName,
        lastName,
      })
    );

    await setFirstName('');
    await setLastName('');
  };

  const updateCustomerFormFunc = async (e) => {
    e.preventDefault();

    await dispatch(
      updateCustomer({
        firstName,
        lastName,
      })
    );

    await setFirstName('');
    await setLastName('');
  };

  const deleteCustomerFormFunc = async (e) => {
    e.preventDefault();

    await dispatch(deleteCustomer());
    await setFirstName('');
    await setLastName('');
  };

  const createAbandonedFormFunc = async (e) => {
    e.preventDefault();

    await dispatch(
      createAbandoned({
        state: abandonedState,
      })
    );

    await setAbandonedState('');
  };

  const updateAbandonedFormFunc = async (e) => {
    e.preventDefault();

    await dispatch(
      updateAbandoned({
        state: abandonedState,
      })
    );

    await setAbandonedState('');
  };

  const deleteAbandonedFormFunc = async (e) => {
    e.preventDefault();

    await dispatch(deleteAbandoned());
    await setAbandonedState('');
  };

  return (
    <div className="App">
      <div>
        <div>
          <p>
            <strong>Customer Firstname: </strong> {customer.firstName}
          </p>
        </div>
        <div>
          <p>
            <strong>Customer Lastname: </strong>
            {customer.lastName}
          </p>
        </div>

        <form onSubmit={createCustomerFormFunc}>
          <h3>Create Customer</h3>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

          <button type="submit">Send</button>
        </form>
        <form onSubmit={updateCustomerFormFunc}>
          <h3>Update Customer</h3>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

          <button type="submit">Send</button>
        </form>
        <form onSubmit={deleteCustomerFormFunc}>
          <h3>Delete Customer</h3>

          <button type="submit">Delete</button>
        </form>
      </div>
      <div>
        <div>
          <p>
            <strong> Abandoned: </strong> {abandoned.state}
          </p>
        </div>

        <form onSubmit={createAbandonedFormFunc}>
          <h3>Create Abandoned</h3>
          <input
            onChange={(e) => setAbandonedState(e.target.value)}
            value={abandonedState}
          />

          <button type="submit">Send</button>
        </form>
        <form onSubmit={updateAbandonedFormFunc}>
          <h3>Update Abandoned</h3>

          <input
            onChange={(e) => setAbandonedState(e.target.value)}
            value={abandonedState}
          />

          <button type="submit">Send</button>
        </form>
        <form onSubmit={deleteAbandonedFormFunc}>
          <h3>Delete Abandoned</h3>

          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default App;
