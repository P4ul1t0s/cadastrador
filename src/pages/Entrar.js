import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';
import Input from '../components/Input';

function Entrar(){
    return(
        <section className={styles.section}>
            <h1>Entrar</h1>
            <form>
                <Input text="Insira seu nome de usuário ou email:" type="text" placeholder="Usuário/Email" name="username"/>
                <Input text="Insira sua senha:" type="password" placeholder="Senha" name="password"/>
            </form>
            <LinkButton to="/" text="Entrar"/>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Entrar;