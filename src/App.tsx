import { Routers } from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routers} />
    </div>
  );
}

export default App;
