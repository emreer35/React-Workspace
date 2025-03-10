import {  Divider, Stack } from "@mui/material"

const MuiStack = () => {
    // const Item =styled(Paper)(({theme}) => ({
    //     backgroundColor: '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',

    // }))
  return (
    <div>
        <Stack direction={"row"} spacing={0.5} divider={<Divider orientation="vertical" flexItem className="text-amber-300"/>}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </Stack>
    </div>
  )
}

export default MuiStack