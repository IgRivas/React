import { useState, useEffect } from 'react';

export   function useCatImage({fact}){
    const [imageUrl, setImageUrl] = useState()
    
    useEffect(() => {
      if(!fact) return
      const firstWord = fact.split(' ', 3).join(' ');
        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=30&fontColor=red`) 
        .then(response => {
          const { url } = response;
          console.log("La url " + url);
          setImageUrl(url);
        })
    },[fact])
    return {imageUrl}
  
      
    }