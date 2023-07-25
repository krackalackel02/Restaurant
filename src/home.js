import homeImage from "./Images/home.jpeg";
export default function home() {
	let element = document.createElement("div");
	element.classList.add("home");
	element.innerHTML = `
    <h2 translate="no"> Welcome to Émerveille Château!</h2>
            <div class="home-banner" translate="no">
            Nestled in the heart of a picturesque countryside, Émerveille Château
				invites you to embark on a culinary journey like no other. As you step
				into our charming establishment, you'll be embraced by an ambiance that
				reflects the perfect blend of rustic charm and contemporary elegance.

				<br />
				At Émerveille Château, we take pride in crafting exquisite dishes that
				celebrate the essence of local and seasonal ingredients. Our passionate
				chefs pour their creativity and dedication into every plate, ensuring
				that each bite is a symphony of flavors that delights the senses.

				<br />
				Whether you're looking for a romantic dinner for two, a gathering of
				friends and family, or a quiet escape to savor gastronomic delights, our
				warm and attentive staff is here to make your experience unforgettable.
				From the moment you arrive until the last sip of wine, we strive to
				create cherished memories that linger long after you've left our doors.

				<br />
				We look forward to welcoming you to Émerveille Château, where
				exceptional cuisine and heartfelt hospitality come together to create an
				enchanting dining experience. Join us and indulge in the art of culinary
				magic. Bon appétit!
                <img src="${homeImage}" alt="" />
            </div>
    `;
	return element;
}
