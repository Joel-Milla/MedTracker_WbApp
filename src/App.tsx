import './App.css'
import UserCard from './Home/UserCard'
import SymptomList from './Dashboard/SymptomList'

function App() {

  return (
    <>
      <UserCard nombre='Christopher' celular='8100000000' edad='22' image='https://2.bp.blogspot.com/-Kk7woxfDqdQ/XGVk2AF36hI/AAAAAAACkqY/f8gnLoqiyysBuLcN_yV0Xf6S66Ea3wEsQCLcBGAs/s1600/thispersondoesnotexist-1.jpg' />
      <SymptomList />
    </>
  )
}

export default App
