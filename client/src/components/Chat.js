import {Box, Button, TextField, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import uuid from 'react-uuid'
import Message from "./Message";
import axios from "axios";

function Chat({token,question}){
    const inputText = useRef(null)
    const [messages,setMessages] = useState([])
    const [loading,setLoading] = useState(false)
    const prevMessages = []

    const authAxios = axios.create({
        baseURL:'http://localhost:5000/chat',
        headers: {
            token:`${token}`
        }
    })

    useEffect(() => {
        prevMessages.push({"role": "user", "content": question})
        setLoading(true)
        authAxios.post('http://localhost:5000/chat',{
            messages: prevMessages
        }).then(
            response => {
                prevMessages.push(response.data)
                setMessages([...messages,...prevMessages])
                setLoading(false)
            }
        )

    },[])

    const handleClick = () => {
        const text = inputText.current.value
        prevMessages.push({"role": "user", "content": text})
        setLoading(true)
        authAxios.post('http://localhost:5000/chat',{
            messages: prevMessages
        }).then(
            response => {
                prevMessages.push(response.data)
                setMessages([...messages,...prevMessages])
                setLoading(false)
            }
        )

    }

    return (
        <Box
            style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
        }}>

            <Box style={{
                maxHeight:400,
                overFlow:'auto'
            }}>
                <Box>
                    {loading && <Typography sx={{m:3}}>Loading...</Typography>}
                    {messages.map((message) => (
                        <Message key={uuid()} message={message}/>
                    ))}
                </Box>

            </Box>
            <Box style={{
                position:'fixed',
                bottom: 20
            }}>
                <TextField
                    inputRef={inputText}
                    multiline
                    variant='outlined'
                    defaultValue="Brainstorm some ideas:"
                    style={{
                        width:'42em',
                        marginLeft:100,
                        marginRight:10,
                        marginTop:25
                    }}/>
                <Button
                    variant='outlined'
                    onClick={handleClick}
                    style={{
                        width : 100,
                        marginTop:35
                    }}>
                    Submit
                </Button>
            </Box>

        </Box>
    )

}
export default  Chat