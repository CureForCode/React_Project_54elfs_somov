import "./styles.css";

function Card() {
  const character = {
    avatarURL: "https://citaty.info/files/characters/636.jpg",
    name: "Homer",
    surname: "Simpson",
    age: 40,
    job: "Factory worker",
    hobby: "Eating donuts",
  };

  return (
    <div className="characterCard">
      <img src={character.avatarURL} alt="Homer Simpson" className="avatarCharacter" />
      <h2>
        {character.name} {character.surname}
      </h2>
      <p>Age: {character.age}</p>
      <p>Job: {character.job}</p>
      <p>Hobby: {character.hobby}</p>
    </div>
  );
}

export default Card;
