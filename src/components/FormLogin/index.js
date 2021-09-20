import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
import * as yup from "yup";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormLogin({ setUser }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    userName: yup.string().required("Nome de usuário obrigatório"),
    fullName: yup.string().required("Nome completo obrigatório"),
    email: yup.string().required("Email inválido"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "email não é igual"),
    password: yup
      .string()
      .required("senha inválida")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "invalido"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha não é igual"),
    checkbox: yup
      .boolean()
      .oneOf([true], "Obrigatório aceitar os termos")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    //mandar pra api
    setUser(data);
    history.push("/pageUser");
  };
  return (
    <div className="App-header">
      <div className=" form-container">
        <form className="form-laytout" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="input-container">
            <input
              required
              id="inputUserName"
              className="input"
              type="text"
              {...register("userName")}
              maxLength="18"
              placeholder="Nome de usuário"
            />
            <label htmlFor="inputUserName">Nome de usuário</label>
            {errors.userName?.message}
          </div>
          <div className="input-container">
            <input
              required
              id="inputFullName"
              className="input"
              type="text"
              {...register("fullName")}
              placeholder="Nome completo"
            />
            <label htmlFor="inputFullName">Nome completo</label>
            {errors.fullName?.message}
          </div>
          <div className="input-container">
            <input
              required
              id="inputEmail"
              className="input"
              type="email"
              {...register("email")}
              placeholder="Endereço de Email"
            />
            <label htmlFor="inputEmail">Endereço de Email</label>
            {errors.email?.message}
          </div>

          <div className="input-container">
            <input
              required
              className="input"
              type="email"
              {...register("confirmEmail")}
              placeholder="Confirme seu Email"
            />
            <label htmlFor="inputConfirmEmail">Confirme seu Email</label>
            {errors.confirmEmail?.message}
          </div>

          <div className="input-container">
            <input
              required
              id="inputPassword"
              className="input"
              type="password"
              {...register("password")}
              placeholder="Senha"
            />
            <label htmlFor="inputPassword">Senha</label>
            {errors.password?.message}
          </div>

          <div className="input-container">
            <input
              required
              className="input"
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirme sua senha"
            />
            <label htmlFor="inputConfirmPassword">Confirme sua senha</label>
            {errors.confirmPassword?.message}
          </div>

          <div>
            <input
              id="confirmTerms"
              type="checkbox"
              {...register("checkbox")}
            />
            <label htmlFor="confirmTerms">
              Eu aceito os termos de uso da aplicação
            </label>
            {errors.checkbox?.message}
          </div>

          <button type="submit"> Cadastrar</button>
          <Link to="/login" className="link">
            Já possui uma conta ?
          </Link>
        </form>
      </div>
    </div>
  );
}
