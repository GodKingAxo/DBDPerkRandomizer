// Array with every killer and survivor perk: images, title, description
//Actual easiest way is the create a class and instantiate each perk. After make it into an array.

//Still need to add a delay to perks showing up and a little flipping animation like in slots for the images.

//Future ideas:
//Add a killer randomizer ontop of the perk randomizer.
//Killer randomizer would include a killer card, information about the killer, price, backstory, and maybe in-game skill difficulty. Ontop of that I could add an addon randomizer and an offering randomizer. And maybe even cosmetic randomizer too?


//PROBLEMS THAT NEED ADDRESSING:
//Will most likely need to fix the sizing, because when the window is smaller the whole app looks bad. Need to add media queries and make them size appropriately for mobile and smaller/larger screens

class Perk {
    constructor(title, image, desc) {
        this.title = title
        this.image = image
        this.desc = desc
    }
}
const Agitation = new Perk("Agitation","killerimgs/Teachable_agitation.png",`You get excited in anticipation of hooking your prey.
While carrying a Survivor, your Movement speed is increased by 6/12/18 % and your Terror Radius is increased by 12 metres.`)

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
const DarkDevotion = new Perk("Dark Devotion","killerimgs/Teachable_darkDevotion.png", "The display of your Powers creates a whirlwind of panic that spreads throughout the land.You become obsessed with one Survivor Hitting the Obsession with a Basic Attack causes them to emit a Terror Radius of 32 metres for the next 20/25/30 seconds. You are granted the Undetectable Status Effect. The Obsession hears their own Terror Radius. You can only be obsessed with one Survivor at a time.")
const Deadlock = new Perk("Deadlock", "killerimgs/Teachable_deadlock.png", "You induce mental suffering by crushing any hope of escape. Whenever a Generator is completed, The Entity blocks the Generator with the most progression for 20/25/30 seconds. The Aura of the blocked Generator is revealed to you in white during this time.")
const DeadManSwitch = new Perk("Dead Man's Switch","killerimgs/Teachable_deadMansSwitch.png", "You become obsessed with one Survivor. After hooking the Obsession, Dead Man's Switch activates for the next 35/40/45 seconds. While activated, any Survivor that stops repairing a Generator before it is fully repaired causes The Entity IconHelp entity.png to block the Generator until Dead Man's Switch's effect ends. Affected Generators are highlighted by a white Aura You can only be obsessed with one Survivor at a time.")
const Deathbound = new Perk("Deathbound", "killerimgs/Teachable_deathbound.png","Those whose lives are intertwined in darkness are destined to suffer together When a Survivor heals another Survivor for the equivalent of 1 Health State at least 32 metres away from you, that Survivor will scream, revealing their location and activating Deathbound: For the next 60 seconds, that Survivor suffers from the Oblivious Status Effect when farther than 16/12/8 metres away from the healed Survivor.")
const Deerstalker = new Perk("Deerstalker","killerimgs/IconPerks_deerstalker.png","Unlocks potential in your Aura-reading ability.The Auras of Survivors who are in the Dying State are revealed to you when they are within a range of 20/28/36 metres.")
const Discordance = new Perk("Discordance","killerimgs/Teachable_discordance.png","Any Generator within a range of 64/96/128 metres that is being repaired by 2 or more Survivors is marked by a yellow Aura. When the Generator is first highlighted, Discordance triggers a Loud Noise notification on the Generator. After the Generator is no longer within range or is being repaired by just 1 Survivor, the highlighted Aura will linger for another 4 seconds.")
const Distressing = new Perk("Distressing", "killerimgs/IconPerks_distressing.png", "Your horrifying emanation strikes at a supernaturally long distance. Your Terror Radius IconHelp terrorRadius.png is increased by 22/24/26 %. Distressing grants 100 % bonus Bloodpoints for actions in the Deviousness Category. The bonus Bloodpoints are only awarded during the Trial.")
const DragonsGrip = new Perk("Dragon's Grip","killerimgs/Teachable_dragonsGrip.png","After kicking a Generator, for the next 30 seconds, the first Survivor interacting with it will scream, revealing their location for 4 seconds, and suffers from the Exposed Status Effect for 60 seconds. Dragon's Grip has a cool-down of 120/100/80 seconds.")
const DyingLight = new Perk("Dying Light","killerimgs/Teachable_dyingLight.png"," You become obsessed with one Survivor. Each time you hook a Survivor other than your Obsession, you gain 1 Token: For as long as the Obsession is alive, all other Survivors suffer from a stack-able 2/2.5/3 % penalty to Repairing, Healing, and Sabotaging speeds per Token, up to a maximum of 22/27.5/33 % or 11 Tokens. The Obsession is unaffected by this penalty and instead granted a permanent 33 % Action Speed bonus to Unhooking and Healing other Survivors.")
const Enduring = new Perk("Enduring","killerimgs/Teachable_enduring.png","You are resilient to pain. The duration of Pallet Stuns is reduced by 40/45/50 %.")
const Eruption = new Perk("Eruption","killerimgs/Teachable_eruption.png","After kicking a Generator, its Aura is highlighted in yellow. When you put a Survivor into the Dying State, every affected Generator explodes and starts regressing, removing the highlighted Aura Applies an immediate 6 % Progression penalty. Any Survivor repairing a Generator when it explodes will scream and suffer from the Incapacitated Status Effect for 12/14/16 seconds. Eruption has a cool-down of 30 seconds.")
const Fearmonger = new Perk("Fearmonger", "killerimgs/Teachable_mindbreaker.png","Your distressing presence drains and weakens your prey. Whenever a Survivor is repairing a Generator, they suffer from the Blindness and Exhausted Status Effects. If the Survivor is already Exhausted, their Status Effect's timer will be paused. Both Status Effects lingers for 3/4/5 seconds after stopping to repair.")
const FireUp = new Perk("Fire Up","killerimgs/Teachable_fireUp.png","Each time a Generator is completed, Fire Up grows in power. Gain a stack-able 3/3.5/4 % Action Speed bonus to picking-up and dropping Survivors, breaking Pallets and Breakable Walls, damaging Generators, and vaulting Windows, up to a maximum of 15/17.5/20 %.")
const ForcedPenance = new Perk("Forced Penance", "killerimgs/Teachable_forcedPenance.png","Survivors who take a Protection Hit suffer from the Broken Status Effect for the next 60/70/80 seconds.")
const FranklinsDemise = new Perk("Franklin's Demise", "killerimgs/Teachable_franklinsDemise.png", "Your vicious Basic Attacks make Survivors drop their regular Items or Limited Items on impact. If not recovered within 150/120/90 seconds, the lost Items will have their Charges depleted by The Entity. The Auras of lost Items are revealed to you within 32 metres and slowly fade from white to red as the timer elapses.")
const FurtiveChase = new Perk("Furtive Chase", "killerimgs/Teachable_furtiveChase.png","You become obsessed with one Survivor. You lurk in the shadows, eliminating your victims one by one. Each time you hook your Obsession, you gain 1 Token, up to a maximum of 2/3/4 Tokens: While in a Chase, your Terror Radius is reduced by 4 metres per accumulated Token When a Survivor rescues the Obsession from the Hook, that Survivor will become the new Obsession. All accumulated Tokens are lost when Obsession is sacrificed or killed. You can only be obsessed with one Survivor at a time.")
const Gearhead = new Perk("Gearhead","killerimgs/Teachable_gearhead.png","After hitting a Survivor twice with your Basic Attack, Gearhead activates for 20/25/30 seconds. Each time a Survivor succeeds a Good Skill Check while repairing, the Generator will be revealed by a yellow Aura for as long as it continues being repaired.")
const HangmansTrick = new Perk("Hangman's Trick", "killerimgs/Teachable_hangmansTrick.png", "Unlocks potential in your Aura-reading ability and your ingenious modifications to Hooks alert you of tampering. Gain a Loud Noise notification whenever a Survivor begins sabotaging a Hook. While carrying a Survivor, see the Aura of any Survivor within 2/4/6 metres of any Hook.")
const hexBloodFavour = new Perk("Hex: Blood Favour", "killerimgs/Teachable_hexBloodFavour.png", "Hitting a Survivor with either your Basic Attack or Special Attack prompts The Entity to hold all Pallets IconHelp pullDown.png within a radius of 24/28/32 metres from your location in place for the next 15 seconds, preventing Survivors from pulling them down. The Hex effects persist as long as the related Hex Totem is standing.")
const hexCrowdControl = new Perk("Hex: Crowd Control", "killerimgs/Teachable_hexCrowdControl.png","Survivors who perform a rushed vault through a Window prompt The Entity to block it for the next 14/17/20 seconds.")
const hexDevourHope = new Perk("Hex: Devour Hope", "killerimgs/Teachable_hexDevourHope.png", "Each time a Survivor is rescued from a Hook when you are at least 24 metres away, Devour Hope receives 1 Token: 2 Tokens: 10 seconds after hooking a Survivor, gain a 3/4/5 % Haste Status Effect for the next 10 seconds. 3 Tokens: Survivors suffer permanently from the Exposed Status Effect. 5 Tokens: You are granted the ability to kill all Survivors by your own hand.")
const hexHauntedGround = new Perk("Hex: Haunted Ground", "killerimgs/Teachable_hexHauntedGround.png", "Two trapped Hex Totems will spawn in the Trial Grounds. When either Hex Totem is cleansed, all Survivors suffer from the Exposed Status Effect for 40/50/60 seconds. The second Hex Totem will immediately turn into a Dull Totem.")
const hexHuntressLullaby = new Perk("Hex: Huntress Lullaby","killerimgs/Teachable_hexHuntressLullaby.png", "Survivors receive a 2/4/6 % Regression penalty on Failed Skill Checks for Repair and Healing actions. Hex: Huntress Lullaby grows in power each time you hook a Survivor, gaining 1 Token, and affecting Repair and Healing Skill Checks: 1 Token: shortens the time between the Warning sound and the Skill Check by -14 %. 2 Tokens: shortens the time between the Warning sound and the Skill Check by -28 %. 3 Tokens: shortens the time between the Warning sound and the Skill Check by -42 %. 4 Tokens: shortens the time between the Warning sound and the Skill Check by -56 %. 5 Tokens: disables the Warning sound.")
const hexNOED = new Perk("Hex: No One Escapes Death", "killerimgs/IconPerks_hexNoOneEscapesDeath.png", "Once the Exit Gates are powered and there is at least one Dull Totem remaining in the Trial Grounds, Hex: No One Escapes Death activates and lights the Totem: Your Movement speed is increased by 2/3/4 %. Survivors suffer from a permanent Exposed Status Effect. Hex: No One Escapes Death remains inactive if no Dull Totems are available.")
const hexPlaything = new Perk("Hex: Plaything", "killerimgs/Teachable_hexPlaything.png", "If there is at least one Dull Totem remaining in the Trial Grounds, Hex: Plaything activates on a random Totem each time a Survivor is hooked for the first time: The Survivors suffers from the Cursed and Oblivious Status Effects until Hex: Plaything is cleansed. For the first 90 seconds, only the Cursed Survivor is able to cleanse the Hex Totem. The Aura of Hex: Plaything's Hex Totem is revealed to the Cursed Survivor within 24/20/16 metres.")
const hexRetribution = new Perk("Hex: Retribution", "killerimgs/Teachable_hexRetribution.png", "Survivors cleansing any Totem suffer from the Oblivious Status Effect for 35/40/45 seconds. After cleansing a Hex Totem IconHelpLoading totem.png, the Auras of all Survivors are revealed to you for 15 seconds.")
const hexRuin = new Perk("Hex: Ruin", "killerimgs/Teachable_hexRuin.png", "All Generators automatically regress at 100/150/200 % of the normal Regression speed whenever they are not being repaired.")
const hexTheThirdSeal = new Perk("Hex: The Third Seal", "killerimgs/Teachable_hexTheThirdSeal.png", "The last 2/3/4 Survivors hit with either your Basic Attack or Special Attack suffer from the Blindness Status Effect.")
const hexThrilloftheHunt = new Perk("Hex: Thrill of the Hunt","killerimgs/IconPerks_hexThrillOfTheHunt.png", "For each Totem remaining in the Trial Grounds, Hex: Thrill of the Hunt gains 1 Token. Survivors suffer from a stack-able 8/9/10 % Action Speed Penalty per Token to Cleansing and Blessing, up to a maximum of 40/45/50 %. Hex: Thrill of the Hunt grants a stack-able 10 % bonus Bloodpoints for actions in the Hunter Category per Token, up to a maximum of 50 %.")
const hexUndying = new Perk("Hex: Undying", "killerimgs/Teachable_hexUndying.png", "The Auras of Survivors within 2/3/4 metres of any Dull Totem are revealed to you. When another Perk's Hex Totem IconHelpLoading totem.png is cleansed, its Hex is transferred to the Hex: Undying Totem, including any accumulated Tokens, disabling Hex: Undying instead." )
const Hoarder = new Perk("Hoarder", "killerimgs/Teachable_hoarder.png", "Hoarder triggers a Loud Noise notification for 4 seconds, whenever a Survivor performs any of the following actions within 32/48/64 metres of you: Unlocks a Chest Picks up any Item, including Limited Items. Hoarder spawns 2 additional Chests in the Trial.")
const Hysteria = new Perk("Hysteria", "killerimgs/Teachable_hysteria.png", "Whenever you put a healthy Survivor into the Injured State, all injured Survivors suffer from the Oblivious Status Effect for 20/25/30 seconds. Hysteria has a cool-down of 30 seconds.")
const ImAllEars = new Perk("I'm All Ears", "killerimgs/Teachable_imAllEars.png", "Any Survivor performing a rushed action within 48 metres of your location has their Aura revealed to you for 6 seconds. I'm All Ears can only be triggered once every 60/50/40 seconds.")
const InfectiousFright = new Perk("Infectious Fright", "killerimgs/Teachable_infectiousFright.png", "Whenever a Survivor is put into the Dying State by any means, all other Survivors within your Terror Radius will scream and reveal their current location to you for 4/5/6 seconds.")
const Insidious = new Perk("Insidious", "killerimgs/IconPerks_insidious.png", "After standing still for 4/3/2 seconds, you are granted the Undetectable Status Effect until you act or move again.")
const IronGrasp = new Perk("Iron Grasp", "killerimgs/IconPerks_ironGrasp.png", "While carrying a Survivor:The Survivor's Struggle Effects from Wiggling, causing you to strafe sideways, are reduced by 75 %. The time for the Survivor to wiggle free from your grasp is increased by 4/8/12 %.")
const IronMaiden = new Perk("Iron Maiden", "killerimgs/Teachable_ironMaiden.png","You open Lockers 30/40/50 % faster. Survivors who exit Lockers suffer from the Exposed Status Effect for 30 seconds and their location is revealed to you for 4 seconds.")
const Jolt = new Perk("Jolt", "killerimgs/Teachable_surge.png", "When you put a Survivor into the Dying State IconHelp dying.png with your Basic Attack, all Generators within 32 metres of you instantly explode and start regressing. Applies an immediate 8 % Progression penalty. Jolt has a cool-down of 60/50/40 seconds.")
const KnockOut = new Perk("Knock Out", "killerimgs/Teachable_knockOut.png", "When putting a Survivor into the Dying State with your Basic Attack: Their Aura is not revealed to any Survivor farther away from them than 32/24/16 metres. For the next 15 seconds, the dying Survivor suffers from a decreased Field of View, the Blindness Status Effect, and crawls 50 % slower.")
const LethalPursuer = new Perk("Lethal Pursuer", "killerimgs/Teachable_lethalPursuer.png", "At the start of the Trial, the Auras of all Survivors are revealed to you for 7/8/9 seconds.")
const Lightborn = new Perk("Lightborn", "killerimgs/Teachable_lightborn.png", "The Auras IconHelp auras.png of Survivors attempting to blind you with a Flashlight are revealed to you for 6/8/10 seconds. Lightborn grants immunity from being blinded by Flashlights, Firecrackers, Flashbangs, or Blast Mines.")
const MadGrit = new Perk("Mad Grit", "killerimgs/Teachable_madGrit.png", "While carrying a Survivor, you suffer no cool-down on missed attacks. Successfully hitting a Survivor will pause the carried Survivor's Wiggling Progression for 2/3/4 seconds.")
const MakeYourChoice = new Perk("Make Your Choice", "killerimgs/Teachable_makeYourChoice.png", "Each time a Survivor is rescued from a Hook when you are at least 32 metres away, Make Your Choice activates:The Rescuer suffers from the Exposed Status Effect for the next 40/50/60 seconds Make Your Choice has a cool-down of 40/50/60 seconds.")
const MonitorAndAbuse = new Perk("Monitor & Abuse", "killerimgs/Teachable_monitorAndAbuse.png", "Your base Terror Radius is increased by 8 metres. Whenever you are outside of a Chase, your Terror Radius is reduced by 16 metres while your Field of View is increased by 3/5/10 °. Field of View gains do not stack.")
const MonstrousShrine = new Perk("Monstrous Shrine", "killerimgs/IconPerks_monstrousShrine.png", "The Basement Hooks possess the following benefits: Hook Progression is accelerated by 3/6/9 %. Self-Unhook difficulty is increased by 5/10/15 %. Self-Unhook penalty is increased by 3/6/9 %.")
const Nemesis = new Perk("Nemesis", "killerimgs/Teachable_nemesis.png", "Each time a Survivor blinds you or stuns you using a Pallet or Locker, they become your new Obsession: The Survivor suffers from the Oblivious Status Effect for 40/50/60 seconds and their Aura is revealed to you for 4 seconds.")
const NoWayOut = new Perk("No Way Out", "killerimgs/Teachable_noWayOut.png", "For each Survivor you hook for the first time, No Way Out gains 1 Token. Once the Exit Gates have been powered, No Way Out activates: When a Survivor interacts with an Exit Gate Switch, you receive a Loud Noise notification and The Entity blocks both Exit Gate Switches for 12 seconds and an additional 6/9/12 seconds per Token in your possession, up to a combined maximum of 36/48/60 seconds.")
const Oppression = new Perk("Oppression", "killerimgs/Teachable_oppression.png", "When damaging a Generator, up to 3 other random Generators also begin regressing. Triggers a difficult Skill Check if the selected Generators are currently being repaired. Oppression has a cool-down of 120/100/80 seconds.")
const Overcharge = new Perk("Overcharge", "killerimgs/Teachable_overcharge.png","Damaging a Generator overcharges it: The next Survivor interacting with it will be faced with a difficult Skill Check. Failing the Skill Check results in an additional Progression loss of 3/4/5 %. Succeeding the Skill Check does not grant any bonus Progression.")
const OverwhelmingPresence = new Perk("Overwhelming Presence","killerimgs/Teachable_overwhelmingPresence.png", "Survivors within your Terror Radius suffer from inefficiency: When using an Item, its Depletion rate is increased by 80/90/100 %.")
const PlaywithYourFood = new Perk("Play with Your Food", "killerimgs/Teachable_playWithYourFood.png", "Each time you chase your Obsession  and let them escape, Play with Your Food receives 1 Token, up to a maximum of 3 Tokens: Each Token applies a stack-able 3/4/5 % Haste  Status Effect, up to a maximum of 9/12/15 %. Performing Basic Attacks, or Special Attacks that can damage Survivors, consumes 1 Token. Play with Your Food has a cool-down of 10 seconds on Token-accumulation.")
const PopGoestheWeasel = new Perk("Pop Goes the Weasel", "killerimgs/Teachable_popGoesTheWeasel.png", "After hooking a Survivor, Pop Goes the Weasel activates for the next 35/40/45 seconds: The next Generator you damage instantly loses 25 % Progression. Regular Generator Regression applies afterwards and Pop Goes the Weasel deactivates.")
const Predator = new Perk("Predator", "killerimgs/Teachable_predator.png", "The Scratch Marks left by Survivors spawn slightly/moderately/considerably closer together.")
const Rancor = new Perk("Rancor", "killerimgs/Teachable_rancor.png", "Each time a Generator is completed: Your Aura is revealed to the Obsession for 5/4/3 seconds. All Survivors' locations are revealed to you for 3 seconds.Once all Generators are completed: The Obsession suffers from a permanent Exposed Status Effect. You are granted the ability to kill the Obsession by your own hand.")
const RememberMe = new Perk("Remember Me", "killerimgs/Teachable_rememberMe.png", "Each time you hit your Obsession with a Basic Attack, Remember Me gains 1 Token: The Opening time of both Exit Gates is increased by 4 seconds per Token, up to a maximum of 8 additional/12 additional/16 additional seconds. The Obsession is unaffected by this penalty.")
const STBFL = new Perk("Save the Best for Last", "killerimgs/Teachable_saveTheBestForLast.png", "Each time you hit your Obsession with a Basic Attack, Save the Best for Last loses 4/3/2 Tokens. When the Obsession is sacrificed or killed, you can neither gain nor lose any more Tokens.")
const ScourageHookGiftofPain = new Perk("Scourage Hook: Gift of Pain", "killerimgs/Teachable_scourgeHookGiftOfPain.png", "When a Survivor is unhooked from a Scourge Hook they suffer from the Haemorrhage and Mangled Status Effects. Both Status Effects are removed upon being healed Upon being healed, the Survivor suffers from a 7/8/9 % Healing and Repairing Action Speed penalty until they are injured again.")
const Shadowborn = new Perk("Shadowborn", "killerimgs/Teachable_shadowborn.png", "Your Field of View is increased by 9/12/15 °Field of View gains do not stack.")
const SloppyButcher = new Perk("Sloppy Butcher", "killerimgs/IconPerks_sloppyButcher.png", "Wounds inflicted by Basic Attacks cause Survivors to suffer from the Haemorrhage and Mangled Status Effects: Haemorrhage increases the Survivor's Bleeding frequency by 50/75/100 %. Both Status Effects are removed once the Survivor is fully healed.")
const SpiesfromtheShadows = new Perk("Spies from the Shadows","killerimgs/IconPerks_spiesFromTheShadows.png", "Crows found throughout the Trial Grounds can communicate directly with you. Crows startled by Survivors within 20/28/36 metres alert you with a Loud Noise notification. Spies from the Shadows has a cool-down of 5 seconds between alerts.")
const SpiritFury = new Perk("Spirit Fury", "killerimgs/Teachable_spiritFury.png", "Each Pallet you break magnifies the wrath of The Entity. After breaking 4/3/2 Pallets, the next time you are stunned by a Pallet, The Entity  will instantly break it. You still suffer from the Stun penalty.")
const Starstruck = new Perk("Starstruck", "killerimgs/Teachable_starstruck.png", "When carrying a Survivor, Starstruck activates: Survivors suffer from the Exposed Status Effect while in your Terror Radius The Status Effect lingers for 26/28/30 seconds after leaving your Terror Radius. After hooking or dropping the carried Survivor, Starstruck deactivates: The Status Effect persists for 26/28/30 seconds for any Survivor inside your Terror Radius at that moment. Starstruck has a cool-down of 60 seconds once the Survivor is no longer being carried.")
const Stridor = new Perk("Stridor", "killerimgs/Teachable_stridor.png", "All Survivors' Grunts of Pain are 25/50/50 % louder and their regular breathing is 0/0/25 % louder.")
const Surveillance = new Perk("Surveillance", "killerimgs/Teachable_surveillance.png", "Unlocks potential in your Aura-reading ability. The Auras of regressing Generators are highlighted in white. If the Regression process is interrupted on a Generator, its Aura will be highlighted in yellow for 8/12/16 seconds. Surveillance increases the audible range of Survivors' Generator-repairing noises by 8 metres.") 
const TerritorialImperative = new Perk("Territorial Imperative", "killerimgs/Teachable_territorialImperative.png", "Unlocks potential in your Aura-reading ability. The Aura of a Survivor entering the Basement when you are at least 32 metres away is revealed to you for 3 seconds. Territorial Imperative has a cool-down of 30/25/20 seconds.")
const Thanatophobia = new Perk("Thanatophobia", "killerimgs/Teachable_thanatophobia.png", "Each injured, dying, or hooked Survivor incurs a stack-able 4/4.5/5 % penalty to all Survivors' Repairing, Sabotaging, and Cleansing Action speeds, up to a maximum of 16/18/20 %.")
const ThrillingTremors = new Perk("Thrilling Tremors", "killerimgs/Teachable_thrillingTremors.png", "After picking up a Survivor, all Generators currently being repaired by Survivors are blocked by The Entity for the next 16 seconds. The Auras of blocked Generators are highlighted to you in white. Thrilling Tremors has a cool-down of 100/80/60 seconds.")
const Tinkerer = new Perk("Tinkerer", "killerimgs/Teachable_tinkerer.png", "Whenever a Generator is repaired to 70 %, it triggers a Loud Noise notification and you are granted the Undetectable Status Effect for the next 12/14/16 seconds.")
const TrailofTorment = new Perk("Trail of Torment", "killerimgs/Teachable_trailOfTorment.png", "After kicking a Generator, you are granted the Undetectable Status Effect until that Generator stops regressing or you damage a Survivor by any means. The Aura of that Generator is revealed to all Survivors in yellow. Trail of Torment has a cool-down of 80/70/60 seconds.")
const UnnervingPresence = new Perk("Unnerving Presence", "killerimgs/Teachable_unnervingPresence.png", "Your presence alone instils great fear. For all Survivors repairing or healing within your Terror Radius: Skill Check Trigger odds are increased by 10%. Skill Check Success zones are reduced by 40/50/60 %.")
const Unrelenting = new Perk("Unrelenting", "killerimgs/IconPerks_unrelenting.png", "You recuperate faster from missed attacks made with your main weapon. The Cool-down on missed Basic Attacks is reduced by 20/25/30 %.")
const Whispers = new Perk("Whispers", "killerimgs/IconPerks_whispers.png", "Sporadically hear the whispers of The Entity IconHelp entity.png when a Survivor is within 48/40/32 metres of your location.")
const ZanshinTactics = new Perk("Zanshin Tactics", "killerimgs/Teachable_zanshinTactics.png", "The Auras of Breakable Walls, Pallets, and Windows are revealed to you within 24/28/32 metres.")

