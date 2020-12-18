// animation on scroll (aos)
AOS.init({
    duration: 1200,
});

let cards = document.querySelector('.cards .card');
let card = [1,2,3];

function dataCard(dCard){
    let data = `<div class="row"  data-aos="fade-left" data-aos-delay="${dCard}00">
    <!-- row header -->
    <div class="row-header" >
        <img src="assets/images/card/Burger${dCard}.png" alt="burger${dCard}" class="Burger${dCard}">
    </div>
    <!-- end row header -->

    <!-- row description -->
    <div class="row-description">
        <h1 data-aos="fade-left" data-aos-delay="200">lorem ipsum dolor</h1>
        <p data-aos="fade-left" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod expedita.</p>
    </div>
    <!-- end row description -->

    <!-- row button -->
    <div class="row-button">
        <button type="button" data-aos="fade-left" data-aos-delay="300">order now</button>
    </div>
    <!-- end row button -->
</div>`
    cards.innerHTML += data;
}

card.map(c => {
    dataCard(c);    
});