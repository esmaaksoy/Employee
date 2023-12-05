const List = ({person}) => {

  return (
    <>
    {person.map(({name,email,age,image})=>(
  <article className="person">
  <img src={image} alt={name} />
  <div>
    <h4>{name}</h4>
    <p>{email}</p>
    <p>{age} years</p>
  </div>
</article>
    ))}
    
    </>
  );
};

export default List;
