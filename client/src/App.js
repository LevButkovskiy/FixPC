import logo from './logo.svg';
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className="title">БыстроФикс ПК</div>
        <div className="phone">+7(999)229-22-22</div>
      </div>
      <div className="menu">
        <div className="menuContent">
          <ul>
            <li className="menuElement">Главная</li>
            <li className="menuElement">Услуги</li>
            <li className="menuElement">Каталог</li>
            <li className="menuElement">О Компании</li>
            <li className="menuElement">Отзывы</li>
          </ul>
          <ul className="menuUser">
            <li className="menuElement">Регистрация</li>
            <li className="menuElement">Личный кабинет</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="title">Каталог</div>
        <hr/>
        <div className="subtitle">Всего товаров: 25</div>
        <div className="contentBody">
          <div className="catalogEl">
            <div className="title">Title</div>
            <div>Kek</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
