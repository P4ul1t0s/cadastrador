import {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';

function Cadastrar(){
    const navigate = useNavigate()
    const [values, setValues] = useState()
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = (e) => {
        e.preventDefault();
        createPost(values)
    }
    function createPost(values) {
        fetch('http://localhost:5001/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(values),
        })
        .then((resp) => resp.json())
        // .then((data) => {navigate('/users')})
        navigate('/')
    }
    return(
        <section className={styles.section}>
            <h1>Cadastro</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário:</p>
                    <input type="text" placeholder="Usuário" name="username" onChange={handleChangeValues}/>
                    <p>Insira seu email:</p>
                    <input type="text" placeholder="Email" name="email" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input type="password" placeholder="Senha" name="password1" onChange={handleChangeValues}/>
                    <p>Confirme sua senha:</p>
                    <input type="password" placeholder="Senha" name="password2" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Cadastrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Cadastrar;