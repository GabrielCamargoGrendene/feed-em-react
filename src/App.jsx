import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.modules.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GabrielCamargoGrendene.png',
      name: 'Gabriel Camargo',
      role: 'Estagiário @Grendene'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' ,},
      
      { type: 'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2023-08-16 08:17:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/NortonGrendene.png',
      name: 'Norton Coelho',
      role: 'Estagiário @Grendene'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' ,},
      
      { type: 'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2023-08-16 12:52:00'),
  },
];

export function App() {
  return (
    <div>

      <Header />
     
      <div className="wrapper">
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt = {post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}