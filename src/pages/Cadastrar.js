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
    const submit = async (e) => {
        e.preventDefault();
        if(document.getElementById("usernameField").value === "" || document.getElementById("emailField").value === "" || document.getElementById("password2Field").value === "" || document.getElementById("password2Field").value === ""){
            console.log("Preencha todos os campos corretamente!")
        }else{
            const users = await request()
            try{
                var currentUser = users.find(user => (user.username === document.getElementById("usernameField").value))
                if(currentUser.username === ""){
                    //continua
                }else{
                    console.log("Usuário já cadastrado!")
                }
            }catch(err){
                try{
                    var currentUser = users.find(user => (user.email === document.getElementById("emailField").value))
                    if(currentUser.username === ""){
                        //continua
                    }else{
                        console.log("Email já cadastrado!")
                    }
                }catch(err){
                    if(document.getElementById("password1Field").value === document.getElementById("password2Field").value){
                        createPost(values)
                        console.log("Usuário cadastrado com sucesso!")
                    }else{
                        console.log("Suas senhas não coincidem!")
                    }
                }
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
                    <input id="usernameField" type="text" placeholder="Usuário" name="username" onChange={handleChangeValues}/>
                    <p>Insira seu email:</p>
                    <input id="emailField" type="text" placeholder="Email" name="email" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input id="password1Field" type="password" placeholder="Senha" name="password1" onChange={handleChangeValues}/>
                    <p>Confirme sua senha:</p>
                    <input id="password2Field" type="password" placeholder="Senha" name="password2" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Cadastrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Cadastrar;