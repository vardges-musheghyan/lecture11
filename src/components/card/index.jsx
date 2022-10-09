import './styles.css';

function Card( { src, checked, onCheckChange } ){

    return (
        <div className="CardContainer" >
            <img
                className="CardImage"
                src={src} />
            <input onChange={onCheckChange}
                   checked={checked}
                   className="CardInput" type="checkbox"/>
        </div>
    )


}

export default Card;

















