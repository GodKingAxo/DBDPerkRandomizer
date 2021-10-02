// Array with every killer and survivor perk image
// Array with description of each 

//Maybe a map with the image as the key and description as the value. Description would have an array within it. [name, description, tagline]

//I am going to put my thoughts here. I was going to link the perk title, images, and description by just using array zero indexing or w/e [0] = bamboozle ect. That might be the easiest way, but its the only way that makes sense to me right now. After I tie those three things, I need to create logic to flip through each image when the dice is clicked and after a delay give the randomized perks, with correct descriptions.
const perks = {
perkTitle: ["Agitation","A Nurses Calling", "Bamboozle"],

perkImages:["killerimgs/Teachable_agitation.png",
"killerimgs/Teachable_aNursesCalling.png",
"killerimgs/Teachable_bamboozle.png",
"killerimgs/Teachable_barbecueAndChilli.png",
"killerimgs/Teachable_beastOfPrey.png",
"killerimgs/Teachable_bloodEcho.png",
"killerimgs/Teachable_bloodhound.png",
"killerimgs/Teachable_bloodWarden.png",
"killerimgs/Teachable_brutalStrength.png",
"killerimgs/Teachable_corruptIntervention.png",
"killerimgs/Teachable_coulrophobia.png",
],

perkDesc: [`You get excited in anticipation of hooking your prey.
While carrying a Survivor, your Movement speed is increased by 6/12/18 % and your Terror Radius is increased by 12 metres.`, `Unlocks potential in your Aura-reading ability.
The Auras of Survivors, who are healing or being healed, are revealed to you when they are within a range of 20/24/28 metres.`]};

console.log(perks.perkImages[0])

const dice = document.getElementById('dice')
const perkImage = document.getElementById('perk-imgs')

const mainImages = document.querySelectorAll('.mainimgs')

const perkInfo = document.querySelectorAll('.perk-info')
perkInfo.innerText = '';
// dice.forEach((die) => {
//     die.addEventListener('click', () => {
//         die.src= perks.perkImages[0];
//         perkInfo.forEach((perk) => {
//             mainImage.addEventListener('click', () => {
//                 perk.innerText = perks.perkDesc
//             })
//         })
//     })
// })
//This will be the core of the program. When the dice is clicked there will be mutliple things happening. It would randomly choose a perk image and after its been chosen maybe (1.5s) it will add the corresponding description to the correct perk.
dice.addEventListener('click', () => {
    mainImages.forEach((mainImage) => {
        mainImage.src = perks.perkImages[0]
    })
    perkInfo.forEach((perk) => {
        perk.innerText = perks.perkDesc[0]
    })
})
console.log(perks.perkTitle[0])
console.log(perks.perkDesc[0])