export default function Die(props){
    const bgColor = {
        backgroundColor: props.isHeld ? 'green' : 'white'
    }
    return(
        <div    className="h-12 w-12 shadow rounded-md flex items-center justify-center cursor-pointer" 
                style={bgColor}
                onClick={props.holdDice}>
            <h2 className="text-3xl font-bold">{props.value}</h2>
        </div>
    )
}