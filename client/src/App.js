
import './App.css';

import Login from './components/Login';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div >
      <DataProvider>

        <Login />
      </DataProvider>
    </div>
  );
}

export default App;
