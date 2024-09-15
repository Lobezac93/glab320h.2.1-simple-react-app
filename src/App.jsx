
import './App.css'
import Content from './components/Content.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import img1 from "../src/pics/hook.png"
import img2 from "./pics/use-state.png"

function App() {
 

  return (
    <main>
      <Header />
      <Content imgUrl = {img1} color ="blue" text="This is my first React Application"/>
      <Content imgUrl = {img2} color= "red" text="Wish me luck..."/>
      <Content color= "green" text="I think I've got it !"/>
      <Footer />
    </main>
  )
}

export default App
