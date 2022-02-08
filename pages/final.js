import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function Home() {
    const [inputPassword, setInputPassword] = useState();
    const router = useRouter();

    const isValidPassword = (input, dist) => {
        return String(input) === String(dist)
    }

    const validate = () => {
        const isValid = isValidPassword(inputPassword, password);

        if (isValid) {
            localStorage.setItem(chapter, password);
            goToHome()
        }        
    }    

    const goToHome = () => {
        router.push('/');
    }

    const resetLocalStorage = () => {
        localStorage.clear();
        goToHome('/');
    }

    return (
        <div>
            <Head>
                <title>Final</title>
            </Head>

            <button 
                style={{ background: '#020202', border: 'none', color: '#f9f9f9', float: 'right', width: '100px', height: '50px' }}
                onClick={resetLocalStorage}
            >
                Reset
            </button>

            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh' }}>
                <h1 style={{ padding: '0 8px' }}>
                    Final
                </h1>

                <div style={{ position: 'relative', width: '100%', height: '600px', margin: '8px 0' }}>
                    <Image
                        src={'https://energma-kfqgkvknb-akselholmes.vercel.app/FINAL_DO_ENIGMA.jpg'}
                        alt="final"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '300px', margin: '8px 0' }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/03_pmUhibDI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </main>
        </div>
    )
}