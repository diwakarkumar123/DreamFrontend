import React from 'react';
import Section from './Section';
import TitleSecction from './TitleSecction';
import ItemOption from './ItemOption';
import { COPPY_CONTENT_ICON } from '../../../configs/source';

const Introduce = ({ data }) => {
  console.log(data);

  return (
    <Section>
      <TitleSecction title={'Introduce yourself'} />
      <ItemOption txtLeft="Name" txtRight={data?.name} />
      <ItemOption txtLeft="Dream ID" txtRight={data?.userName} />
      <ItemOption
        txtLeft=""
        txtRight={`dream.com/@${data?.userName}`}
        iconRight={COPPY_CONTENT_ICON}
      />
      <ItemOption txtLeft="Story" txtRight="Add a bio to your profile" />
    </Section>
  );
};

export default Introduce;
