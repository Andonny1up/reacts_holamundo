import logo from './logo.svg';
// import './App.css';
import './main.css';

const estilo2 = {
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
}

const estilo = (bg = '456')=> ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})
const Li = ({children}) =>{
  return(
    <li className='clase-li'>{children}</li>
  )
}

const App = ()=>{
  const valor = 'feliz'
  return (
    <ul className="clase-css">
      Chanchito {valor}
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
}

export default App;
