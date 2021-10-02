// Array with every killer and survivor perk image
// Array with description of each 

//Maybe a map with the image as the key and description as the value. Description would have an array within it. [name, description, tagline]
var description = [
"killerimgs/Teachable_agitation.png",
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
];
var size = description.length;
$('.perk-tip img').each(function() {
  var x = Math.floor(size * Math.random()); //move random inside loop
  if ($(this).hasClass("mainimgs")) { //replace "img" with "this"
    $(this).attr("src", description[x]);
  }
});