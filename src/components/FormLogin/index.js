import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormLogin() {
  const [radioCheck, setRadioCheck] = useState(false);

  const formSchema = yup.object().shape({
    userName: yup.string().required("Nome de usuário obrigatório"),
    fullName: yup.string().required("Nome completo obrigatório"),
    email: yup.string().required("Email inválido"),
    /* confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "email não é igual"), */
    password: "confirmPassword",
    /*  confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha não é igual"), */
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(/* {
    resolver: yupResolver(formSchema),
  } */);

  const onHandleSubmit = (data) => {
    //mandar pra api

    console.log(data);
  };
  return (
    <div className="App-header">
      <div className=" form-container">
        <form
          className="form-laytout"
          onSubmit={
            //fazer a verificaçao da senha e do email se esta igual
            handleSubmit(onHandleSubmit)
          }
        >
          <label>
            Nome de usuário
            <input
              className="input inputUserName"
              type="text"
              {...register("userName")}
            />
          </label>
          <label>
            Nome completo
            <input
              className="input inputFullName"
              type="text"
              {...register("fullName")}
            />
          </label>
          <label>
            Endereço de Email
            <input
              className="input inputEmail"
              type="email"
              {...register("email")}
            />
          </label>
          <label>
            Confirme seu Email
            <input
              className="input inputConfirmEmail"
              type="email"
              {...register("confirmEmail")}
            />
          </label>
          <label>
            Senha
            <input
              className="input inputPassword"
              type="password"
              {...register("password")}
            />
          </label>
          <label>
            Confirme sua senha
            <input
              className="input inputConfirmPassword"
              type="password"
              {...register("confirmPassword")}
            />
          </label>
          <label>
            <input
              className="confirmTerms"
              type="radio"
              checked={radioCheck} // ta dando erro
              onClick={
                () => {
                  setRadioCheck(!radioCheck);
                }
                /* console.log(
                  "abrir uma tela do contrato e mudar o estado pra nao aparecer de novo se o radio estiver ligado"
                ) */
              }
            />
            Eu aceito os termos de uso da aplicação
          </label>
          <button type="submit"> Cadastrar</button>
        </form>
        <Link to="/login">Já possui uma conta ?</Link>
      </div>
    </div>
  );
}
