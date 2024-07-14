import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="stylesheet" href="application.css" />
      </Head>
      <div>
        <h1>Character List</h1>
        {characters.map(character => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            {character.image_url && (
              <Link href={`/characters/${character.id}`}>
                <a>
                  <Image 
                    src={character.image_url} 
                    alt={`Image of ${character.name}`} 
                    width={500}
                    height={500}
                  />
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;