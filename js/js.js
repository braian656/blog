const contentArticles = document.querySelector('.articles');
const btnVolver = document.querySelector('.volver')
const btnPag = document.querySelector('.buttons-pag')
const buttonTop = document.querySelector('.top-link')


document.addEventListener('DOMContentLoaded', ()=>{

	loadArticles()
	getArticle()

})



window.addEventListener('scroll', ()=>{

	const header = document.querySelector('.content-header').getBoundingClientRect().height;
	const windowHeight = window.pageYOffset;


	if(windowHeight > 500){

		buttonTop.classList.add('show-link')

	}else{

		buttonTop.classList.remove('show-link')

	}

})

const articlesBlog = [

	{
		id: 1,
		title_post: 'Caída de Constantinopla (1453)',
		img: 'https://i.pinimg.com/564x/35/62/c0/3562c0c9f20f5014c6363475457d9988.jpg',
		description: 'Imperio Bizantino',
		txt: 'La caída de Constantinopla marcó el fin del Imperio Bizantino cuando fue conquistada por los otomanos bajo el mando del sultán Mehmed II. Este evento no solo transformó la geopolítica de la región, sino que también se considera el fin de la Edad Media y el inicio de la Edad Moderna.',
		sub_title: 'Una lenta agonía',
		txt_article: `La ciudad de Constantinopla, fundada en el siglo IV en el extremo sur donde se acercan Asia y Europa, fue durante mil años el núcleo de poder del Imperio bizantino. Heredero de Roma tras su caída en el año 476, el Imperio bizantino o romano de Oriente vivió su esplendor durante el siglo VI,
		  pero desde el XI atravesó un declive que desembocaría en la toma de Constantinopla el 29 de mayo de 1453 por el Imperio otomano.

		  La primera amenaza para los bizantinos había venido del Imperio persa sasánida, después chocaron con los califatos musulmanes en el Mediterráneo oriental, y más adelante los rusos, búlgaros e incluso los cruzados asediaron desde Europa los muros de Constantinopla.
		   Pero fueron el Imperio selyúcida primero y luego el turco-otomano los que acabarían con un Imperio bizantino que agonizaba.

			El peligro también llegó de potencias con las que compartía religión. En lo económico, el Imperio bizantino se vio acosado por las ricas repúblicas de Venecia y Génova, que se beneficiaron del comercio que regaba Constantinopla. 
			Además, el cisma de Oriente del 1054 entre ortodoxos y católicos ahondó el aislamiento bizantino, y las luchas internas e intrigas por el trono contribuyeron a desangrar al Imperio. La máxima expresión de la decadencia fue la cuarta cruzada (1198-1204),
 			proyectada para recuperar Tierra Santa, que acabó con la toma de Constantinopla en el 1204, la expulsión de la dinastía gobernante y el establecimiento del Imperio latino.
		  `,
		
		
	},
	{
		id: 2,
		title_post: 'Revolución Industrial (siglo XVIII - XIX)',
		img: 'https://i.pinimg.com/564x/64/81/1a/64811ad6c351a284c030d0dd5233b733.jpg',
		description: 'Siglo XX',
		txt: 'La Revolución Industrial fue un periodo de grandes cambios tecnológicos, económicos y sociales que comenzó en Gran Bretaña y se extendió a otros países. Introdujo la mecanización de la producción, la expansión de las fábricas y cambios significativos en la sociedad, la economía y la tecnología.',
		sub_title: '¿Qué fue la Revolución Industrial?',
		txt_article: `Se conoce como Revolución Industrial a un proceso histórico en el que los cambios en las formas de producción generaron una transformación profunda de la organización económica y social de las sociedades occidentales.

									Se puede diferenciar entre la Primera Revolución Industrial (1760-1850) y la Segunda Revolución Industrial (1850-1914) para hablar de este proceso. La primera comenzó en el Reino Unido y se extendió por Europa y Estados Unidos. La introducción de la máquina de vapor y otras tecnologías permitió la mecanización de algunos procesos productivos. Esto llevó a la aparición de la fábrica urbana como espacio de trabajo y una nueva organización laboral.

									Durante la Primera Revolución Industrial, hubo una migración masiva de campesinos hacia las ciudades, donde encontraban oportunidad de subsistir como trabajadores asalariados en las nuevas fábricas. Como consecuencia de estos cambios, se definió un nuevo tipo de sociedad, caracterizado por la oposición entre la burguesía (clase social dueña de las fábricas y el capital) y el proletariado (clase social que depende del trabajo asalariado para su subsistencia). 

									La Segunda Revolución Industrial se caracterizó por el aumento de la productividad industrial a partir de la introducción de la cadena de montaje (separación del proceso productivo en diferentes etapas) y  nuevas fuentes de energía. En esta segunda etapa, Alemania protagonizó el mayor crecimiento económico, y las transformaciones se extendieron a Estados Unidos y Japón.`,
		
	},
	{
		id: 3,
		title_post: 'Caída del Muro de Berlín (1989)',
		img: 'https://i.pinimg.com/564x/5f/20/cc/5f20cc36c14d54d5102c5f2abeebf4af.jpg',
		description: 'Siglo XX',
		txt: 'La caída del Muro de Berlín simbolizó el fin de la Guerra Fría y el colapso de los regímenes comunistas en Europa del Este. Este evento llevó a la reunificación de Alemania y marcó un cambio significativo en la política y las relaciones internacionales de finales del siglo XX.',
		sub_title: 'La caída del Muro de Berlín',
		txt_article: `El 9 de noviembre de 1989 caía el Muro de Berlín, un muro de unos 50 kilómetros de largo y 4 de alto que durante 28 años dividió a Berlín Occidental de la República Democrática Alemana (RDA). Su eliminación significó el fin del régimen de la RDA y de los regímenes comunistas en Europa Oriental. El muro comenzó a construirse el 13 de agosto de 1961. A continuación, se reproduce un artículo del Diario Arriba de Madrid, aparecido en la España franquista el martes 15 de agosto de 1961, a dos días del comienzo de la instalación del muro.
									Fuente: Diario Arriba, Nº 8.965 – II época – Madrid, martes 15 de agosto de 1961.
									Gravísima situación entre las dos zonas de Berlín separadas en pocas horas por una barrera militar comunista – 110.000 soldados se concentran en la zona oriental, apoyados por los 400.000 hombres del mariscal Koniev – Los berlineses del Oeste y del Este hacen frente con serenidad y firmeza a las provocaciones.

									Berlín.- A las tres y cuarto de la madrugada hay ya fuerte claridad diurna en Berlín, por la  situación geográfica de la antigua capital alemana. En esa luz de la mañana del domingo –una fecha que puede quedar grabada en la Historia-, mientras la ciudad permanecía aún silenciosa, preparándose los habitantes del sector occidental a la habitual excursión a los lagos, en los autobuses amarillos que parten de la estación del Zoo, otra movilización insólita comenzó a advertirse en el sector oriental. Apenas se había difundido el comunicado de los Gobiernos comunistas firmantes del Pacto de Varsovia, anunciando el cierre de la frontera entre ambas partes de la escindida ciudad, pudo verse un largo convoy de camiones militares verdes, cargados de soldados con uniforme del “Ejército Popular” y casco soviético, bajar por la amplia calzada de la Unter der Linden, pasar entre el edificio blanco de la Embajada soviética y el medio derruido hotel Adion, y atravesar el cordón de miembros de la “Vo-Po” o Policía militar, para estacionarse a unos cien metros de la Puerta de Brandesburgo. Las tropas iban dotadas con armas ligeras.

									Medidas análogas fueron establecidas en otros puntos de Berlín. En la plaza de Postdam, foco de la rebelión del 17 de junio de 1953 y punto de convergencia de los cuatro sectores, fueron colocadas barreras de alambre de espino, reforzando así la línea de separación ya existente. Frente a los aduaneros y “schupos” occidentales, que habitualmente permanecen, dotados con gemelos, en las barandillas de la parte libre, junto al cartel luminoso donde se dan noticias a los habitantes orientales, aparecieron guardias comunistas, armados de fusiles, que se estacionaron en las esquinas y en lo alto de las ruinas que constituyen el decorado familiar de este cruce de la Friechistrasse y de la Strasemanstrasse, teniendo a sus espaldas las avenidas del Tiergarten.`,
	
	}

];

