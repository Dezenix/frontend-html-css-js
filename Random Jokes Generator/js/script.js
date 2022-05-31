const jokesArr = [
    `"I'm afraid for the calendar. Its days are numbered."`,
    `"My wife said I should do lunges to stay in shape. That would be a big step forward."`,
    `"Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!"`,
    `"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera."`,
    `"What do a tick and the Eiffel Tower have in common?" "They're both Paris sites."`,
    `"What do you call a fish wearing a bowtie?" "Sofishticated."`,
    `"How do you follow Will Smith in the snow?" "You follow the fresh prints."`,
    `"If April showers bring May flowers, what do May flowers bring?" "Pilgrims."`,
    `"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along."`,
    `"What did the ocean say to the beach? Nothing, it just waved."`,
    `"Dear Math, grow up and solve your own problems."`,
    `"What did the janitor say when he jumped out of the closet?" "Supplies!"`,
    `"Have you heard about the chocolate record player? It sounds pretty sweet."`,
    `"Why do seagulls fly over the ocean?" "Because if they flew over the bay, we'd call them bagels."`,
    `"I only know 25 letters of the alphabet. I don't know y."`,
    `"How does the moon cut his hair?" "Eclipse it."`,
    `"What did one wall say to the other?" "I'll meet you at the corner."`,
    `"What did the zero say to the eight?" "That belt looks good on you."`,
    `"Where do fruits go on vacation?" "Pear-is!"`,
    `"I asked my dog what's two minus two. He said nothing."`,
    `"What did Baby Corn say to Mama Corn?" "Where's Pop Corn?"`,
    `"What's the best thing about Switzerland?" "I don't know, but the flag is a big plus."`,
    `"What does a sprinter eat before a race?" "Nothing, they fast!"`,
    `"What has more letters than the alphabet?" "The post office!"`,
    `"Dad, did you get a haircut?" "No, I got them all cut!"`,
    `"I don't trust stairs. They're always up to something."`
]
const button = document.querySelector('button')
const pEl = document.querySelector('p')

button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * jokesArr.length)
    pEl.innerText = jokesArr[random]
})