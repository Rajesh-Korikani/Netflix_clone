import React from 'react'
import News from './News'

const Business = () => {
  return (
    <div>
      <News URL="https://newsapi.org/v2/everything?q=business&apiKey=dfcef6aa18164b279fe80d5e33f11a9d"/>
    </div>
  )
}

export default Business