let isOpen = false;

let comentarios

const arrComments = {
	1 : [],
	2 : [],
	3 : []
}

const cleanHTML = ()=>{
	contentArticles.textContent = ''
}



const likePost = ()=>{

	const buttonsLike = document.querySelectorAll('.btn-like')

	buttonsLike.forEach((btn)=>{

		btn.addEventListener('click', (e)=>{

			e.target.classList.add('like')

		})
	})

}





const showComment = ()=>{
	// const sectionComment = document.querySelector('.comments');
	const article = document.querySelectorAll('.post')
	const openCommentsBtn = document.querySelectorAll('.btn-comment');
	console.log(article);

	openCommentsBtn.forEach((btn,i)=>{

		btn.addEventListener('click', (e)=>{

			article[i].classList.toggle('actual')
			loadComments(article[i].dataset.id)	



		})





	})


	
}


function loadArticles(){
	btnPag.classList.remove('remove')

	articlesBlog.forEach((article)=>{
		const art = document.createElement('article');

		const content = `<div class="container-text">
          <h2 class="title-post">${article.title_post}</h2>
          <span class="sub-title">${article.description}</span>
        </div>
        <div class="image">
          <img src=${article.img} alt="">
        </div>
        <div class="info-text">
          <p class="text">${article.txt}</p>
        </div>
        <div class="buttons">
          <button class="btn-like"">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fefefe"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
          </button>
          <button class="btn-comment">
           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fefefe"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>     </button>
        </div>
         <div class="comments">
         <div class="comment">
          <h1 class="title">COMENTARIOS</h1>
          	<div class="content-comments" id="users-comments">

          			<div class="user-comment">
          				 <div class="profile">
					             <div>
					               <img src="https://i.pinimg.com/564x/e4/3a/bc/e43abc7e71ce7ab637c718bf89c6aa7c.jpg" alt="">
					             </div>
					               <span class="name">Ramon sosa</span>
					               <span class="date-comment">20/02/2025</span>
            				</div> 
             					<p class="text-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eius nulla recusandae quasi! Unde, sint. Perferendis!</p>
          			</div>


          	</div>
           </div>
          </div> `

    art.innerHTML = content;
		art.classList.add('post');
		art.setAttribute('data-id', article.id)
		contentArticles.appendChild(art)
	});


	likePost()
	showComment()

}


