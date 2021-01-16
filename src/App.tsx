import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './store/effects/weather';
import { Dashboard } from './component/Dashboard';
import { Sidebar } from './component/Sidebar';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
