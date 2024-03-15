
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import CourseDetail from './components/CourseDetail/CourseDetail'

function App() {
  const [titles, setTitles] = useState([]);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(20);

  const handleAddTitle = (card) =>{
    // console.log(card)
    const {name} = card;
    const newTitles = [...titles,name]
    setTitles(newTitles);
    const newPrice = card.price + price;
    setPrice(newPrice);
    const newCredit = credit - card.credit ;
    
    if(newCredit >= 0 ){
      setCredit(newCredit);
    }
    else{
      alert('Credit limit exceeded')
      return
    }
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-center my-6'>Course Registration</h1>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-6'>
        <Cards handleAddTitle={handleAddTitle}></Cards>
        <CourseDetail titles={titles} price={price} credit={credit}></CourseDetail>
      </div>
    </>
  )
}

export default App