const inicio = ()=>{
	btnVolver.classList.remove('show');
	isOpen = false
	cleanHTML()
	loadArticles()
}


const postHTML = (postVisible)=>{
	return ` <article class="post actual" data-id=${postVisible.id}>
        <div class="container-text">
          <h2 class="title-post">${postVisible.title_post}</h2>
          <span class="sub-title">${postVisible.description}</span>
        </div>
        <div class="image">
          <img src=${postVisible.img} alt="">
        </div>
        <div class="info-text">

          <p class="text">
         		

         </p>
         		<h2>${postVisible.sub_title}</h2>
         	<p class="text">
         	 ${postVisible.txt_article}
         	</p>
          

        </div>

        <div class="comments">
         <div class="comment">
           <h1 class="title">COMENTARIOS</h1>
             <div class="content-comments" id="users-comments" >

          		


          	</div>
          </div>
         </div>

         <div class="modal-comment">
  				 <h2 class="title">COMENTAR</h2>
   				<div class="content-input">
    				<div class="input">
      				<label for="">Nombre: Unknown</label>
      				
    				</div>
    				<div class="input">
      				<label for="">Comentario:</label>
     					<textarea name="" id="" class="comentario" placeholder="Tu comentario"></textarea>
    				</div>
    				<button class="btn enviar">COMENTAR</button>
   				</div>
				 </div>

      </article>`
}


// Muestra el post seleccionado
const showPost = (post)=>{
	isOpen = true
	cleanHTML()
	btnPag.classList.add('remove')
	btnVolver.classList.add('show')
	btnVolver.addEventListener('click', inicio);

	const indexPost = Number(post.dataset.id); /*index del post*/
	const actualPost = articlesBlog.find(index => index.id === indexPost);
	const getActualPost = postHTML(actualPost)

 	contentArticles.innerHTML = getActualPost;
 	loadComments(indexPost)
 	// addComment()
 	

}



function getArticle(){
// un for each,para que tome todos los articulos

	contentArticles.addEventListener('click',(e)=>{
		e.preventDefault();

		const post = e.target;

		if(post.tagName.toLowerCase() == 'h2'){
			showPost(post.parentElement.parentElement)

		}
		
	})
}

function addComment(postID){

	const textarea = document.querySelector('.comentario')
	const value = textarea.value;

	if(value.trim() !== ''){
		console.log('hollaaa');

			arrComments[postID].push(value)
			textarea.value = ''
	}
	
	loadComments(postID)


}

const verifyContainerElement = ()=>{

	return isOpen == true ? document.querySelector('#users-comments') : document.querySelectorAll('#users-comments') ;

}


const showPostComment = (item, postID)=>{

	const actualBox = item

	const emptyContainer = document.createElement('h1')
	
	const html = arrComments[postID].map(comment=>{

		return `<div class="user-comment">
				          				 <div class="profile">
									             <div>
									               <img src="https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg" alt="">
									             </div>
									               <span class="name">Usuario No Registrado</span>
									               <span class="date-comment"></span>
				            				</div>          
				             				 <p class="text-comment">${comment}</p>
				          			</div>`;

			

	}).join('')

	// boxComment.innerHTML = html
	actualBox.innerHTML = html
	


	
	if(actualBox.children.length === 0){
	
		emptyContainer.textContent = 'AUN NO HAY COMENTARIOS!';
		emptyContainer.classList.add('msj-empty')
		actualBox.appendChild(emptyContainer)



	}

	



	if(isOpen){
		
		const buttonComentar = document.querySelector('.enviar');

		buttonComentar.addEventListener('click', ()=>{
				addComment(postID)
		})

	}	

}

function loadComments(pruebaIndex){	
	const postID = pruebaIndex /*identificador el post 1,2 0 3, por ahora*/

	// const boxComment = document.querySelector('#users-comments')
	
	
	// const boxComment = document.querySelectorAll('#users-comments');

	const boxComment = verifyContainerElement() /*verfifica si consigo todos, o solo un elemento*/
	const actualBox = boxComment[postID-1];


	if(isOpen){
		showPostComment(boxComment, postID)
	}else{
		showPostComment(actualBox, postID)
	}
	 

}

