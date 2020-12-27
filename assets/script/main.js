// animation on scroll (aos)
AOS.init({
    duration: 800,
});

let cards = document.querySelector('.cards .card');
let card = [1,2,3];


card.map(c => {
    dataCard(c);    
});

function dataCard(dCard){
    // let card = ' ';
    let data = `<div class="row row${dCard}">
    <!-- row header -->
    <div class="row-header"  data-aos="fade-left" data-aos-delay="${dCard * 100}">
        <img src="assets/images/card/Burger${dCard}.png" alt="burger${dCard}" class="Burger${dCard}">
    </div>
    <!-- end row header -->

    <!-- row description -->
    <div class="row-description"  data-aos="fade-left" data-aos-delay="${dCard * 200}">
        <h1>lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod expedita.</p>
    </div>
    <!-- end row description -->

    <!-- row button -->
    <div class="row-button"  data-aos="fade-left" data-aos-delay="${dCard * 250}">
        <button type="button" >order now</button>
    </div>
    <!-- end row button -->
</div>`
    return cards.innerHTML += data;
}

let gulir = document.querySelector('.gulir');
let rows = Array.from(document.querySelectorAll('.row'));
let number = 0;
gulir.addEventListener('click',function(e) {
    let numb = 0;
    if(e.target.classList.contains('gulir-left')){
        numb = number--;
        numb--
        if(number < 0 ){
            number = 2;
        }
        gulirKiri(numb, number);
    }

    else if(e.target.classList.contains('gulir-right')){
        numb = number++;
        numb++
        if(number > 2 ){
            number = 0;
        }
        gulirKanan(numb,number);
        
    }
});


function gulirKiri(numb, number){
    rows[number].style.display = "inline-block";
    rows[numb + 1].style.display = "none";
}

function gulirKanan(numb, number){
    rows[number].style.display = "inline-block";
    rows[numb-1].style.display = "none";
}