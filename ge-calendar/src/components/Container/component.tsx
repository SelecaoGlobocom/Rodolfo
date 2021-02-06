import React from 'react';

import { PageConainer, CardConainer } from './style';
import { Props } from './interface'

export const Container = ({ children, isCard }: Props) => isCard 
? <CardConainer>{children}</CardConainer>
: <PageConainer>{children}</PageConainer> 