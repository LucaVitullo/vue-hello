/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


const app = new Vue({
        el:'#root',
        data: {
            message:'ciao mondo',
            image: "https://picsum.photos/200",
            classi: "text-center",
        }
    }
);