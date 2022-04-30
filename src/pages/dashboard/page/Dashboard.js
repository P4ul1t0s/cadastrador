import styles from './Dashboard.module.css';
import {useLocation} from 'react-router-dom'; 
import LinkButton from '../../../globalComponents/LinkButton'
import UserCard from '../components/UserCard';

function Dashboard(){
    const location = useLocation()
    let users = [];
    if(location.state){
        users = location.state.users
    }
    return(
        <section className={styles.section}>
            <div className={styles.title}>
                <h1>Cadastros</h1>
                <p>Nesta tela você tem acesso à todos os <span>Cadastros</span> já registrados no sistema</p>
            </div>
            <div className={styles.caixa}>
                {users.length > 0 && users.map((user) => (
                <UserCard id={user.id} username={user.username} email={user.email} password={user.password1}/>))}
            </div>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Dashboard;