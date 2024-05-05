class Character {
    constructor(id, first, last, img, desc) {
      this.id = id;
      this.first = first;
      this.last = last;
      this.img = img;
      this.desc = desc;
    }
  }


const newCharacter = [
    new Character(
      1,
      "Kazuma",
      "Kiryu",
      "Kiryu_Y0.webp",
      `"Kazuma Kiryu (Japanese: 桐生 一馬, Hepburn: Kiryū Kazuma) is a fictional character and the initial main protagonist of Sega's action-adventure beat 'em up Japanese role-playing game series Yakuza / Like a Dragon. He is popularly known as "the Dragon of Dojima" (堂島の龍, Dōjima no Ryū) due to the tattoo of a dragon on his back and him originally being a fearsome member of the yakuza group known as the Dojima Family, a subsidiary of the Tojo Clan."`
    ),
    new Character(
      2,
      "GIR",
      "",
      "Gir_mouth_open.webp",
      `"GIR (G Information Retrieval Unit) He is the hyperactive robotic assistant of Zim and the closest thing the incompetent Irken has to a friend, having been constructed from scrap parts by the Almighty Tallest just before it was handed to Zim, instead of a regular SIR (Standard-issue Information Retrieval) Unit."`
    ),
    new Character(
      3,
      "Goro",
      "Majima",
      "yakuza-0-release-date-set-for-january-1469635416610.webp",
      `"Goro Majima (Japanese: 真島 吾朗, Hepburn: Majima Gorō) is a major recurring character in Sega's Like a Dragon video game series, previously known as Yakuza outside of Japan. He is one of the main playable protagonists of Yakuza 0 and Yakuza: Dead Souls, as well as the Majima Saga of Yakuza Kiwami 2. Introduced as a member of the Tojo Clan and patriarch of its subsidiary group, the Majima Family as well as second-in-command of the Shimano Family, nicknamed "Mad Dog of Shimano""`
    ),
    new Character(
      4,
      "Zim",
      "",
      "Zim.yelling.svg",
      `"Zim is a member of the alien Irken race and a former Irken Invader; however, since his actions usually lead to disaster (having nearly destroyed the Irken homeworld during Operation Impending Doom) his leaders, the Almighty Tallest, banished him to Foodcourtia. While there, however, Zim heard of Operation Impending Doom II, and - obviously not understanding the purpose of his previous exile - "quit being banished" and ventured to Conventia in the hope of getting an assignment. Chagrined, the Almighty Tallest sent him on a "secret mission" to Earth, in order to keep him occupied and away from the real Operation Impending Doom II."`
    ),
    new Character(
      5,
      "Patrick",
      "Star",
      "Patrick_Star.svg.png",
      "Patrick is the ignorant but humorous best friend of SpongeBob SquarePants. He is portrayed as being an overweight pink starfish, who serves as the village idiot of the underwater city of Bikini Bottom."
    ),
  ];

const characterItems = newCharacter.map((character))

function OneCharacter({}) {

    return (
        // <!-- template for card-->
        <div id="list-template">
          <div
            class="listitem container text-center card border rounded bg-primary-subtle border-primary-subtle"
          >
            <div class="listnum"></div>
            <h5 class="tempfname card-title"></h5>
            <h5 class="templname card-title"></h5>
            <img class="tempimage card-img-top img-fluid" />
            <div class="tempdesc card-text"></div>
            <button id="removeBtn" onclick="removecurrentitem(this)">Remove</button>
            <button id="editBtn" onclick="getvalue(this)">Edit</button>
          </div>
        </div>
    )
}

export {newCharacter, Character}