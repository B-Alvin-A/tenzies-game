export default function Die(props){
    return(
        <div className="h-12 w-12 bg-white shadow rounded-md flex items-center justify-center cursor-pointer">
            <h2 className="text-3xl font-bold">{props.value}</h2>
        </div>
    )
}