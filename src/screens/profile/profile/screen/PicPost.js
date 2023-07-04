import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'
import RenderPost from '../components/RenderPost'

const {width, height} = Dimensions.get('screen')

const PicPost = () => {

const data = [
  {
    id: 1,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 2,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 10,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 3,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 4,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 5,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 6,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 7,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 8,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 9,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 11,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 12,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 13,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 14,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  },
  {
    id: 15,
    image: 'https://media.licdn.com/dms/image/D4D03AQFe9vksJNnGiA/profile-displayphoto-shrink_800_800/0/1683797622677?e=2147483647&v=beta&t=jbVEvQ5xMGlW_wzNSt8AiT0Td6C5brUNrdsRAIGfKW4',
    date_of_creation: '01/12/2022',
    total_view: 232,
    total_like: 23821
  }
]
  return (
   <Tabs.FlatList
      data={data}
      numColumns={3}
      renderItem={({item, index})=>(
       <RenderPost item={item} index={index} />
      )}
   />
  )
}

export default PicPost

const styles = StyleSheet.create({
  main_container: {
   backgroundColor: 'red',
   flex: 1,
   zIndex: 2
  }
})