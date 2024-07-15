// pages/characters.js

import React from 'react';

const Characters = ({ characters }) => {
  // charactersを使ってUIを描画
  return (
    <div>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          {/* 他のcharacter情報を表示 */}
        </div>
      ))}
    </div>
  );
};

Characters.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/characters');
  console.log('Response:', res);
  const characters = await res.json();
  console.log('Characters:', characters);
  console.log('Is characters an array?', Array.isArray(characters)); // 追加
  return { characters };
};

export default Characters;