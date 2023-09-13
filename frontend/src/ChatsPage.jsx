import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
  '13108800-6dcc-468f-9eb6-65f5cd318c29',
  props.user.username, 
  props.user.secret
  );
    return ( 
    <div style={{height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ backgroundColor: 'black', height: '100%'}} />
    </div>
    )
  }

  export default ChatsPage;