import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";

function HomePage() {
    return (
        <>
        <CSSReset/>
        <div>
            <Menu/>
            <Header/>
            <Timeline playlists = {config.playlists}/>
        </div>
        </>
    )
  }
  
  export default HomePage

  function Header() {
    return(
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="profile picture" />
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
