// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import CategoriesFilter from '../components/CategoriesFilter';

const Home = () => {
  return (
    <div>
      <Header />
      <CategoriesFilter />
      <h2>Produtos em Destaque</h2>
      {/* Adicione os produtos em destaque aqui */}
    </div>
  );
}

export default Home;
