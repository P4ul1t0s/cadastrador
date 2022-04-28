import LinkButton from '../components/LinkButton';
import styles from './Home.module.css';

function Home(){
    return(
        <section className={styles.section}>
            <h1>Cadastrador</h1>
            <p>Escolha entre <span>Cadastrar-se</span> ou <span>Entrar</span></p>
            <LinkButton to="/Entrar" text="Entrar"/>
            <h2></h2>
            <LinkButton to="/Cadastrar" text="Cadastrar"/>
        </section>
    )
}

export default Home;