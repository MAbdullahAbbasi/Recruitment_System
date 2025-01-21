import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginPages/login';
import Signup from './components/signup';
import Instructions from './components/dashboardInstructionUser';
import DashboardUser from './components/dashboardUser';
import MainPage from './components/mainPage';
import Profile from './components/profile';
import Home from './components/home';
import Activity from './components/activity';
import Jobs from './components/jobs';
import Notifications from './components/notifications';
import Ask from './components/ask';
import Home1 from './components/home1';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Ask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboardinstructionsUser" element={<Instructions />} />
        <Route path="/dashboardUser" element={<DashboardUser />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/notifications" element={<Notifications />} />
        
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
