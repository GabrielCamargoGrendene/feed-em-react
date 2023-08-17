import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    const[likeCount, setLikeCount] = useState(0);

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/GabrielCamargoGrendene.png' alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                  <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gabriel Camargo</strong>
                        <time title='14 de Agosto de 2023 as 12:45h' dateTime='2023-08-14 12:45:00'>Cerca de 1hr atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>

                  </header>
                  
                  <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}