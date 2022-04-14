const PetCard = (pet) => {
    <li className="otherPet">
    <h3>Name: {pet.name}</h3>
    <p>Type: {pet.type}</p>
    <p className="img"><img src={pet.imgageUrl} alt="pet" /></p>
    <a className="button" href={`/details/${pet._id}`}>Details</a>
</li>
}

export default PetCard;