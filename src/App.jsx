import { RouterProvider } from 'react-router-dom';
import Router from './routes/Routes';
import './index.css';

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
