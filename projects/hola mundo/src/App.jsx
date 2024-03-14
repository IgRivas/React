import './App.css'
import { TwitterFollowCard } from './TwiterFollowCard.jsx'

export function App (){
    const format =(userName)=> `@${userName}`
    return (
    <>
    <section className='App'>      
      
      <TwitterFollowCard  formatUserName={format}  isFollowing userName="ignacio" name="Ignacio"/>
      <TwitterFollowCard  formatUserName={format} isFollowing={false} userName="pedro" name="Pedro"/>
      <TwitterFollowCard  formatUserName={format} isFollowing userName="carlos" name="Carlos"/>
      <TwitterFollowCard  formatUserName={format} isFollowing={false} userName="maria" name="Maria"/>

    </section>
 
    </>
    )
}