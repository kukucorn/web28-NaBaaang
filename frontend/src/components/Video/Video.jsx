import React, { useEffect, useRef } from 'react';

import Hls from 'hls.js/dist/hls';

import styled from 'styled-components';
import { sizeMixin } from '@/styles/mixins';

export default function Video({ secretKey }) {
    const videoRef = useRef();

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();

            // bind them together
            hls.attachMedia(videoRef.current);

            // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                const serverLocation = 'http://localhost:5959';
                const path = 'images';
                const fileName = `${secretKey}.m3u8`;
                const url = `${serverLocation}/${path}/${fileName}`;

                hls.loadSource(url);

                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    videoRef.current.play();
                });
            });
        }
    }, []);

    return Hls.isSupported() ? (
        <StyledVideo controls autoplay muted ref={videoRef} />
    ) : (
        <div>스트리밍을 지원하지 않습니다.</div>
    );
}

const StyledVideo = styled.video`
    ${sizeMixin('100%', '100%')};
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;
