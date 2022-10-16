import React, { useEffect, useState } from 'react';
import { Customers } from './components/Customers';
import Table from './components/Table';
import axios from 'axios';


const FetchData = () => {
  const [ query, setQuery ] = useState('');
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
  if (query.length === 0 || query.length.length > 2) fetchData();
    }, [query]);
  
  return (
    <div className='fetch_data'>
      <input
        className='search'
        placeholder='Search...'
        onChange={ (e) => setQuery(e.target.value.toLowerCase()) } />
      { <Table data={data} />}
    </div>
  )
}

export default FetchData;