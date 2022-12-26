//when done, want to use this to have specifics things for specific images


const genericQuipsRaw = 
`What are you looking for?
Are you sure you haven't been here before?
Is this where you remember being?
When is a door not a door?
What is a door, really.
Are you sure that was a door?
What was that?`

const genericQuips  = genericQuipsRaw.split("\n")

getQuipFor = (imageKey)=>{
  return pickFrom(genericQuips);
}