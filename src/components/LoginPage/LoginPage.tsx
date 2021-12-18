import { Input } from "antd";

export function LoginPage() {
  return (
    <div>
      <h1>Введите логин и пароль</h1>
      <form>
        <div>
          <label>Ваш логин:</label>
          <div>
            <Input type="text" name="login" />
          </div>
        </div>
        <div>
          <label>Ваш пароль:</label>
          <div>
            <Input type="password" name="password" />
          </div>
        </div>
        <button type="submit">Войти</button>
      </form>
      <div>
        <button>Регистрация</button>
      </div>
    </div>
  );
}
