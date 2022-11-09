import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";
import Footer from "../src/components/Footer";
import { StyledFavorites } from "../src/components/Favorite";

function HomePage() {
    return (
        <>
        <CSSReset/>
        <div>
            <Menu/>
            <Header/>
            <Timeline playlists = {config.playlists}/>
            <Favorite favorites = {config.favorites}/>
            <Footer/>
        </div>
        </>
    )
  }
  
  export default HomePage

  function Header() {
    return(
        <StyledHeader>
            <section>
                <img className="banner" 
                src={"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"} alt="banner" />
            </section>
            <section className="user-info">
                <img className="profile" src={`https://github.com/${config.github}.png`} alt="profile picture" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
  }

  function Timeline(props) {
    const playlistNames = Object.keys(props.playlists)

    return(
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>
                            {playlistName}
                        </h2>
                        <div>
                        {videos.map( (video)=>{
                            return(
                                <a href={video.url}>
                                    <img src={video.thumb}/>
                                    <span>{video.title}</span>
                                 </a>
                                )
                            }
                        )}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }
  

  function Favorite (props) {
    const favoriteNames = Object.keys(props.favorites)
    return(
    <StyledFavorites>
        {favoriteNames.map((favoriteName) => {
            const videos = props.favorites[favoriteName];
            return (
                <section>
                    <h2>
                        {favoriteName}
                    </h2>
                    <div>
                    {videos.map( (video)=>{
                        return(
                            <a href={video.url}>
                                <img src={video.thumb}/>
                                <span>{video.title}</span>
                            </a>
                            )
                        }
                    )}
                    </div>
                </section>
            )
        })}
    </StyledFavorites>
    )
  }