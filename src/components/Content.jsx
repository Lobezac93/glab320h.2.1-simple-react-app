

export default function Content(props){
    return (
        <div>
            <img src={props.imgUrl} alt={props.alt}/>
            <p style={{color:props.color}}>{props.text}</p>
        </div>
        
    )
}