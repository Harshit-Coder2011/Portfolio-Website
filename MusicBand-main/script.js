function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const toggle = document.querySelector('.toggle');
    navLinks.style.maxHeight = navLinks.style.maxHeight ? null : navLinks.scrollHeight + "px";
    toggle.classList.toggle('open');
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
const lyrics = {
    s1: {
        title: "Midnight City",
        text: `Waiting in the car,
Waiting for the ride in the dark,
At night the city grows,
Look at the horizon glow,
Waiting in the car,
Waiting for the ride in the dark,
Drinking in the lounge,
Following the neon signs,
Waiting for a word,
Looking at the milky skyline,
The city is my church,
It wraps me in its blinding twilight,
Waiting in the car,
Waiting for the ride in the dark,
Waiting in the car,
Waiting for the ride in the dark,
Waiting in the car,
Waiting for the ride in the dark,
Waiting in the car,
Waiting for the ride in the dark.`
    },
    s2: {
        title: "Unforgettable",
        text: `Oh yeah,  
Yeah, yeah, yeah, uh,  

I found you,  
Girl, I like being around you,  
Feel like Kanye, I'm Bound 2,  
Shawty, if you down, I'm down too,  
Yeah, I found you,  
Girl, I like being around you,  
Feel like Kanye, I'm Bound 2,  
Shawty, if you down, I'm down too,  

High class, shawty so bad,  
Hella swag, she got all these bitches mad,  
She the type of girl a nigga wish he had,  
She the type that if you get her, you can brag,  
Little shawty got her own and I like that,  
Hit the mall, she ain't worried 'bout a price tag,  
She got all these niggas out here tryna wife that,  
And a lil' nigga tryna pipe that,  
She can get whatever she want,  
She can get that new Saint Laurent,  
I could put that Rollie on her arm,  
And I can get the bracelet with the charm,  

I found you,  
Girl, I like being around you,  
Feel like Kanye, I'm Bound 2,  
Shawty, if you down, I'm down too,  
Yeah, I found you,  
Girl, I like being around you,  
Feel like Kanye, I'm Bound 2,  
Shawty, if you down, I'm down too,  
`
    },
    s3: {
        title: "Blinding Lights",
        text: `Yeah,
I've been tryna call,
I've been on my own for long enough,
Maybe you can show me how to love, maybe,
I'm going through withdrawals,
You don't even have to do too much,
You can turn me on with just a touch, baby,
I look around and,
Sin City's cold and empty (oh),
No one's around to judge me (oh),
I can't see clearly when you're gone,
I said, ooh, I'm blinded by the lights,
No, I can't sleep until I feel your touch,
I said, ooh, I'm drowning in the night,
Oh, when I'm like this, you're the one I trust,
(Hey, hey, hey),
I'm running out of time,
'Cause I can see the sun light up the sky,
So I hit the road in overdrive, baby, oh,
The city's cold and empty (oh),
No one's around to judge me (oh),
I can't see clearly when you're gone,
I said, ooh, I'm blinded by the lights,
No, I can't sleep until I feel your touch,
I said, ooh, I'm drowning in the night,
Oh, when I'm like this, you're the one I trust,
I'm just walking by to let you know (by to let you know),
I can never say it on the phone (say it on the phone),
Will never let you go this time (ooh),
I said, ooh, I'm blinded by the lights,
No, I can't sleep until I feel your touch,
(Hey, hey, hey),
I said, ooh, I'm blinded by the lights,
No, I can't sleep until I feel your touch.`
    },
    s4: {
        title: "We Will Rock You",
        text: `Buddy, you're a boy, make a big noise,  
Playing in the street, gonna be a big man someday,  
You got mud on your face, you big disgrace,  
Kicking your can all over the place, singin',  
We will, we will rock you,  
We will, we will rock you,  
Buddy, you're a young man, hard man,  
Shouting in the street, gonna take on the world someday,  
You got blood on your face, you big disgrace,  
Waving your banner all over the place,  
We will, we will rock you, sing it,  
We will, we will rock you,  
Buddy, you're an old man, poor man,  
Pleading with your eyes, gonna make you some peace someday,  
You got mud on your face, big disgrace,  
Somebody better put you back into your place,  
We will, we will rock you, sing it,  
We will, we will rock you, everybody,  
We will, we will rock you, hmm,  
We will, we will rock you,  
Alright.`
    },
    s5: {
        title: "Heatwaves",
        text: "Road shimmer wigglin' the vision\nHeat, heat waves, I'm swimmin' in a mirror\nRoad shimmer wigglin' the vision\nHeat, heat waves, I'm swimmin' in a\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nUsually I put somethin' on TV\nSo we never think about you and me\nBut today I see our reflections\nClearly in Hollywood, layin' on the screen\nYou just need a better life than this\nYou need somethin' I can never give\nFake water all across the road\nIt's gone now, the night has come, but\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nYou can't fight it, you can't breathe\nYou say something so lovin', but\nNow I gotta let you go\nYou'll be better off in someone new\nI don't wanna be alone\nYou know it hurts me too\nYou look so broken when you cry\nOne more and then I say goodbye\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nI just wonder what you're dreamin' of\nWhen you sleep and smile so comfortable\nI just wish that I could give you that\nThat look that's perfectly un-sad\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nHeat waves been fakin' me out\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nSometimes, all I think about is you\nLate nights in the middle of June\nHeat waves been fakin' me out\nCan't make you happier now\nRoad shimmer wigglin' the vision\nHeat, heat waves, I'm swimmin' in a mirror\nRoad shimmer wigglin' the vision\nHeat, heat waves, I'm swimmin' in a mirror\n"},
    s6: {
        title: "Sunflower",
        text: "Ayy ayy ayy ayy (ooh)\nOoh\n ooh ooh ooh (ooh)\nAyy ayy Ooh ooh ooh ooh Needless to say\n I keep her in check\nShe was a bad-bad\n nevertheless (yeah)\nCallin' it quits now\n baby\n I'm a wreck (wreck)\nCrash at my place\n baby\n you're a wreck (wreck)\nNeedless to say\n I'm keeping her in check\nShe was all bad-bad\n nevertheless\nCallin' it quits now\n baby\n I'm a wreck\nCrash at my place\n baby\n you're a wreck\nThinkin' in a bad way\n losin' your grip\nScreamin' at my face\n baby\n don't trip\nSomeone took a big L\n don't know how that felt\nLookin' at you sideways\n party on tilt\nOoh-ooh-ooh\nSome things you just can't refuse\nShe wanna ride me like a cruise\nAnd I'm not tryna lose\nThen you're left in the dust\nUnless I stuck by ya\nYou're the sunflower\nI think your love would be too much\nOr you'll be left in the dust\nUnless I stuck by ya\nYou're the sunflower\nYou're the sunflower\nEvery time I'm leavin' on you (ooh)\nYou don't make it easy\n no (no\n no)\nWish I could be there for you\nGive me a reason to\n oh (oh)\nEvery time I'm walkin' out\nI can hear you tellin' me to turn around\nFightin' for my trust and you won't back down\nEven if we gotta risk it all right now\n oh (now)\nI know you're scared of the unknown ('known)\nYou don't wanna be alone (alone)\nI know I always come and go (and go)\nBut it's out of my control\nAnd you'll be left in the dust\nUnless I stuck by ya\nYou're the sunflower\nI think your love would be too much\nOr you'll be left in the dust\nUnless I stuck by ya\nYou're the sunflower\nYou're the sunflower (yeah)\nsunflower"

    }
};

function showLyrics() {
    const select = document.getElementById('song-select');
    const selectedSong = select.value;

    const lyricsDisplay = document.getElementById('lyrics-display');
    const songTitle = document.getElementById('song-title');
    const songLyrics = document.getElementById('song-lyrics');

    if (selectedSong) {
        const song = lyrics[selectedSong];
        songTitle.textContent = song.title;
        songLyrics.innerHTML = song.text // Replace comma with comma + line break
        lyricsDisplay.style.display = 'block';
    } else {
        lyricsDisplay.style.display = 'none';
    }
}


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
    } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    }
}