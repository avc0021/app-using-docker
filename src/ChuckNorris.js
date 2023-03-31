import React, { useState, useEffect } from 'react';

function ChuckNorris() {
    const [quote, setQuote] = use('')

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(data => {
            setQuote(data.value);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


return (
    <div>
      <p>{quote}</p>
    </div>
  );
}