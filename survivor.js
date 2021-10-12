class Perk {
    constructor(title, image, desc) {
        this.title = title
        this.image = image
        this.desc = desc
    }
}
const aceInTheHole = new Perk("Ace in the Hole", "survivorimgs/Teachable_aceInTheHole.png", "When retrieving an Item from a Chest, there is a chance an Add-on will be attached to it. 100% chance for an Add-on of Very Rare Rarity or lower. 10/25/50 % chance for a second Add-on of Uncommon Rarity or lower. Ace in the Hole allows you to keep any Add-ons your Item has equipped upon escaping.")
const Adrenaline = new Perk("Adrenaline", "survivorimgs/Teachable_adrenaline.png", "When the Exit Gates are powered, instantly heal one Health State and sprint at 150 % of your normal Running speed for 5 seconds. Adrenaline is on hold if you are disabled at the moment it triggers and will instead activate upon being freed. If playing against The Nightmare, Adrenaline will wake you from the Dream World upon activation. Adrenaline ignores an existing Exhaustion timer, but causes the Status Effect for 60/50/40 seconds.")
const Aftercare = new Perk("Aftercare", "survivorimgs/Teachable_aftercare.png", "You see the Aura of the last 1/2/3 Survivor(s): You have rescued from a Hook, or who have rescued you from a Hook. You have completed a Healing action on, or who have completed a Healing action on you. They also see your Aura.All effects of Aftercare are reset upon being hooked by the Killer.")
const Alert = new Perk("Alert", "survivorimgs/Teachable_alert.png", "Whenever the Killer destroys a Pallet or a Breakable Wall, or damages a Generator, their Aura is revealed to you for 3/4/5 seconds.")
const anyMeansNecessary = new Perk("Any Means Necessary", "survivorimgs/Teachable_anyMeansNecessary.png", "You see the Auras of dropped Pallets. Press and hold the Active Ability button for 4 seconds while standing beside a dropped Pallet to reset it to its upright position. Any Means Necessary has a cool-down of 100/80/60 seconds.")
const Appraisal = new Perk("Appraisal", "survivorimgs/Teachable_appraisal.png", "Start the Trial with 3 Tokens: When a Chest has already been opened, consume 1 Token to rummage through it for an Item. Rummage through Chests 40/60/80 % faster. Rummaging is only available once per Chest.")
const Autodidact = new Perk("Autodidact", "survivorimgs/Teachable_autodidact.png", "You start the Trial with a -25 % Progression penalty for Skill Checks to heal Survivors. For every successful Skill Check completed while healing a Survivor, Autodidact gains 1 Token up to a maximum of 3/4/5 Tokens. Each Token grants a +15 % bonus Progression for a successful Skill Check while healing Survivors. Great Skill Checks cannot be performed while using Autodidact. Autodidact is not active when using a Med-Kit to heal.")
const Babysitter = new Perk("Babysitter", "survivorimgs/Teachable_babysitter.png", "When you unhook a Survivor, the rescued Survivor will leave neither Scratch Marks nor Pools of Blood for the next 4/6/8 seconds. Both you and the Killer see each other's Aura for 4 seconds.")
const balancedLanding = new Perk("Balanced Landing", "survivorimgs/Teachable_balancedLanding.png", "When falling from great heights: Your Stagger duration is reduced by 75 % and your grunts are muffled by 100 %. Upon landing, you start sprinting at 150 % of your normal running speed for a maxiumum of 3 seconds. Balanced Landing causes the Exhausted Status Effect for 60/50/40 seconds. Balanced Landing cannot be used when Exhausted.")
const betterTogether = new Perk("Better Together", "survivorimgs/Teachable_betterTogether.png", "   While repairing a Generator, its Aura is revealed in yellow to all other Survivors located within 32 metres. If the Killer downs a Survivor while you are repairing a Generator, you see the Auras of all other Survivors for 8/9/10 seconds.")
const biteTheBullet = new Perk("Bite the Bullet", "survivorimgs/Teachable_biteTheBullet.png", "When healing yourself or another Survivor, Grunts of Pain and all noises related to the Healing action are suppressed: Failed Healing Skill Checks do not trigger a Loud Noise Notification and only apply a Regression penalty of 3/2/1 %.")
const blastMine = new Perk("Blast Mine", "survivorimgs/Teachable_blastMine.png","After repairing Generators for a total of 66 %, Blast Mine activates: After repairing a Generator for at least 3 seconds, press the Ability button to install a Trap, which stays active for 35/40/45 seconds. The Aura of Trapped Generators are revealed in yellow to all Survivors. When the Killer damages a Trapped Generator, the Trap explodes, stunning them and blinding anyone nearby. Blast Mine deactivates after triggering successfully.")
const bloodPact = new Perk("Blood Pact", "survivorimgs/Teachable_bloodPact.png","When you or the Obsession are injured, you both see each other's Auras. After healing the Obsession or being healed by the Obsession, you both gain the Haste Status Effect, moving at an increased speed of 5/6/7 % until you are no longer within 16 metres of each other. If you are the Obsession, Blood Pact deactivates. Increases the odds of being the Obsession by 100%. The Killer can only be obsessed with one Survivor at a time.")
const boilOver = new Perk("Boil Over", "survivorimgs/Teachable_boilOver.png", "While being carried by the Killer: Your Struggle Effects from Wiggling, causing the Killer to strafe sideways, are increased by 25/50/75 %. You obscure the Killer's ability to read the Auras of all Hooks within 10/12/14 metres of your pick-up location.")
const Bond = new Perk("Bond", "survivorimgs/Teachable_bond.png", "Unlocks potential in your Aura-reading ability. The Auras of other Survivors are revealed to you when they are within a range of 20/28/36 metres.")
const boonCircleofHealing = new Perk("Boon: Circle of Healing", "survivorimgs/Teachable_boonCircleOfHealing.png", "Press and hold the Active Ability button near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out within a radius of 28 metres. Survivors inside the Boon Totem's range benefit from the following effects: 90/95/100 % bonus to all Healing Speeds. Unlocks the Self-Care ability, allowing to self-heal without needing a Med-Kit at 50 % of the normal Healing speed. Also benefits from the Healing Speed bonus, boosting the Self-Healing speed to 95/97.5/100 %.")
const boonShadowStep = new Perk("Boon: Shadow Step", "survivorimgs/Teachable_boonShadowStep.png", "Press and hold the Active Ability button near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out within a radius of 28 metres. Survivors inside the Boon Totem's range benefit from the following effects: Scratch Marks are suppressed. Auras are hidden from The Killer. Both effects linger for 2/3/4 seconds after leaving the Boon Totem's range. You can only bless one Totem at a time. All equipped Boon Perks are active on the Same Boon Totem.")
const borrowedTime = new Perk("Borrowed Time", "survivorimgs/Teachable_borrowedTime.png", "For 10/15/20 seconds after unhooking a Survivor, the unhooked Survivor is protected by the Endurance Status Effect. Any damage taken that would put the Survivor into the Dying State will instead trigger the Deep Wound Status Effect, after which the Survivor has 20 seconds to Mend themselves. Taking damage while under the effect of Deep Wound or if its timer runs out will put the Survivor into the Dying State.")
const botanyKnowledge = new Perk("Botany Knowledge", "survivorimgs/Teachable_botanyKnowledge.png", "Healing speeds, as well as the efficiency of Med-Kits, are increased by 11/22/33 %.")
const Breakdown = new Perk("Breakdown", "survivorimgs/Teachable_breakdown.png", "Each time you are unhooked or unhook yourself, the Hook breaks and the Killer's Aura is revealed to you for 4/5/6 seconds. A Hook broken by Breakdown takes 180 seconds to respawn.")
const Breakout = new Perk("Breakout", "survivorimgs/Teachable_breakout.png", "When within 6 metres of a carried Survivor, you gain the Haste Status Effect, moving at an increased speed of 5/6/7 %. The carried Survivor's Wiggling speed is increased by 20 %.")
const buckleUp = new Perk("Buckle Up","survivorimgs/Teachable_buckleUp.png", "You can determine the Recovery progress of dying Survivors by the intensity of their Aura at a distance of 48 metres away. When healing another Survivor from the Dying State to the Injured State, the Killer's Aura is revealed to the both of you for 4/5/6 seconds.")
const builtToLast = new Perk("Built to Last", "survivorimgs/Teachable_builtToLast.png", "Hiding inside a Locker for 14/13/12 seconds while carrying a depleted Item will replenish its Charges to 99 %. Each use of Built to Last reduces this percentage by -33 %.")
const calmSpirit = new Perk("Calm Spirit", "survivorimgs/Teachable_calmSpirit.png", "The chances of alerting nearby Crows are reduced by 80/90/100 % and your urge to scream from pain is suppressed.")
const Camaraderie = new Perk("Camaraderie", "survivorimgs/Teachable_camaraderie.png", "While you are on the Hook in the Struggle Phase, Camaraderie activates: If another Survivor is within 16 metres of your Hook while Camaraderie is active, the Struggle Phase timer is paused for 26/30/34 seconds.")
const Clairvoyance = new Perk("Clairvoyance", "survivorimgs/Teachable_clairvoyance.png", "Whenever you cleanse a Totem, Clairvoyance activates: When empty-handed, press and hold the Active Ability button to unlock your full Aura-reading potential, allowing you to see the Auras  of the Exit Gate Switches, Generators, Hooks, and Chests IconHelp chests.png within 64 metres for 8/9/10 seconds.")
const Counterforce = new Perk("Counter Force", "survivorimgs/Teachable_conterforce.png", "You cleanse Totems 20 % faster. Gain another, stack-able 20 % Cleansing Speed bonus per cleansed Totem. After cleansing a Totem, the Aura of the Totem farthest from you is revealed to you for 2/3/4 seconds.")
const danceWithMe = new Perk("Dance with Me", "survivorimgs/Teachable_danceWithMe.png", "When performing a rushed action to vault a Window or leave a Locker, you will not leave any Scratch Marks for the next 3 seconds. Dance With Me has a cool-down of 60/50/40 seconds.")
const darkSense = new Perk("Dark Sense", "survivorimgs/IconPerks_darkSense.png", "Unlocks potential in your Aura-reading ability. Each time a Generator is completed, the Killer's Aura is revealed to you for 5 seconds and for 5/7/10 seconds when the last Generator is completed.")
const deadHard = new Perk("Dead Hard", "survivorimgs/Teachable_deadHard.png", "When Injured, tap into your adrenaline bank and dash forward quickly to avoid damage. Press the Active Ability button while running to dash forward. Avoid any damage during the Dash. Dead Hard causes the Exhausted Status Effect for 60/50/40 seconds. Dead Hard cannot be used when Exhausted.")
const Deception = new Perk("Deception", "survivorimgs/Teachable_deception.png", "Interact with a Locker while holding the Sprint button to trigger a Loud Noise Notification for the killer at your location instead of entering the Locker. You will not leave any Scratch Marks or Pools of Blood for the next 3 seconds Deception can only be triggered once every 60/50/40 seconds.")
const decisiveStrike = new Perk("Decisive Strike", "survivorimgs/Teachable_decisiveStrike.png", "After being unhooked or unhooking yourself, Decisive Strike activates for the next 40/50/60 seconds: When being grabbed or picked up by the Killer, succeed a Skill Check to automatically escape their grasp, stunning them for 5 seconds. Successfuly stunning the Killer will disable Decisive Strike for the remainer of the Trial and result you in becoming the Obsession. While Decisive Strike is active, the following interactions will deactivate it: Repairing a Generator. Healing yourself or other Survivors. Cleansing or blessing a Totem. Sabotaging a Hook. Unhooking other Survivors. Increases the odds of being the Obsession by 100 %. The Killer can only be obsessed with one Survivor at a time.")
const Deliverance = new Perk("Deliverance", "survivorimgs/Teachable_deliverance.png", "After performing a Safe Hook Rescue on another Survivor, Deliverance activates: Your Self-Unhook attempts will succeed 100 % of the time. Deliverance causes the Broken Status Effect for 100/80/60 seconds after unhooking yourself.")
const desperateMeasures = new Perk("Desperate Measures", "survivorimgs/Teachable_desperateMeasures.png", "Increases Healing and Unhooking speeds by 10/12/14 % for each injured, hooked, or dying Survivor, up to a maximum of 40/48/56 %.")
const detectivesHunch = new Perk("Detectives Hunch", "survivorimgs/Teachable_detectivesHunch.png", "Each time a Generator is completed, the Auras of any Generators IconHelpLoading generators.png, Chests, and Totems within 32/48/64 metres are revealed to you for 10 seconds. If you are holding a Map IconItems map.png, any objects revealed by Detective's Hunch will automatically be tracked by it.")
const Distortion = new Perk("Distortion", "survivorimgs/Teachable_distortion.png", "You start the trial with 3 Tokens. Whenever the Killer attempts to read your Aura, Distortion activates and a Token is consumed: Your Aura will not be shown to the Killer and you will not leave any Scratch Marks for the next 6/8/10 seconds. Distortion does not activate when you are in the Dying State or in a Killer Trap.")


