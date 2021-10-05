// Array with every killer and survivor perk image
// Array with description of each 

//Maybe a map with the image as the key and description as the value. Description would have an array within it. [name, description, tagline]

//I am going to put my thoughts here. I was going to link the perk title, images, and description by just using array zero indexing or w/e [0] = bamboozle ect. That might be the easiest way, but its the only way that makes sense to me right now. After I tie those three things, I need to create logic to flip through each image when the dice is clicked and after a delay give the randomized perks, with correct descriptions.

//Actual easiest way is the create a class and instantiate each perk. After make it into an array.

class Perk {
    constructor(title, image, desc) {
        this.title = title
        this.image = image
        this.desc = desc
    }
}
const Agitation = new Perk("Agitation","killerimgs/Teachable_agitation.png",`You get excited in anticipation of hooking your prey.
While carrying a Survivor, your Movement speed is increased by 6/12/18 % and your Terror Radius is increased by 12 metres.`)
console.log(Agitation)

const ANursesCalling = new Perk('A Nurses Calling', "killerimgs/Teachable_aNursesCalling.png", `Unlocks potential in your Aura-reading ability. The Auras of Survivors, who are healing or being healed, are revealed to you when they are within a range of 20/24/28 metres.`)

const Bamboozle = new Perk("Bamboozle", "killerimgs/Teachable_bamboozle.png","Performing a Vault action is 5/10/15 % faster and calls upon The Entity to block that Vault location for Survivors for 8/12/16 seconds.")

const BBQAndChilli = new Perk("Barbecue & Chilli","killerimgs/Teachable_barbecueAndChilli.png", "After hooking a Survivor, all other Survivors' auras are revealed to you for 4 seconds when they are farther than 40 metres from the. Each time a Survivor is hooked for the first time, gain a stack-able 25 % bonus to all Bloodpoint gains, up to a maximum of 50/75/100 %.")
const BeastOfPrey = new Perk("Beast of Prey","killerimgs/Teachable_beastOfPrey.png", "Upon gaining the Bloodlust Status Effect, Beast of Prey activates: Grants the Undetectable Status Effect for as long as Bloodlust is active. Beast of Prey grants 30/40/50 % bonus Bloodpoints for actions in the Hunter Category.")
const BitterMurmur = new Perk("Bitter Murmur", "killerimgs/IconPerks_bitterMurmur.png", "Unlocks potential in your aura-reading ability.Each time a Generator is completed, the auras of Survivors who are within 16 metres of the completed Generator will be revealed to you for 5 seconds.When the last Generator is completed, the Auras of all Survivors are shown for 5/7/10 seconds.")
const BloodEcho = new Perk("Blood Echo", "killerimgs/Teachable_bloodEcho.png", "When hooking a Survivor, all other injured Survivors suffer from the Haemorrhage Status Effect until healed and the Exhausted Status Effect for 45 seconds. Blood Echo can only be triggered once every 80/70/60 seconds.")
const BloodWarden = new Perk("Blood Warden", "killerimgs/Teachable_bloodWarden.png", "As soon as at least one Exit Gate is opened, Blood Warden activates The auras of Survivors standing within the Exit-Gate area are revealed to you. Once per Trial, hooking a Survivor while Blood Warden is active calls upon The Entity to block the exits for all Survivors for 30/40/60 seconds.")
const Bloodhound = new Perk("Bloodhound","killerimgs/Teachable_bloodhound.png","Like a hunting scent hound, you smell traces of blood at a great distance. Pools of Blood are shown in bright red and can be tracked for 2/3/4 seconds longer than normal." )
const BrutalStrength = new Perk("Brutal Strength","killerimgs/Teachable_brutalStrength.png", "Your great strength allows you to shred through your prey's defences. Breaking Pallets and Breakable Walls, as well as damaging Generators, is 10/15/20 % faster.")
const Claustrophobia = new Perk("Claustrophobia","killerimgs/Teachable_cruelLimits.png", "Whenever a Generator is completed, all Windows and Vault locations within 32 metres of it become blocked for all Survivors for the next 20/25/30 seconds.The Auras of the blocked Vault locations are revealed to you for the duration.")
const CorruptIntervention = new Perk("Corrupt Intervention","killerimgs/Teachable_corruptIntervention.png","Your prayers invoke a dark power that meddles with the Survivors' chances of survival. At the start of the Trial, the 3 Generators located farthest from you are blocked by The Entity for 80/100/120 seconds.")
const Coulrophobia = new Perk("Coulrophobia", "killerimgs/Teachable_coulrophobia.png","Your presence alone instils great fear. The Healing speed of Survivors within your Terror Radius is reduced by 30/40/50 %.")
const CoupDeGrace = new Perk("Coup de Grâce", "killerimgs/Teachable_coupDeGrace.png","As the end nears, you go in for the kill.Each time a Generator is completed, Coup de Grâce grows in power and you gain 1 Token. Consume 1 Token to increase the distance of your next Lunge Attack by 40/50/60 %.")

console.log(ANursesCalling)
const allPerks = [Agitation, ANursesCalling]
console.log(allPerks[0])
const perks = {
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
]}

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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }