import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut() {
      // Delegate to the users-service
      userService.logOut();
      // Update state will also cause a re-render
      setUser(null);
    }

  return (
    <nav>
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/movies/:movieTitle">Movie Detail</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}