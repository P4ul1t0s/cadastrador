import {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';

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
        if(document.getElementById("usernameField").value === "" || document.getElementById("passwordField").value === ""){
            console.log("Preencha todos os campos corretamente!")
        }else{
            const users = await request()
            try{
                const currentUser = users.find(user => (user.username === values.username || user.email === values.username) && user.password1 === values.password)                
                try{
                    console.log("Entrou como: " + currentUser.username)
                    navigate('/Principal', {state: {users: users}})
                }catch(err){
                    console.log("Usuário ou senha incorretos!")
                }
            }catch(err){
                console.log("Preencha todos os campos corretamente!")
            }
        }
    }
    async function request() {
        return await fetch('http://localhost:5001/users', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => data)
    }

    return(
        <section className={styles.section}>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário ou email:</p>
                    <input id="usernameField" type="text" placeholder="Usuário/Email" name="username" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input id="passwordField" type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Entrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Entrar; 