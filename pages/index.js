import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";
import Footer from "../src/components/Footer";
import { StyledFavorites } from "../src/components/Favorite";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
        <div>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
            <Header/>
            <Timeline searchValue = {valorDoFiltro} playlists = {config.playlists}/>
            <Favorite favorites = {config.favorites}/>
            <Footer/>
        </div>
        </>
    )
  }
  
  export default HomePage

  const StyledBanner =styled.div`
    background-image: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
    background-position: center center;
    height:230px;
  `;


  function Header() {
    return(
        <StyledHeader>
            <StyledBanner/>
            <section className="user-info">
                <a href="https://github.com/ruvolpe"><img className="profile" src={`https://github.com/${config.github}.png`} alt="profile picture" /></a>
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

  function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlists)

    return(
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>
                            {playlistName}
                        </h2>
                        <div >
                        {videos
                            .filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map( (video)=>{
                                return(
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>{video.title}</span>
                                    </a>
                                    )
                                }
                            )
                        }
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
                <section key={favoriteName}>
                    <h2>
                        {favoriteName}
                    </h2>
                    <div>
                    {videos.map( (video)=>{
                        return(
                                <a key={video.url} href={video.url}>
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