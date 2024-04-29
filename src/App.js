import './App.css';
import Table from './components/transtable';
import Form from './components/transform';
import Header from './components/header';
import Search from './components/search';
import { useState } from 'react';



function App() {
  const transaction = [
    {
        date: "24/04/2024",
        description: "Withdraw",
        category: "Salary",
        amount: "300000"
    },
    {
        date: "24/04/2024",
        description: "Deposit",
        category: "Income",
        amount: "50000"
    },
    {
        date: "26/05/2024",
        description: "Car",
        category: "Expenditure",
        amount: "5000"
    },
    {
        date: "10/05/2024",
        description: "Holiday",
        category: "Expenditure",
        amount: "20000"
    }
      ]


      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function handleNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container-fluid'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form handleNewData={handleNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;