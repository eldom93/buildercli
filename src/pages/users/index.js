import styles from "../../styles/Users.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>

      {users.map((user) => (
        <Link className={styles.user} href={"/users/" + user.id} key={user.id}>
          <h3>{user.name} </h3>
        </Link>
      ))}
    </div>
  );
};

export default Users;
