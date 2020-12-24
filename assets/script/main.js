// animation on scroll (aos)
AOS.init({
    duration: 1200,
});

let cards = document.querySelector('.cards .card');
let card = [1,2,3];

function dataCard(dCard){
    // let card = ' ';
    let data = `<div class="row row${dCard}">
    <!-- row header -->
    <div class="row-header" >
        <img src="assets/images/card/Burger${dCard}.png" alt="burger${dCard}" class="Burger${dCard}">
    </div>
    <!-- end row header -->

    <!-- row description -->
    <div class="row-description">
        <h1>lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod expedita.</p>
    </div>
    <!-- end row description -->

    <!-- row button -->
    <div class="row-button">
        <button type="button" >order now</button>
    </div>
    <!-- end row button -->
</div>`
    return cards.innerHTML += data;
}

card.map(c => {
    dataCard(c);    
});