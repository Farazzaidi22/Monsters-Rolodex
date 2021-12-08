import './card.styles.css'

export const Card = props => {
   // console.log(props)
    return (
        <div className='card-container'>
            <img
                alt='monster'
                src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`}/>
            <h2> {props.monster.name} </h2>
        </div>
    )
}