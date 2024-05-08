import { useState } from "react";
import SingleCharacter from "./SingleCharacter";
import AddCharacterForm from "./AddCharacterForm";


function NewCharacter() {
    const characters = [
        {
            id:1,
            first:"Kazuma",
            last:"Kiryu",
            img:"Kiryu_Y0.webp",
            desc:`"Kazuma Kiryu (Japanese: 桐生 一馬, Hepburn: Kiryū Kazuma) is a fictional character and the initial main protagonist of Sega's action-adventure beat 'em up Japanese role-playing game series Yakuza / Like a Dragon. He is popularly known as "the Dragon of Dojima" (堂島の龍, Dōjima no Ryū) due to the tattoo of a dragon on his back and him originally being a fearsome member of the yakuza group known as the Dojima Family, a subsidiary of the Tojo Clan."`,
        },
        {
            id:2,
            first:"GIR",
            last:"",
            img:"Gir_mouth_open.webp",
            desc:`"GIR (G Information Retrieval Unit) He is the hyperactive robotic assistant of Zim and the closest thing the incompetent Irken has to a friend, having been constructed from scrap parts by the Almighty Tallest just before it was handed to Zim, instead of a regular SIR (Standard-issue Information Retrieval) Unit."`,
        },
        {
            id:3,
            first:"Goro",
            last:"Majima",
            img:"yakuza-0-release-date-set-for-january-1469635416610.webp",
            desc:`"Goro Majima (Japanese: 真島 吾朗, Hepburn: Majima Gorō) is a major recurring character in Sega's Like a Dragon video game series, previously known as Yakuza outside of Japan. He is one of the main playable protagonists of Yakuza 0 and Yakuza: Dead Souls, as well as the Majima Saga of Yakuza Kiwami 2. Introduced as a member of the Tojo Clan and patriarch of its subsidiary group, the Majima Family as well as second-in-command of the Shimano Family, nicknamed "Mad Dog of Shimano""`,
        },
        {
            id:4,
            first:"Zim",
            last:"",
            img:"Zim.yelling.svg",
            desc:`"Zim is a member of the alien Irken race and a former Irken Invader; however, since his actions usually lead to disaster (having nearly destroyed the Irken homeworld during Operation Impending Doom) his leaders, the Almighty Tallest, banished him to Foodcourtia. While there, however, Zim heard of Operation Impending Doom II, and - obviously not understanding the purpose of his previous exile - "quit being banished" and ventured to Conventia in the hope of getting an assignment. Chagrined, the Almighty Tallest sent him on a "secret mission" to Earth, in order to keep him occupied and away from the real Operation Impending Doom II."`,
        },
        {
            id:5,
            first:"Patrick",
            last:"Star",
            img:"Patrick_Star.svg.png",
            desc:"Patrick is the ignorant but humorous best friend of SpongeBob SquarePants. He is portrayed as being an overweight pink starfish, who serves as the village idiot of the underwater city of Bikini Bottom.",
        },
    ]

    const [currentCharacter, setCurrentCharacter] = useState(characters);

    const characterItems = currentCharacter.map((character) => (
        <SingleCharacter key={character.id} {...character}/>
      ));

      const handleAddCharacter = (newCharacter) => {
        newCharacter.id = currentCharacter.length + 1; // unreliable but succinct
        setCurrentCharacter([...currentCharacter, newCharacter]);
      };


      return (
        <>
{/* heading for Form */}
<div
        className="container text-center border rounded bg-primary-subtle border-primary-subtle"
        id="formdiv"
        
      >
        <h1>Create a character</h1>
        <AddCharacterForm onAddCharacter={handleAddCharacter}></AddCharacterForm>
      </div>


      {/* <!-- Heading for cards --> */}
    <div className="text-center m-3">
      <h2>Created Characters</h2>
    </div>
        

    {/* <!-- output of card --> */}
    <div
      id="characteroutput"
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4"
    >{characterItems}</div>
        
        </>
      )

}


export default NewCharacter