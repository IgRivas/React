import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard.jsx'

//Lista de usuairos que podrian venir desde una base de datos 
const users = [
  {
    userName :'midudev',
    name : 'Miguel Angel Duran',
    isFollowing : false

  },
  {
    userName :'pepito',
    name: 'Pep Guardiola',
    isFollowing : true
  }
]

export function App (){
    return (
    <>
    <section className='App'>      
      
      <TwitterFollowCard    initialIsFollowing userName="ignacio" name="Ignacio"/>
      <TwitterFollowCard   initialIsFollowing={false} userName="pedro" name="Pedro"/>
      <TwitterFollowCard   initialIsFollowing userName="carlos" name="Carlos"/>
      <TwitterFollowCard   initialIsFollowing={false} userName="maria" name="Maria"/>
      
      
      
      {/* Como renderizar listas? Usando JavaScript*/}
      {
      users.map(({userName, name, isFollowing})=>(
        <TwitterFollowCard
        key={userName}
        userName={userName}
        initialIsFollowing={isFollowing}
        name={name}>
        </TwitterFollowCard>
      ))
      }
    </section>
   
    

 
    </>
    )
}
    