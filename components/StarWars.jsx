// function StarWars() {
//     return (
//         <img
//         className="starwars"
//         name="Yoda"
//         src="src//assets/Yoda.webp"
//         alt="Yoda"
//         width={100}
//         height={100}
//         />
//     )
// }

// export default function StarWarsFan() {
//     return (
//         <StarWars
//             character={{ name: "Yoda"}}
//         />
//     )
// };


  
const StarWars = ({ className = "starwars", src = "src/assets/Yoda.webp", character }) => {
    return (
      <div>
        <img
          className={className}
          name="Yoda"
          src={src}
          alt="Yoda"
          width={100}
          height={100}
        />
        <h3>Name: {character.name}</h3>
      </div>
    );
  };
  
  export default StarWars;