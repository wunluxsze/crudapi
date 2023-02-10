import { createContext, useState } from 'react';

const AppContext = createContext();

const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return <Provider value={{ posts, setPosts }}>{children}</Provider>;
};

export { AppProvider, AppContext };
