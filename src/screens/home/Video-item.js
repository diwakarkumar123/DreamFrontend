import { useRef, useState } from 'react';
import { Container } from '../../components';
import BottomSecction from './components/BottomSecction';
import { CVideo } from './components/CVideo';
import { PressContainer } from './components/PressContainer';
import VerticalSecction from './components/VerticalSecction';

export function VideoItem({ item, index, isActive, parentRef }) {
    const videoRef = useRef(null);
    const verticalRef = useRef();
    const [paused, setPaused] = useState(false);

    function pauseVideo() {
        setPaused(true);
    }
    function playVideo() {
       

            setTimeout(() => {
                setPaused(false);
            }, 400);
        
    }

    return (
        <Container flex={1}>
            {/* TAKES WHOLE VIEW HEIGHT AVAILABLE */}
            <CVideo 
                isActive={isActive}
                url={item.url}
                videoRef={videoRef}
                index={index}
                paused={paused}
                parentRef={parentRef}
                item={item}
            />

            <PressContainer 
                isActive={isActive}
                paused={paused}
                pauseVideo={pauseVideo}
                playVideo={playVideo}
                verticalRef={verticalRef}
            />

            <BottomSecction
                isActive={isActive}
                caption={item.caption}
                authorName={item.author.name}
                audio={item.audio}
            />

            <VerticalSecction
                ref={verticalRef}
                like={item.like}
                comment={item.comment}
                author={item.author}
                idVideo={item.id}
            />
        </Container>
    )
}