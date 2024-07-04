// Creando todo mi contenido HTML a traves del DOM

const horroGame = document.querySelector(".horror-game");

// Section endlessNightmare

const endlessNightmare = document.createElement("section");

endlessNightmare.classList.add("endless-nightmare");

endlessNightmare.innerHTML = `
        <h2 class="title-horror">The <span class="span-horror">horror game</span> of the year</h2>
        <h1 class="title-endless">ENDLESS NIGHTMARE</h1>
        <p class="paragragh-endles">You need to find the way out or your night will never end!</p>    
`;

horroGame.appendChild(endlessNightmare);

// Section links

const links = document.createElement("section");

links.classList.add("links");

links.innerHTML = `
            <button class="btn-read"><a href="#">Read More</a></button>
            <button class="btn-play"><a href="#">Play now</a></button>
`;

horroGame.appendChild(links);

// agregando un evento a mis botones

const boton = document.querySelector(".btn-read");

boton.addEventListener("click", () => {
    Swal.fire({
        title: "<h2> ¡Warning! </h2>",
        icon: "info",
        html: `
        <p> ¡This game is very funny but scary, will take you to places unimaginable that never you have never seen! If you press <b>PLAY NOW</b> you will be the few brave in try. You can do it!</p> `
      });
})

const boton2 = document.querySelector(".btn-play");

boton2.addEventListener("click", () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have decided to get in the game, <b>congratulations!</b>",
        showConfirmButton: false,
        timer: 2500
      });
})
