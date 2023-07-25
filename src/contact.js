export default function contact() {
	let element = document.createElement("div");
	element.classList.add("contact");
	element.innerHTML = `
    <h2>We'd Love to Hear from You</h2>

    Thank you for considering Émerveille Château for your dining experience.
    If you have any questions, inquiries, or special requests, please don't
    hesitate to reach out to us. Our team is dedicated to providing you with
    exceptional service and ensuring that your time with us is nothing short
    of extraordinary.

    <br />
    For reservations, event inquiries, or any other assistance, feel free to
    contact us using the details provided below. Our friendly staff is
    eagerly waiting to assist you and create cherished memories during your
    visit.

    <br />
    Phone: [Your Contact Number] Email: [Your Email Address]

    <br />
    We look forward to welcoming you to Émerveille Château and sharing our
    passion for fine dining and heartfelt hospitality with you. Let us make
    your dining experience truly remarkable.
    `;
	return element;
}
