import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [titles, setTitles] = useState(allTitles);
  const [isReseted, setIsReseted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const mapAllTitles = () => {
      let i = 0;

      setTitles(titles.map((item) => {
        const isCompleted = localStorage.getItem(item.chapter) ? true : false;

        if (isCompleted) i++
        if (i > 14) goToFinal();

        return {
          chapter: item.chapter,
          isCompleted: isCompleted
        }
      }))
    }

    mapAllTitles()
  }, [])

  const goToFinal = () => {
    router.push('/final')
  }

  const resetLocalStorage = () => {
    setIsReseted(true);
    setTitles(allTitles)
    localStorage.clear();
  }

  return (
    <div>
      <Head>
        <title>Energma</title>
      </Head>

      {!isReseted && 
        <button 
        style={{ background: '#020202', border: 'none', color: '#f9f9f9', float: 'right', width: '100px', height: '50px' }}
        onClick={resetLocalStorage}
        >
          Reset
        </button>
      }

      <main className={styles.main}>
        <h1 className={styles.title}>
          Energma
        </h1>
        
        <h2>
          Capítulos
        </h2>

        <ul style={{ listStyle: 'none' }}>
          {titles.map((item, index) => {
            return (
              <li key={index} className={ item.isCompleted ? `scratched` : '' }>
                <a href={`/capitulos/${index+1}`}>
                  {index+1}: {item.chapter} {item.isCompleted ? '(Finalizado)' : ''}
                </a>
              </li>
            )
          })}
        </ul>

      </main>
    </div>
  )
}

const allTitles = [
  { 
    isCompleted: false,  
    chapter: 'Esse não tem pix em cima', 
  },
  { 
    isCompleted: false,  
    chapter: 'O primeiro caso', 
  },
  { 
    isCompleted: false,  
    chapter: 'Eu gosto de rimas', 
  },
  { 
    isCompleted: false,  
    chapter: 'Quem se descreve, se limita?', 
  },
  { 
    isCompleted: false,  
    chapter: 'Objetivo', 
  },
  { 
    isCompleted: false,  
    chapter: 'Um genio', 
  },
  { 
    isCompleted: false,  
    chapter: 'Filosofando', 
  },
  { 
    isCompleted: false,  
    chapter: 'Caos e criação', 
  },
  { 
    isCompleted: false,  
    chapter: 'Uma bebida', 
  },
  { 
    isCompleted: false,  
    chapter: 'Conjuntura, expansão, contraste e resultante', 
  },
  { 
    isCompleted: false,  
    chapter: 'Tem alguém aí?', 
  },
  { 
    isCompleted: false,  
    chapter: 'Dois irmãos, um gênio', 
  },
  { 
    isCompleted: false,  
    chapter: 'Não é azar', 
  },
  { 
    isCompleted: false,  
    chapter: 'Um deus', 
  },
  { 
    isCompleted: false,  
    chapter: 'O ultimo', 
  },
]
