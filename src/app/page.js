"use client";
import Hero from "./components/hero";
import Featured from "./components/featured";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
    <>
<Hero  onSearch={handleSearch}/>

<Featured searchQuery={searchQuery}/>
<Footer/>
    </>
  );
}
