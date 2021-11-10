import React from 'react';
import styled from 'styled-components';

import Box from '@/components/Common/Box';
import DashBoardInfo from './DashBoardInfo';
import DashBoardVideo from './DashBoardVideo';
import DashBoardTab from './DashBoardTab';

export default function DashBoard({ info }) {
    const streamKey = info.stream_key;
    return (
        <Box type="black" height="100%" alignItems="stretch">
            <Box
                flex={1.5}
                padding={1}
                flexDirection="column"
                alignItems="stretch"
            >
                <DashBoardTab text="방송 정보" />
                <DashBoardInfo info={info} />
            </Box>
            <StyledBox
                flex={3}
                padding={1}
                flexDirection="column"
                alignItems="stretch"
            >
                <DashBoardTab text="방송 송출 칸" />
                <DashBoardVideo streamKey={streamKey} />
            </StyledBox>
            <Box flex={1}>1</Box>
        </Box>
    );
}

const StyledBox = styled(Box)`
    box-sizing: content-box;
    border-left: 0.5px solid ${({ theme }) => theme.color.gray1};
    border-right: 0.5px solid ${({ theme }) => theme.color.gray1};
`;