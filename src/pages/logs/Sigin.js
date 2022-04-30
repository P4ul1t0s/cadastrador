import {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './Log.module.css';
import LinkButton from '../../globalComponents/LinkButton';

function Sigin(){
    const msg = require('sweetalert2')
    const navigate = useNavigate()
    const [values, setValues] = useState()
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = async (e) => {
        e.preventDefault();
        const users = await request();
        var currentUser = users.find(user => (user.username === values.username));
        if(!!!currentUser){
            // disponivel para cadastro
            console.log("user name livre");
            currentUser = users.find(user => (user.email === values.email));
            if(!!!currentUser){
                // disponivel para cadastro
            console.log("email lkivre");
                if(values.password === document.getElementById("passwordField").value){
                    // senhas iguais, realizar cadastro
                    createPost(values)
            console.log("ta bao");
                }else{
                    // senhas diferentes
            console.log("senhas diferentte");
                }
            }
            else{
                // em uso
            console.log("email em uso");
            }
        }else{
            // em uso
            console.log("usuario em sus");
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
    function createPost(values) {
        fetch('http://localhost:5001/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(values),
        })
        .then((resp) => resp.json())
        navigate('/')
    }
    return(
        <section className={styles.section}>
            <h1>Cadastro</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário:</p>
                    <input required type="text" placeholder="Usuário" name="username" onChange={handleChangeValues}/>
                    <p>Insira seu email:</p>
                    <input required type="text" placeholder="Email" name="email" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input required type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                    <p>Confirme sua senha:</p>
                    <input required id="passwordField" type="password" placeholder="Senha"/>
                </div>
                <button className={styles.btn} type="submit">Cadastrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Sigin;