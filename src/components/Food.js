import React from 'react'
import News from './News'

const Food = () => {
  return (
    <div>
      <News URL="https://newsapi.org/v2/everything?q=food&apiKey=2cca05cdb1e1497ba7d3276a0755d07b"/>
    </div>
  )
}

export default Food
