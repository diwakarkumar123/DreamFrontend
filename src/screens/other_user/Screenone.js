import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';
import { diamond } from '../../configs/source';
import RenderPost from './RenderPost.js';
const Screenone = () => {
    const data = [
        {
            id: 1,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 2,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 3,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 4,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 5,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 6,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 7,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 8,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 9,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 10,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 11,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
        {
            id: 12,
            img: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
            diamond_icon: diamond,
            text_foll: '1600M',
            date: '01.12.2022',
            right_icon: 'caretright',
            play: '192k',
            share_icon: 'share',
            share_text: '200k',
        },
    ];
    return (
        <View>
            <Tabs.FlatList
                data={data}
                numColumns={3}
                renderItem={({ item, index }) => <RenderPost item={item} index={index} />}
            />
        </View>

    );
};

export default Screenone;

const styles = StyleSheet.create({});