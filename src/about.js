export default function about() {
	let element = document.createElement("div");
	element.classList.add("about");
	element.innerHTML = `
    <h2>The Émerveille Château Story</h2>


    Émerveille Château is more than just a restaurant; it is a labor of love
    and a celebration of gastronomic excellence. Nestled amidst the
    picturesque countryside, our journey began with a vision to create a
    culinary sanctuary that would captivate the senses and leave an
    everlasting impression on our guests.

    <br />
    Our story is one of passion, dedication, and creativity. From the moment
    you step into our charming establishment, you become a part of our
    extended family. Each dish on our menu is meticulously crafted to
    showcase the finest local produce, and every detail, from the elegant
    decor to the warm hospitality, is carefully curated to ensure a
    memorable experience.

    <br />
    As we take pride in presenting culinary artistry, we are equally
    committed to sustainability and responsible practices. From supporting
    local farmers to minimizing food waste, we strive to make a positive
    impact on both our community and the environment.

    <br />
    We invite you to be a part of our story—a story of flavors, shared
    moments, and the joy of coming together to savor life's simple
    pleasures. Join us at Émerveille Château, where every meal is a symphony
    of delights, and every guest is cherished.
    
    `;
	return element;
}
