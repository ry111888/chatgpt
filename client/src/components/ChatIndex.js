import {useRef} from "react";
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from "react-router-dom";

function ChatIndex({setQuestion}) {
    const exampleStyle = {
        padding: 10,
        borderRadius: '5px',
        background: "#f8f8f8",
        textAlign: "center",
        marginBottom: 7
    }
    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        textAlign: 'center',
        width: '28%'
    }

    const inputStyle = {
        width: "60%",
        height: 40,
        marginLeft: "20%",
        marginTop: 40,
        border: '1px solid black',
        borderRadius: 10
    }

    const inputText = useRef(null)
    const navigate = useNavigate()

    const handleClick = () => {
        setQuestion(inputText.current.value)
        navigate('/chat')
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column"
        }}>
            <h1 style={{textAlign: "center"}}>ChatGPT</h1>
            <div style={{
                marginLeft: "15%",
                display: 'flex',
                width: '70%',
                height: '50%',
                justifyContent: 'space-around'
            }}>
                <div style={flexStyle}>
                    <h3>Examples</h3>
                    <div style={exampleStyle}>"How do I make an HTTP request in Javascript?"</div>
                    <div style={exampleStyle}>"Got any creative ideas for a 10 year olds' birthday"</div>
                    <div style={exampleStyle}>"How do I make an HTTP request in Javascript?"</div>
                </div>
                <div style={flexStyle}>
                    <h3>Capabilities</h3>
                    <div style={exampleStyle}>Remembers what user said earlier in the conversation</div>
                    <div style={exampleStyle}>Allows user to provide follow-up corrections</div>
                    <div style={exampleStyle}>Trained to decline inappropriate requests</div>
                </div>
                <div style={flexStyle}>
                    <h3>Limitations</h3>
                    <div style={exampleStyle}>May occasionally generate incorrect information</div>
                    <div style={exampleStyle}>May occasionally produce harmful instructions or biased content</div>
                    <div style={exampleStyle}>Limited knowledge of world and events after 2021</div>
                </div>
            </div>
            <div>
                <input ref={inputText} style={inputStyle} type='text'/>
                <SendIcon sx={{ml:2}} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default ChatIndex