import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export default function Home({ photo1, photo2, slug, chapter, text, password }) {
    const [inputPassword, setInputPassword] = useState('');
    const router = useRouter();
    const pageNumber = slug;

    useEffect(() => {
        const checkChapter = () => {
            const isChapterCompleted = localStorage.getItem(chapter) ? true : false;
    
            if (isChapterCompleted) {
                router.push('/')
            }
        }

        checkChapter()
    }, [chapter, router])

    const isValidPassword = (input, dist) => {
        return String(input).toLowerCase() === String(dist).toLowerCase()
    }

    const validate = () => {
        const isValid = isValidPassword(inputPassword, password);

        if (isValid) {
            localStorage.setItem(chapter, password);
            goToHome()
        }        
    }    

    const goToHome = () => {
        router.push('/')
    }

    return (
        <div>
            <Head>
                <title>Capítulo {pageNumber}: {chapter}</title>
            </Head>

            <div style={{ margin: '16px' }}>
                <button onClick={goToHome} style={{ border: 'none', background: 'none', fontWeight: 800 }}>Voltar</button>
            </div>

            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh' }}>
                <h1 style={{ padding: '0 8px' }}>
                    Capítulo {pageNumber}: {chapter}
                </h1>

                <div style={{ display: 'flex' }}>
                    <input 
                        onChange={(e) => setInputPassword(e.target.value)} 
                        value={inputPassword}
                        style={{ border: 'none', background: '#f6f6f6', color: '#f9f9f9', width: '300px', height: '50px', color: '#020202', padding: '8px' }}
                    />
                    <button 
                        onClick={validate}
                        style={{ border: 'none', background: '#020202', color: '#f9f9f9', width: '100px', height: '50px' }}
                    >
                        Validar
                    </button>
                </div>
                
                {photo1 !== '' ?
                    (
                        <div style={{ position: 'relative', width: '100%', height: '600px', margin: '8px 0' }}>
                            <Image
                                src={`https://energma-kfqgkvknb-akselholmes.vercel.app/${photo1}`}
                                alt={chapter}
                                layout="fill"
                                objectFit='contain'
                            />
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '300px', margin: '8px 0' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OgyKVknMBOY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    )
                }

                {photo2 !== '' &&
                    (
                        <div style={{ position: 'relative', width: '100%', height: '600px', margin: '8px 0' }}>
                            <Image
                                src={`https://energma-kfqgkvknb-akselholmes.vercel.app/${photo2}`}
                                alt={chapter}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    )
                }

                {text !== '' &&
                    <div style={{ width: '400px', margin: '16px 0' }}>
                        <pre style={{ textAlign: 'center' }}>
                            {text}
                        </pre>
                    </div>
                }
            </main>
        </div>
    )
}

 const content = [
    { 
        photo1: 'case_definitivo.png',
        photo2: '',
        chapter: 'Esse não tem pix em cima', 
        text: '',
        password: 'casimiro rodrigues de sá' 
    },
    { 
        photo1: 'anelzinho.png',
        photo2: '',
        chapter: 'O primeiro caso', 
        text: '',
        password: 'estudo em vermelho' 
    },
    { 
        photo1: 'beatlejuice.jpg',
        photo2: '',
        chapter: 'Eu gosto de rimas', 
        text: ' Quando o segundo sol chegar \n Quando o segundo sol chegar \n Quando o segundo sol chegar \n Para realinhar as órbitas dos planetas \n Derrubando com assombro exemplar \n O que os astrônomos diriam se tratar \n De um outro cometa \n Quando o segundo sol chegar \n Para realinhar as órbitas dos planetas \n Derrubando com assombro exemplar \n O que os astrônomos diriam se tratar \n De um outro cometa',
        password: 'beltegeuse'
    },
    { 
        photo1: 'qrcode_9950346_.png',
        photo2: '',
        chapter: 'Quem se descreve, se limita?', 
        text: '',
        password: 'bem vindo' 
    },
    { 
        photo1: 'desenhos.png',
        photo2: '',
        chapter: 'Objetivo',
        text: 'O abacaxi sincero dança pro macho analfabeto',
        password: 'automação psiquica' 
    },
    { 
        photo1: 'turbulencia.png',
        photo2: 'galaxia.jpg',
        chapter: 'Um genio', 
        text: '',
        password: 'van gogh' 
    },
    { 
        photo1: 'atlas_noia.png',
        photo2: '',
        chapter: 'Filosofando', 
        text: '',
        password: 'objetivismo' 
    },
    { 
        photo1: 'monte_trombona.jpg',
        photo2: '',
        chapter: 'Caos e criação', 
        text: '47.3842  8.53185',
        password: 'frankenstein' 
    },
    { 
        photo1: 'vinho.jpg',
        photo2: 'lineu.jpg',
        chapter: 'Uma bebida', 
        text: '',
        password: 'café' 
    },
    { 
        photo1: 'ki.jpg',
        photo2: '',
        chapter: 'Conjuntura, expansão, contraste e resultante', 
        text: '',
        password: 'kishotenketsu' 
    },
    { 
        photo1: 'HOMEM_VITRUVIANUS.png',
        photo2: '',
        chapter: 'Tem alguém aí?', 
        text: '',
        password: 'arecibo'
    },
    { 
        photo1: '',
        photo2: '',
        chapter: 'Dois irmãos, um gênio', 
        text: 'Maŝino',
        password: 'nikola tesla'
    },
    { 
        photo1: 'biblia.png',
        photo2: '',
        chapter: 'Não é azar', 
        text: '',
        password: 'amor'
    },
    { 
        photo1: 'trovao.jpg',
        photo2: '',
        chapter: 'Um deus', 
        text: '',
        password: 'tupã'
    },
    { 
        photo1: 'Prancheta_1.png',
        photo2: '',
        chapter: 'O ultimo', 
        text: '',
        password: 'ser visto'
    },
]

export const getStaticPaths = async () => {
    const paths = content.map((content, index) => {
        return {
            params: {
                slug: String(index+1)
            },
        }
    })
    
    return { 
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (ctx) => {
    const { slug } = ctx.params;
    const pageNumber = Number(slug) - 1;
    const { photo1, photo2, chapter, text, password } = content[pageNumber];
    
    return {
        props: {
            photo1,
            photo2,
            chapter,
            text,
            slug,
            password
        }
    }
}