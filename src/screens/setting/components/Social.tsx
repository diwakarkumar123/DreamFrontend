import React from 'react';
import Section from './Section';
import TitleSecction from './TitleSecction';
import ItemOption from './ItemOption';

const Social = () => {
  return (
    <Section>
      <TitleSecction title={'Social Account'} />
      <ItemOption
        txtLeft="Instagram"
        txtRight="Add instagram"
      />
      <ItemOption txtLeft="Youtube" txtRight="Add Youtube" />
      <ItemOption
        txtLeft="Facebook"
        txtRight="Add fb"
      />
      <ItemOption txtLeft="Twitter" txtRight="Add twitter" />
    </Section>
  );
};

export default Social;
