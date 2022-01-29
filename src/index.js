
const  appNode = document.querySelector('div#app');
const baseUrl = "https://platzi-avo.vercel.app";
//web api
//conectarnos al server
//procesar la respuesta, y convertirla en json
//JASON -> Data -> renderizar info

//Intl = internacionalizacion..........................
// 1 - dar formato a fechas
// 2 - dar formato a monedas
const formatPrice =(price)=>{

    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style: "currency",
        currency: "USD",

    }).format(price)

    return newPrice;
};
//.......................................................

window.
fetch(`${baseUrl}/api/avo`) // -> nos conectamos al servidor
.then(respuesta => respuesta.json()) //procesar la respuesta y convertirla en json
.then((responseJson)=>{
    const todosLosItms = [];

    responseJson.data.forEach(element => {
        //crear imagen
        const imagen = document.createElement("img");
        imagen.className ='h-14 bg-gradient-to-r from-cyan-500 to-blue-500';
        imagen.style.marginLeft ='auto';
        imagen.style.marginRight ='auto';
        document.body.appendChild(imagen)
        imagen.src = `${baseUrl}${element.image}`

    
        //crear titulo
        const title = document.createElement("h2")
        title.textContent = element.name;
        title.className ='text-2xl text-red-600';

        //crear precio
        const price = document.createElement("div");
        price.textContent = formatPrice(element.price);
        price.className = 'text-gray-600'; // esto es para los estilos de CSS

        const contenedor = document.createElement("div");
        contenedor.className ='divide-y divide-dashed md:divide-solid';
        contenedor.append(imagen,title,price);

        todosLosItms.push(contenedor);

    });

    appNode.append(...todosLosItms);
});
