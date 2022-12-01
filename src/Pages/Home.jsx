import React from 'react'

//* Components *// 
import Header from "../components/Header";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Vegetarian from "../components/Vegetarian";


const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Vegetarian />
      <Trending />
    </>
  )
}

export default Home