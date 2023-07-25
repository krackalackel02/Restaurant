export default function menu() {
	let element = document.createElement("div");
	element.classList.add("menu");
	element.innerHTML = `
    <h2>Experience the Culinary Symphony at Émerveille Château!</h2>
    Welcome to our carefully crafted menu, where each dish is a harmonious
    blend of flavors, textures, and artistry. Our passionate chefs draw
    inspiration from the finest seasonal ingredients to create a dining
    experience that tantalizes the taste buds and warms the soul.

    <br />
    Indulge in an array of delectable starters, each a prelude to the
    symphony of flavors that await. From our signature Émerveille Salad, a
    symphony of fresh greens and tangy vinaigrette, to the delicate Lobster
    Bisque, every dish is a masterpiece.

    <br />
    Prepare your senses for an orchestra of main courses, featuring
    succulent meats, exquisite seafood, and vibrant vegetarian options.
    Savor the richness of our Truffle-Crusted Filet Mignon, the delicate
    harmony of our Seared Scallops, or the comforting notes of our Wild
    Mushroom Risotto.

    <br />
    No symphony is complete without a grand finale, and our desserts are no
    exception. Delight in the velvety melodies of our Chocolate Symphony
    Cake or the refreshing sweetness of our Citrus Panna Cotta.

    <br />
    Join us at Émerveille Château for an unforgettable dining experience
    that celebrates the artistry of culinary mastery. Let us take you on a
    journey of flavors that will linger in your heart long after the last
    bite.
    `;
	return element;
}
