import React from 'react';

import {Container, Content, StackHeader} from '../../common';
import NewsSpecial from '../components/NewsSpecial';
import NewsArticles from '../components/NewsArticles/index';

const NewsScreen = () => {
  return (
    <Container>
      <StackHeader title="Ontwikkelingen Minfal" />
      <Content>
        <NewsSpecial />
        <NewsArticles />
      </Content>
    </Container>
  );
};

export default NewsScreen;
