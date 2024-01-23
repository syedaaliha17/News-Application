import {useContext} from 'react';
import {LoginContext} from '../context/LoginProvider';
import {removeUser, storeUser} from '../utils/storage';

const useAuth = () => {
  const {user, setUser} = useContext(LoginContext);

  const Login = token => {
    setUser(token);
    storeUser(token);
  };

  const Logout = () => {
    setUser(null);
    removeUser();
  };

  return {user, Login, Logout};
};

export default useAuth;
