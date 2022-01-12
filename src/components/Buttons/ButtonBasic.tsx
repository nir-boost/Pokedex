import { Button } from "./style"

type props ={
title: string,
functionToDo: void
}


const ButtonBasic = (props: props) =>{
    const {functionToDo, title} = props

    return (<Button>
            {title}
    </Button>)
}

export default ButtonBasic