import { useState } from "react"



export function TwitterFollowCard ({userName="nombre-por-defecto", name, initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    //Funcion para cambiar el valor a isFollowing
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    //Condicional
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    
    //Condicional para añadir una clase
    const buttonClassName= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
   
    return(
   
        <article className='tw-followCard'> 
        {/* Esta es la unica forma de comentar dentro del renderizado, aunque no es buena practica */}
            <header className='tw-followCard-header'>
            <img  className='tw-followCard-avatar'src={`https://unavatar.io/${userName}`} alt="avatar de dragonBall" />
            <div className='tw-followCard-info'>
                <strong>{ name }</strong>
                <span className='tw-followCard-userName'>@{userName}</span>
            </div>
            </header>

            <aside>
              <button className={buttonClassName}onClick={handleClick} >{text} </button>
            </aside>
        </article>

    )
}