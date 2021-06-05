import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Companies from './companies/Companies'
import Company from './companies/Company'
import Jobs from './jobs/Jobs'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Profile from './users/Profile'

const Routes = ({login, signup}) => {  
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/companies'>
                <Companies />
            </Route>
            <Route path='/companies/:handle'>
                <Company />
            </Route>
            <Route exact path='/jobs'>
                <Jobs />
            </Route>
            <Route exact path='/login'>
                <Login login={login}/>
            </Route>
            <Route exact path='/signup'>
                <Signup signup={signup} />
            </Route>
            <Route exact path='/profile'>
                <Profile />
            </Route>
            <Route>
                <h2>Sorry, page not found!</h2>
            </Route>
        </Switch>
    )

};

export default Routes;