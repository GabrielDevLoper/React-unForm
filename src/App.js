import React, { useRef, useEffect } from 'react';
import { Scope } from '@unform/core';


import GlobalStyle from './styles/global';
import { Container, Form } from './styles';
//biblioteca usada para validações de campos de formulários
import * as Yup from 'yup';

import Input from './components/Form/Input';

//usar o initialData no form so serve quando os dados que nos iremos buscar for
//estático, a partir do momento que buscar dados assincronos nos deixamos de utilizar ele.
//serve para alteração de dados que esteja no DB, ja salvo.
const initialData = {
  email:"gabriel.devloper@gmail.com",
  address: {
    zipcode: "57062495"
  }
}

function App() {
  
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite um email válido")
          .required("O email é obrigatório"),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, "No mínimo 3 caracteres")
            .required("A cidade é obrigatória")
        })
      });
      await schema.validate(data, {
        abortEarly: false,
      })

      formRef.current.setErrors({});
      //reseta comandos depois de do comando ser executado!
      reset();
    }catch(err){
      //essa condição verifica se o erro foi de validação.
      if(err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }

    const { city } = data.address;
    const {name, email} = data;

    console.log(data);
  }

  

  useEffect(() => {
    setTimeout(() => {
      /*Sempre que eu for buscar dados da api usar setData para preencher automatico 
      *os campo de texto
      */ 
      formRef.current.setData({
        name: "Gabriel Santos",
        email: "gabriel@hotmail.com",
        address: {
          city:"Maceió-AL"
        }
      })
    }, 2000);
  },[]);


  return (
    

    <Container className="App">
      
      <Form ref={formRef} onSubmit={handleSubmit}>
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="175" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        

        <Input placeholder="Nome Completo" name="name" />
        <Input placeholder="E-mail" name="email" />

        <Scope path="address">
          <Input placeholder="CEP" name="zipcode" />
          <Input placeholder="Estado" name="state" />
          <Input placeholder="Cidade" name="city" />
          <Input placeholder="Rua" name="street" />
          <Input placeholder="Nº" name="number" />
        </Scope>
        <button type="submit">Enviar</button>
      </Form>
      <GlobalStyle />
      
    </Container>

    
  );
}

export default App;
