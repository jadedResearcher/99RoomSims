//when done, want to use this to have specifics things for specific images


const genericQuipsRaw = 
`What are you looking for?
Are you sure you haven't been here before?
Is this where you remember being?
When is a door not a door?
What is a door, really.
Are you sure that was a door?
What was that?`

const genericHallwayQuipsRaw = 
`How far do you think these hallways go?
Ever forward, that's how you make progress. Right?`

const genericRoomQuipsRaw = 
`Have you been in this room before?
Was this always a room?
Wasn't...wasn't this a hallway before?`

const genericQuips  = genericQuipsRaw.split("\n")
const genericRoomQuips  = genericRoomQuipsRaw.split("\n")
const genericHallwayQuips  = genericHallwayQuipsRaw.split("\n")


getQuipFor = (imageKey,currently_room)=>{
  if(Math.random() > 0.5){
    return currently_room? pickFrom(genericRoomQuips) : pickFrom(genericHallwayQuips);
  }
  return pickFrom(genericQuips);
}