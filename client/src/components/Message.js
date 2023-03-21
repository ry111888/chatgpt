import {Box, Typography} from "@mui/material";

function Message({message}) {
    const user = (message.role === 'user') ? true : false
    return (
        <Box>
        <Box>
            {user && <Box sx={{
                m: 3,
                display: 'flex',
            }}>
                <Typography sx={{
                    ml: 2,
                    height: 25,
                    bgcolor: 'primary.light'
                }}>{`${message.role}:`}</Typography>

                <Typography sx={{
                    ml: 2,
                }}>
                    {message.content}
                </Typography>
            </Box>}

        </Box>
        <Box>
            {!user && <Box sx={{
                p: 3,
                display: 'flex',
                bgcolor: 'grey.200'
            }}>
                <Typography sx={{
                    ml: 2,
                    height: 25,
                    bgcolor: 'primary.light'
                }}>{`${message.role}:`}</Typography>

                <Typography sx={{
                    ml: 2,
                }}>
                    {message.content}
                </Typography>
            </Box>}
        </Box>
        </Box>
    )
}

export default Message