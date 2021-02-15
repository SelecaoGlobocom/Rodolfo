import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader'

import { LoadingContainer } from './style'

export const Loading = () => (
    <LoadingContainer>
        <SyncLoader color={"#06aa48"} />
    </LoadingContainer>
)