const perks = []
const dice = document.getElementById('dice')
const pSelf = document.getElementById("self-destro")
const p1 = document.getElementById('p1s')
const p2 = document.getElementById('p2s')
const p3 = document.getElementById('p3s')
const p4 = document.getElementById('p4s')

dice.addEventListener('click', () => {
    pSelf.innerHTML = ''
    randomPerk(p1s)
    randomPerk(p2s)
    randomPerk(p3s)
    randomPerk(p4s)
    perkChecker()
})
function randomPerk(perk) {
    var item = perks[Math.floor(Math.random()*perks.length)];
    perk.innerHTML = `
    <div class="perk-tip">
    <img
      class="mainimgs"
      id="perk-imgs"
      src="${item.image}"
    />
    <div class="perk-info">
      <h1 class="title" id="perk-title">${item.title}</h1>
      <p>${item.desc}</p>
    </div>
  </div>
</div>`
}
function perkChecker(){
    const perkOneTitle = p1s.childNodes[1].childNodes[3].childNodes[1].textContent
    const perkTwoTitle = p2s.childNodes[1].childNodes[3].childNodes[1].textContent
    const perkThreeTitle = p3s.childNodes[1].childNodes[3].childNodes[1].textContent
    const perkFourTitle = p4s.childNodes[1].childNodes[3].childNodes[1].textContent
    // console.log(perkOneTitle)
    // console.log(perkTwoTitle)
    if(perkOneTitle === perkTwoTitle){
        randomPerk(p1s) 
        randomPerk(p2s) 
        console.log("same title")}
    if(perkOneTitle === perkThreeTitle) {
        randomPerk(p1s)
        randomPerk(p3s)
    }
    if(perkOneTitle === perkFourTitle) {
        randomPerk(p1s)
        randomPerk(p4s)
    }
    if(perkTwoTitle === perkThreeTitle) {
        randomPerk(p2s)
        randomPerk(p3s)
    }
    if(perkTwoTitle === perkFourTitle) {
        randomPerk(p2s)
        randomPerk(p4s)
    }
    if(perkThreeTitle === perkFourTitle) {
        randomPerk(p3s)
        randomPerk(p4s)
    }
    
}