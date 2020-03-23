import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {getAllChars} from './SearchForm'
import styled from 'styled-components'
const TextStlyle = styled.div `color:red;
font-weight:normal;
display:flex;
text-align:center;
`
const SpanStlyle = styled.span `color:blue;
font-weight:bold`

 function CharacterCard() {
let [charData , setcharData] = useState([]);
const [search, setSearch] = useState("");
const getData = async () => {

  const characters = await getAllChars();
  setcharData(characters)

}
useEffect(() => {
  getData()
}, []);

const onChange = e => setSearch(e.target.value);
useEffect(() => {
  setcharData(
    charData.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  );
}, [search]);



  return(






 
    <div className = 'charcard'>

<form>
<input
onChange={onChange}
          id="name"
          class="input-reset ba b--black-20 pa2 mb2 db w-40"
          type="text"
          aria-describedby="name-desc">
  </input>
  </form>




      {charData.map((character ,index)=>(
        <div key ={index} className='card'>
<img src={character.image} />
<div>         </div>
<TextStlyle><SpanStlyle><span>Name:</span></SpanStlyle>{character.name}</TextStlyle>

<div>         </div>
<TextStlyle><SpanStlyle><span>Species:</span></SpanStlyle>{character.species}</TextStlyle>
<div>         </div>
<TextStlyle><SpanStlyle><span>Gender:</span></SpanStlyle>{character.gender}</TextStlyle>
         
         
          </div>
          
         


      ))}


    </div>

  )

}
export default CharacterCard;
