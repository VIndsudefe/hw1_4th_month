import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className='APP'>
      <PortfolioPage />
    
    </div>
  )
}
function PortfolioPage() {
  return(<Title title="Aalam"/>
  )
}



function Title(props) {
  console.log(props)
  return(<h1>
    name is {props.title}  
  </h1>)
}
export default App;