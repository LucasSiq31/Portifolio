document.getElementById("numProjects").innerHTML = `// projetos.length = ${projetos.length}`

const linguagens = ["Todos"];

for (const projeto of projetos) {//Vê em todos os projetos

    for (const tag of projeto.tags) {//Busca em todas as tags do array
        
        if(linguagens.includes(tag) == false){
            linguagens.push(tag);
        }
    }
    
}

for (const ling of linguagens){ //Imprime no site
    document.getElementById("tags").innerHTML += `<div onclick="exibir('${ling}')"><input type="radio" name="ling" id="${ling}"><label for="${ling}">${ling}</label></div>`
}

function exibir(linguagem){
    document.getElementById("projects").innerHTML = "";

    for (const projeto of projetos) {

        if(projeto.tags.includes(linguagem) || linguagem == "Todos"){
            project = `<a href="${projeto.link}" class="card-project">
                        <div class="line" style="background: linear-gradient(90deg, ${projeto.cor}, rgba(34, 51, 78, 0.04));"></div>

                        <div class="project-info">
                            <span style="color: ${projeto.cor}">${projeto.objetivo}</span>
                            <h2>${projeto.nome}</h2>
                            <p class="link">${projeto.link}</p>
                            
                            <p>${projeto.descricao}</p>
                            
                            
                            <div class="tags">`

                            for (const tag of projeto.tags) {
                                project += `<p style="color: ${projeto.cor}; border-color: ${projeto.cor}; background-color: rgba(${hexToRgb(projeto.cor)}, 0.1);">${tag}</p>`;
                            }

                            
                project += ` </div>

                        </div>
                    </a>`;

            document.getElementById("projects").innerHTML += project;
        }

    }
}

function hexToRgb(hex){
    let limpo = hex.replace('#', '');
  
    if (limpo.length === 3) {
        limpo = limpo.split('').map(c => c + c).join('');
    }
    
    const r = parseInt(limpo.substring(0, 2), 16);
    const g = parseInt(limpo.substring(2, 4), 16);
    const b = parseInt(limpo.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
}

exibir("Todos")