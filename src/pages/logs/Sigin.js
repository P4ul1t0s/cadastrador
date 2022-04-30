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
        // if(document.getElementById("usernameField").value === "" || document.getElementById("emailField").value === "" || document.getElementById("password2Field").value === "" || document.getElementById("password2Field").value === ""){
        //     msg.fire({title:'Preencha todos os campos!', text:'Verifique se todos os campos estão preenchidos', icon:'warning', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        // }else{
        //     const users = await request()
        //     try{
        //         var currentUser = users.find(user => (user.username === document.getElementById("usernameField").value))
        //         if(currentUser.username === ""){
        //             //continua
        //         }else{
        //             msg.fire({title:'Usuário já cadastrado!', text:'Eperimente outro apelido', icon:'warning', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //         }
        //     }catch(err){
        //         try{
        //             currentUser = users.find(user => (user.email === document.getElementById("emailField").value))
        //             if(currentUser.username === ""){
        //                 //continua
        //             }else{
        //                 msg.fire({title:'Email inserido em uso!', text:'Cada cadastro só pode ser vinculado a um email', icon:'warning', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //             }
        //         }catch(err){
        //             if(document.getElementById("password1Field").value === document.getElementById("password2Field").value){
        //                 msg.fire({title:'Cadastro realizado!', text:'Seus dados já foram registrados em nosso sistema', icon:'success', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //                 createPost(values)
        //             }else{
        //                 msg.fire({title:'Senhas não coincidem!', text:'Escreva a mesma senha nos dois campos', icon:'error', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //                 document.getElementById("password1Field").value = "";
        //                 document.getElementById("password2Field").value = "";
        //             }
        //         }
        //     }
        // }

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
        // .then((data) => {navigate('/users')})
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