import { useHistory } from "react-router";

export function HomePage() {
  const history = useHistory();
  return (
    <button onClick={() => history.push("/form")}>Ir para Formulário</button>
  );
}
