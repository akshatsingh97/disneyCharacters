import React, { useState, useEffect } from 'react'
import DisneyCharacterCards from './DisneyCharacterCards';
import './disney.css';

const ReadDisneyCharacter = ({ show }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    const showProp = show;

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const value = await fetch("https://api.disneyapi.dev/character");
        const json = await value.json();

        setData(json?.data);
        setFilteredData(json?.data);
    }
    console.log(data)

  return (
    <div>
    <h5>Search your favorite character!</h5>
    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
    <button 
    onClick={() => {
      const filteredData = data.filter((character) => 
        character.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredData);
    }}
    >
    Search
    </button>
      <div className='disney'>
      {filteredData.map((item) => 
        <DisneyCharacterCards key={data.id} values={item} show={showProp}/>
        )}
      </div>
    </div>
  )
}

export default ReadDisneyCharacter