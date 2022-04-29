import styles from './UserCard.module.css';

function UserCard({id, username, email, password}){
    return(
        <div className={styles.card}>
            <h1>{username}</h1>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )
}

export default UserCard;