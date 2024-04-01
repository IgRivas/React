import { useEffect, useState } from 'react'

import './App.css'

const CAT_ENDPOINT_RANDOM_FACTS = 'https://catfact.ninja/fact'
//const CAT_EMPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=40&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = ''

export function App() {
  const [fact, setFact] = useState('lorem ipsum')
  const [image, setImage] = useState()
  
  useEffect(() => {
    // Fetch a random fact from the cat API
    fetch(CAT_ENDPOINT_RANDOM_FACTS)
    // Parse the response as JSON
    .then(response => response.json())
    // Set the fact to the response 
    .then(data => {
      const { fact } = data;
      setFact(fact);
      const firstWord = fact.split(' ', 3).join(' ');
      fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`) 
      .then(response => {
        const { url } = response;
        console.log("La url " + url);
        setImage(url);
      })
    })
  }, [])



  return (  
    <main>
      <h1>Random fact</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`${CAT_PREFIX_IMAGE_URL}${image}`} alt=""/>}
    </main>
  )

  }