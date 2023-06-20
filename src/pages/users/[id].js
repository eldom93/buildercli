import styles from "../../styles/Details.module.css"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((user) => {
        return {
            params: { id: user.id.toString() }
        }
    });
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    
    return {
            props: {
                user: data
            }
        }
}

const Details = ({ user }) => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>{user.name}</h1>
            <p className={styles.description}>{user.username}</p>
            <p className={styles.description}>{user.email}</p>
            <p className={styles.description}>{user.phone}</p>
            <p className={styles.description}>{user.address.street}</p>
            <p className={styles.description}>{user.address.city}</p>   
            <p className={styles.description}>{user.address.state}</p>
            <p className={styles.description}>{user.address.zip}</p>
            <p className={styles.description}>{user.address.country}</p>
            <p className={styles.description}>{user.website}</p>
            <p className={styles.description}>{user.company.name}</p>
            <p className={styles.description}>{user.company.catchPhrase}</p>
            <p className={styles.description}>{user.company.bs}</p>
        </div>
     );
}
 
export default Details;