const perks = [Agitation, ANursesCalling, Bamboozle, BBQAndChilli, BeastOfPrey, BitterMurmur, BloodEcho, BloodWarden, Bloodhound, BrutalStrength, Claustrophobia, CorruptIntervention,Coulrophobia, CoupDeGrace, DarkDevotion, Deadlock, DeadManSwitch, Deathbound, Deerstalker, Discordance, Distressing, DragonsGrip, DyingLight, Enduring, Eruption, Fearmonger, FireUp, ForcedPenance, FranklinsDemise, FurtiveChase, Gearhead, HangmansTrick, hexBloodFavour, hexCrowdControl, hexDevourHope, hexHuntressLullaby, hexNOED, hexPlaything, hexRetribution, hexRuin, hexTheThirdSeal, hexThrilloftheHunt, hexUndying, Hoarder, Hysteria, ImAllEars, InfectiousFright, Insidious, IronGrasp, IronMaiden, Jolt, KnockOut, LethalPursuer, Lightborn, MadGrit, MakeYourChoice, MonitorAndAbuse, MonstrousShrine, Nemesis, NoWayOut, Oppression, Overcharge, OverwhelmingPresence, PlaywithYourFood, PopGoestheWeasel, Predator, Rancor, RememberMe, STBFL, ScourageHookGiftofPain, Shadowborn, SloppyButcher, SpiesfromtheShadows, SpiritFury, Starstruck, Stridor, Surveillance, TerritorialImperative, Thanatophobia, ThrillingTremors, Tinkerer, TrailofTorment, UnnervingPresence, Unrelenting, Whispers, ZanshinTactics]
const dice = document.getElementById('dice')
const pSelf = document.getElementById("self-destro")
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')

