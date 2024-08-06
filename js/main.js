const images = [
	{	
		image: "https://i.pinimg.com/564x/e6/a4/73/e6a47352be0ee73a48bccf6343c5e504.jpg",
		title: "Fundación de Roma (753 a.C.):",
		alt: "Fundación de Roma",
		link: "https://es.wikipedia.org/wiki/Fundaci%C3%B3n_de_Roma",
		text: "Según la leyenda, Roma fue fundada por Rómulo y Remo, dos hermanos gemelos criados por una loba. Este evento marca el comienzo de la civilización romana.",
		id: 1,
	},
	{
		image: 'https://i.pinimg.com/564x/f8/c4/51/f8c4511f1e43028c03f8b07c8fb7f5b7.jpg',
		title: "Asesinato de Julio César (44 a.C.):",
		alt: "Asesinato de Julio César",
		link: "https://es.wikipedia.org/wiki/Julio_C%C3%A9sar",
		text: "Julio César fue asesinado el 15 de marzo de 44 a.C., conocido como los Idus de marzo, por un grupo de senadores romanos. Este evento desencadenó una serie de guerras civiles que llevaron al fin de la República Romana y al surgimiento del Imperio Romano.",
		id: 2,
	},
	{
		image: 'https://i.pinimg.com/564x/c0/d6/f8/c0d6f84e3456240dccd86f7f22986a2a.jpg',
		title: "Caída del Imperio Romano de Occidente (476 d.C.):",
		alt: "Caída del Imperio Romano de Occidente",
		link: "https://es.wikipedia.org/wiki/Ca%C3%ADda_del_Imperio_romano_de_Occidente",
		text: "El emperador Rómulo Augústulo fue depuesto por el líder germánico Odoacro en 476 d.C., marcando el fin del Imperio Romano de Occidente y el comienzo de la Edad Media en Europa.",
		id: 3,
	},
	{
		image: 'https://i.pinimg.com/564x/7a/f4/b7/7af4b76513c365755fd7a9923b1519e6.jpg',
		title: "Coronación de Carlomagno (800 d.C.):",
		alt: "Coronación de Carlomagno",
		link: "https://es.wikipedia.org/wiki/Coronaci%C3%B3n_de_Carlomagno",
		text: "El 25 de diciembre de 800 d.C., Carlomagno fue coronado Emperador del Sacro Imperio Romano Germánico por el Papa León III. Este evento significó la restauración del título imperial en el oeste y la consolidación del poder de Carlomagno.",
		id: 4,
	},
	{
		image: 'https://i.pinimg.com/564x/5a/67/59/5a6759e6f3366b728af90b3854780d79.jpg',
		title: "Firma de la Carta Magna (1215):",
		alt: "Firma de la Carta Magna",
		link: "https://es.wikipedia.org/wiki/Carta_Magna",
		text: "En 1215, el rey Juan de Inglaterra firmó la Carta Magna, un documento que limitaba los poderes del monarca y establecía ciertos derechos para los nobles. Este evento es considerado un hito en la historia de la democracia y el estado de derecho.",
		id: 5,
	},
	{
		image: 'https://i.pinimg.com/564x/e6/3c/e8/e63ce8dae7509f9201ae28b0bfe1f927.jpg',
		title: "Conquista de Constantinopla (1453):",
		alt: "Conquista de Constantinopla",
		link: "https://es.wikipedia.org/wiki/Ca%C3%ADda_de_Constantinopla",
		text: "El 29 de mayo de 1453, el sultán otomano Mehmed II capturó Constantinopla, la capital del Imperio Bizantino. Este evento marcó el fin del Imperio Bizantino y el ascenso del Imperio Otomano como una potencia dominante en el sureste de Europa y el Mediterráneo oriental.",
		id: 6,
	}
];

const wrapperGallery = document.querySelector('.wrapper-gallery');
const modal = document.querySelector('.my-modal-flex');
const barNav = document.querySelector('.navigation');
const btnToggle = document.querySelector('.icon-toggle');
const ulNav = document.querySelector('.ul-nav')
const content = document.querySelector('.main-content');
const itemNav = document.querySelectorAll('.navigation .item-nav');
const mainContent = document.querySelector('.main-content')


document.addEventListener('DOMContentLoaded',()=>{
	
	itemNav.forEach((item)=>{
		item.addEventListener('click', (e)=>{
			e.preventDefault();


			const page = e.target.getAttribute('data-page');
			console.log(page)
			loadPage(page)
		})
	})




	// loadImgToGallery(images);
});




btnToggle.addEventListener('click', ()=>{
    barNav.classList.toggle('active')
})


const getApi = async()=>{
	try {
		const api = await fetch('https://en.wikipedia.org/w/rest.php/v1/search/page?q=earth&limit=1');
		const response = await api.json()


		getData(response)
	} catch (err) {
		console.log(err)
	}
}
getApi()

function getData(data){
	console.log(data.pages)
	console.log(data.pages[0].thumbnail.mimetype)
	document.querySelector('.grid-1').style.backgroundImage = `url(${data.pages[0].thumbnail.url})`
	document.querySelector('.title-box').textContent = `${data.pages[0].description}`
}

function loadPage(page){

	document.innerHTML = ''
    mainContent.innerHTML = ''
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `${page}.html`, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			mainContent.innerHTML = xhr.responseText;
		}
	};
	xhr.send();
}



const closeModal = ()=>{
	modal.classList.remove('active')
}


const openModal = (e)=>{

	const imgId = parseInt(e.currentTarget.dataset.id);
	const imgData = images.find(img => img.id === imgId);

	// let actualImg = e.currentTarget.src;
	modal.classList.add('active')
	let picInfo = `<span class="close-modal">
 			 		<i class="fa-solid fa-xmark"></i>
 			 	</span>
 			 	<div class="img-modal">
 			 		<img class="pic" src=${imgData.image} alt=${imgData.alt}>
 			 	</div>
 			 	<div class="my-text">
 			 		<h1 class="title">${imgData.title}</h1>
 			 		<p class="description">
 			 			${imgData.text}
 			 		</p>
 			 		<a href=${imgData.link} target="_blank" class="see-more"><i class="fa-solid fa-plus"></i></a>
 			 	</div>`

 	modal.innerHTML = picInfo
 	modal.querySelector('.close-modal').addEventListener('click', closeModal)
}


const getImg = ()=>{
	const img = wrapperGallery.querySelectorAll('img');

	img.forEach((item)=>{
		item.addEventListener('click', openModal)
	})
}


function loadImgToGallery(imgs){

 	let imgsMaps = imgs.map((img)=>{
 		return `<div class="image-container">
   					 <img src=${img.image} alt=${img.alt} data-id=${img.id}>
 			 	</div>`
 	}).join('');

 	wrapperGallery.innerHTML = imgsMaps;

 	getImg()

}


