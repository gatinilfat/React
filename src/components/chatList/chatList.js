import List from '@mui/material/List';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Chat } from './chat/chat';
import styles from "./chatList.module.css"

export function ChatList() {

    const [chats] = useState(["chat 1", "chat 2", "chat 3"])
    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <List className={styles.wrapper}>
            {chats.map((chat, index) => (
                <Chat 
                  key={nanoid()}
                  name={chat}
                  selected={selectedIndex === index}
                  handleListItemClick={() => setSelectedIndex(index)}
                  />
            ))}
        </List>
    )
      

}