dice.addEventListener('click', () => {
    pSelf.innerHTML = ''
    randomPerk(p1)
    randomPerk(p2)
    randomPerk(p3)
    randomPerk(p4)
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
    const perkOneTitle = p1.childNodes[1].childNodes[3].childNodes[1].textContent
    const perkTwoTitle = p2.childNodes[1].childNodes[3].childNodes[1].textContent
    const perkThreeTitle = p3.childNodes[1].childNodes[3].childNodes[1].textContent
    const perkFourTitle = p4.childNodes[1].childNodes[3].childNodes[1].textContent
    // console.log(perkOneTitle)
    // console.log(perkTwoTitle)
    if(perkOneTitle === perkTwoTitle){
        randomPerk(p1) 
        randomPerk(p2) 
        console.log("same title")}
    if(perkOneTitle === perkThreeTitle) {
        randomPerk(p1)
        randomPerk(p3)
    }
    if(perkOneTitle === perkFourTitle) {
        randomPerk(p1)
        randomPerk(p4)
    }
    if(perkTwoTitle === perkThreeTitle) {
        randomPerk(p2)
        randomPerk(p3)
    }
    if(perkTwoTitle === perkFourTitle) {
        randomPerk(p2)
        randomPerk(p4)
    }
    if(perkThreeTitle === perkFourTitle) {
        randomPerk(p3)
        randomPerk(p4)
    }
    
}