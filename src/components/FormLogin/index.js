import { Link } from "react-router-dom";
import "./style.css";
export function FormLogin() {
  return (
    <div className="App-header">
      <div className=" form-container">
        <form className="form-laytout">
          <label for="inputUserName">Nome de usuário</label>
          <input id="inputUserName" class="input" type="text" />
          <label for="inputFullName">Nome completo</label>
          <input id="inputFullName" class="input" type="text" />
          <label for="inputEmail">Endereço de Email</label>
          <input id="inputEmail" class="input" type="email" />
          <label for="inputConfirmEmail">Confirme seu Email</label>
          <input id="inputConfirmEmail" class="input" type="email" />
          <label for="inputPassword">Senha</label>
          <input id="inputPassword" class="input" type="password" />
          <label for="inputConfirmPassword">Confirme sua senha</label>
          <input id="inputConfirmPassword" class="input" type="password" />
          <label for="confirmTerms">
            Eu aceito os termos de uso da aplicação
          </label>
          <input id="confirmTerms" type="radio" />
          <button> Cadastrar</button>
        </form>
        <Link to="/login">Já possui uma conta ?</Link>
      </div>
    </div>
  );
}
