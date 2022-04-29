import {useState} from 'react';
import {useNavigate} from 'react-router';
// import axios from 'axios';
import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';
// import Principal from './Principal';

function Entrar(){
    const navigate = useNavigate();
    const [values, setValues] = useState()
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = async (e) => {
        e.preventDefault();
        const users = await request()
        const currentUser = users.find(user => (user.username === values.username || user.email === values.username) && user.password1 === values.password)
        
        try{
            console.log("Entrou como: " + currentUser.username)
            navigate('/Principal', {state: {users: users}})
        }catch(err){
            // console.log("Usuário não cadastrado ou senha incorreta")´
            console.log(err)
        }
    }
    async function request() {
        return await fetch('http://localhost:5001/users', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => data)

        // const response = await axios.get('http://localhost:5001/users');
        // return response.data
    }

    return(
        <section className={styles.section}>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário ou email:</p>
                    <input type="text" placeholder="Usuário/Email" name="username" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Entrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Entrar; 