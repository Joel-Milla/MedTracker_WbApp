import NavigationMenu from './Global/NavigationMenu'
import UserCardGrid from './Home/UserCardGrid'
import Dashboard from './Dashboard/Dashboard'

function App() {
  const imageLink = 'https://2.bp.blogspot.com/-wUD2SGHiBCg/XGVk3D2_6FI/AAAAAAACkqc/LWNsgSdN5YwQNqy7IsRj95GrjqauK5ZzACLcBGAs/s1600/thispersondoesnotexist-2.jpg'
  const users = [{ 'nombre': 'Persona 1', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 2', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 3', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 4', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 5', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 6', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 7', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 8', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 9', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 10', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 11', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 12', 'celular': '8100000000', 'edad': '22', 'image': imageLink },
  { 'nombre': 'Persona 12', 'celular': '8100000000', 'edad': '22', 'image': imageLink },]

  return (
    <>
      <NavigationMenu />
      <UserCardGrid users={users} />
      <Dashboard />
    </>
  )
}

export default App
