import { useStateValue } from './StateProvider';

const chat = ({messages}) => {
    const [{user},dispatch] = useStateValue()
    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', { 
            message: input, name:user.displayName,
            timeStamp: new Date().toUTCString(),
            received: true
        })
        
        SelectInput("")
    }
}