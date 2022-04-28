import { useState } from 'react';
import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';

function Entrar(){
    const [values, setValues] = useState()
    
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return(
        <section className={styles.section}>
            <h1>Login</h1>
            <form>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário ou email:</p>
                    <input type="text" placeholder="Usuário/Email" name="username" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} onClick={submit}>Entrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Entrar; 