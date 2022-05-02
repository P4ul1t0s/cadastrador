import LinkButton from '../../globalComponents/LinkButton';
import styles from './Home.module.css';

function Home(){
    return(
        <section className={styles.section}>
            <h1>Cadastrador</h1>
            <p>Escolha entre <span>Cadastrar-se</span> ou <span>Entrar</span></p>
            <LinkButton to="/login" text="Entrar"/>
            <span></span>
            <LinkButton to="/sigin" text="Cadastrar"/>
        </section>
    )
}

export default Home;