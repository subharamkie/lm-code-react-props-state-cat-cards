import Cat from "../data/cat";

interface CatCardProps{
    catObject:Cat
}
const CatCard: React.FC<CatCardProps> = (props) =>{
    return(
 <div className="card">
        <h3 className="card__text card__header">Name:{props.catObject.name}</h3>
        <p className ="card__text">Species:{props.catObject.species}</p>
        <p className="card__text">Favourite Food(s):{props.catObject.favFoods}</p>
        <p className="card__text">Birth Year:{props.catObject.birthYear}</p>
    </div>
);
}

export default CatCard;