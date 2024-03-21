import { useContext } from 'react';
import MyContext from './Mycontext';
import styles from "./App.module.css";

const AllData = () => {
  const ctx = useContext(MyContext);

  // Assuming loggedInUser is available in your context or state
  const loggedInUser = ctx.loggedInUser;

  return (
    <div className={styles.all}>
      <h1>ALL Data</h1>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user, i) => (
              <tr key={i} className={user === loggedInUser ? styles.highlightedRow : ''}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllData;
