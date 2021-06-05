import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './navigation/NavBar';
import Routes from './Routes'
import TokenContext from './context/TokenContext'
import JoblyApi from './api';
import jwt from 'jsonwebtoken'
import useLocalStorage from './hooks/useLocalStorage';
import { Container } from 'reactstrap';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(null);
  const [currUser, setCurrUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(new Set([]))

  useEffect(function getUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          JoblyApi.token = token;
          let { username } = jwt.decode(token);
          let user = await JoblyApi.getUser(username);
          setCurrUser(user)
          setAppliedJobs(new Set(user.applications))
          setInfoLoaded(true);
        } catch (e) {
          console.log(e)
        }
      }else{
        setInfoLoaded(true)
      }
    }
    setInfoLoaded(false)
    getCurrentUser();
  }, [token])


  const login = async (loginData) => {
    try {
      let res = await JoblyApi.login(loginData)
      setToken(res);
      return { success: true }
    } catch (e) {
      return { success: false, e }
    }

  }

  const signup = async (registerData) => {
    try {
      let res = await JoblyApi.signup(registerData)
      setToken(res);
      return { success: true }
    } catch (e) {
      return { success: false, e }
    }

  }

  const logout = async () => {
    setCurrUser(null);
    setToken(null);
  }

  if(!infoLoaded) return <h1>Loading...</h1>

  return (
    <div className="App">
      <TokenContext.Provider value={{ token, currUser, setCurrUser, appliedJobs, setAppliedJobs }}>
        <BrowserRouter>

          <NavBar logout={logout} />
          <Container>
            <Routes login={login} signup={signup} />
          </Container>
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
