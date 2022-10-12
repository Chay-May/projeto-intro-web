const filmesLongas = [
    {
        nome: 'Nausicaä do Vale do Vento',
        anoDeLancamento: 1984,
        disponivelNetflix: true,
        duracao: 117,
        elenco: ["Sumi Shimamoto", "Goro Naya", "Yoji Matsuda", "Yoshiko Sakakibara", "Iemasa Kayumi"],
        img: "https://deliriumnerd.com/wp-content/uploads/2019/04/89914-nausicaa-do-vale-do-vento-e-uma-624x0-1.gif"
    },
    {
        nome: 'O Castelo no Céu',
        anoDeLancamento: 1986,
        disponivelNetflix: true,
        duracao: 124,
        elenco: ["Mayumi Tanaka", "Keiko Yokozawa", "Kotoe Hatsui", "Minori Terada"],
        img: "https://i.pinimg.com/originals/e2/b3/c2/e2b3c2ab4ca17889e097693782e7e1e8.gif"
    },
    {
        nome: 'Meu Amigo Totoro',
        anoDeLancamento: 1988,
        disponivelNetflix: true,
        duracao: 86,
        elenco: ["Chika Sakamoto", "Noriko Hidaka", "Hitoshi Takagi"],
        img: "https://miro.medium.com/max/1000/1*2gTkVFE0p5YZ4rRfJ7RjXw.gif"
    },
    {
        nome: 'Túmulo dos Vagalumes',
        anoDeLancamento: 1988,
        disponivelNetflix: false,
        duracao: 89,
        elenco: ["Tsutomu Tatsumi", "Ayano Shiraishi", "Yoshiko Shinohara", "Akemi Yamaguchi"],
        img: "https://deliriumnerd.com/wp-content/uploads/2019/04/tumulo-dos-vagalumes-1988-m9070.gif"
    },
    {
        nome: 'O Serviço de Entregas da Kiki',
        anoDeLancamento: 1989,
        disponivelNetflix: true,
        duracao: 103,
        elenco: ["Minami Takayama", "Rei Sakuma", "Kappei Yamaguchi"],
        img: "https://miro.medium.com/max/1000/0*4LLe94ywq9lhcwTS.gif"
    },
    {
        nome: 'Memórias de Ontem',
        anoDeLancamento: 1991,
        disponivelNetflix: true,
        duracao: 118,
        elenco: ["Miki Imai", "Toshiro Yanagiba", "Yoko Honna"],
        img: "https://i.pinimg.com/originals/d4/ab/5c/d4ab5c879f56d8ba766e85469023a597.gif"
    },
    {
        nome: 'Porco Rosso: O Último Herói Romântico',
        anoDeLancamento: 1992,
        disponivelNetflix: true,
        duracao: 118,
        elenco: ["Shuichiro Moriyama", "Tokiko Kato", "Akemi Okamura", "Akio Otsuka"],
        img : "https://media.tenor.com/P_NLDhbe4pAAAAAC/porco-rosso-kurenai-no-buta.gif"
    },
    {
        nome: 'Eu Posso Ouvir o Oceano',
        anoDeLancamento: 1993,
        disponivelNetflix: true,
        duracao: 72,
        elenco: ["Nobuo Tobita", "Toshihiko Seki", "Yuko Sakamoto"],
        img: "https://i.pinimg.com/originals/17/bf/1d/17bf1d5a61e7e759102d015cd3a8408d.gif"
    },
    {
        nome: 'PomPoko: A Grande Batalha dos Guaxinins',
        anoDeLancamento: 1994,
        disponivelNetflix: true,
        duracao: 119,
        elenco: ["Yuriko Ishida", "Shigeru Izumiya", "Akira Kamiya", "Hayashiya Shozo IX", "Megumi Hayashibara"],
        img: "https://miro.medium.com/max/1000/0*v-3-GpaYUvQJWnf0."
    },
    {
        nome: 'Sussurros do Coração',
        anoDeLancamento: 1995,
        disponivelNetflix: true,
        duracao: 111,
        elenco: ["Yoko Honna", "Issei Takahashi", "Takashi Tachibana", "Shigeru Muroi", "Shigeru Tsuyuguchi", "Keiju Kobayashi"],
        img: "https://4.bp.blogspot.com/-HILSLFeCqCw/WqQNt9AkH4I/AAAAAAAADe0/WJ4kPc4vrwcjmfzUSryoBNc_1gt0iGj9ACLcBGAs/s1600/59e1032646e07ba41ef9c2c8f9e18db6.gif"
    },
    {
        nome: 'Princesa Mononoke',
        anoDeLancamento: 1997,
        disponivelNetflix: true,
        duracao: 133,
        elenco: ["Yoji Matsuda", "Yuriko Ishida", "Yuko Tanaka", "Kaoru Kobayashi", "Masahiko Nishimura", "Tsunehiko Kamijo", "Akihiro Miwa", "Mitsuko Mori", "Hisaya Morishige"],
        img: "https://64.media.tumblr.com/f536c4178c447dab656fb0a0aee34882/3c84ce002086474e-19/s640x960/328cd4296feb2fd688be7554684336642fc3f505.gif"
    },
    {
        nome: 'Meus Vizinhos os Yamadas',
        anoDeLancamento: 1999,
        disponivelNetflix: true,
        duracao: 104,
        elenco: ["Hayato Isobata", "Masako Araki", "Naomi Uno", "Touru Masuoka"],
        img: "https://1.bp.blogspot.com/-K1NvFzE4qY0/XnWQnMnk65I/AAAAAAABGwg/GMGpejTiWXkwa7RO-dvTW1ZKBvGlWjfnwCLcBGAsYHQ/s1600/yamadas.gif"
    },
    {
        nome: 'A Viagem de Chihiro',
        anoDeLancamento: 2001,
        disponivelNetflix: true,
        duracao: 125,
        elenco: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takeshi Naito", "Yasuko Sawaguchi", "Tsunehiko Kamijo", "Takehiko Ono", "Bunta Sugawara"],
        img: "https://i.pinimg.com/originals/11/71/8d/11718d0f400a83d415e06af23c006e50.gif"
    },
    {
        nome: 'O Reino dos Gatos',
        anoDeLancamento: 2002,
        disponivelNetflix: true,
        duracao: 75,
        elenco: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takeshi Naito", "Yasuko Sawaguchi", "Tsunehiko Kamijo", "Takehiko Ono", "Bunta Sugawara"],
        img: "http://3.bp.blogspot.com/-rW-N0hRDxr8/VkgpGbW8-3I/AAAAAAAAAoA/8EIytCDW--8/s1600/tumblr_mhzvnerTng1s2r9iao4_r1_250.gif"
    },
    {
        nome: 'O Castelo Animado',
        anoDeLancamento: 2004,
        disponivelNetflix: true,
        duracao: 119,
        elenco: ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"],
        img: "https://i.pinimg.com/originals/c9/e3/87/c9e38776339ea8c500091ee7559f92ad.gif"
    },
    {
        nome: 'Contos de Terramar',
        anoDeLancamento: 2006,
        disponivelNetflix: true,
        duracao: 115,
        elenco: ["Bunta Sugawara", "Junichi Okada", "Aoi Teshima", "Yuko Tanaka"],
        img: "https://2.bp.blogspot.com/-sN5-mkk2A8c/W_ReqBBlmbI/AAAAAAAADxc/dnHpon1O0G8x85wrwPC3vaQMvOz_NpRFQCLcBGAs/s1600/94240397ddf07f90375d609daacf844b.gif"
    },
    {
        nome: 'Ponyo: Uma Amizade Que Veio do Mar',
        anoDeLancamento: 2008,
        disponivelNetflix: true,
        duracao: 101,
        elenco: ["Tomoko Yamaguchi", "Kazushige Nagashima", "Yuki Amami", "George Tokoro", "Yuria Nara", "Hiroki Doi", "Rumi Hiiragi", "Akiko Yano", "Kazuko Yoshiyuki", "Tomoko Naraoka"],
        img: "https://i.pinimg.com/originals/11/72/a3/1172a3247082a1b979ab5f422ffcd43c.gif"
    },
    {
        nome: 'O Mundo dos Pequeninos',
        anoDeLancamento: 2010,
        disponivelNetflix: true,
        duracao: 95,
        elenco: ["Mirai Shida", "Ryunosuke Kamiki", "Shinobu Otake", "Keiko Takeshita", "Tatsuya Fujiwara", "Tomokazu Miura", "Kirin Kiki"],
        img: "https://miro.medium.com/max/1000/0*1URhlWu1jnqiOUcx.gif"
    },
    {
        nome: 'Da Colina Kokuriko',
        anoDeLancamento: 2011,
        disponivelNetflix: true,
        duracao: 92,
        elenco: ["Masami Nagasawa", "Junichi Okada", "Keiko Takeshita", "Yuriko Ishida", "Jun Fubuki", "Takashi Naito", "Shunsuke Kazama", "Nao Omori", "Teruyuki Kagawa"],
        img: "https://miro.medium.com/max/1000/0*Z5kTryypHgLOsxu8.gif"
    },
    {
        nome: 'Vidas ao Vento',
        anoDeLancamento: 2013,
        disponivelNetflix: true,
        duracao: 126,
        elenco: ["Hideaki Anno", "Miori Takimoto", "Hidetoshi Nishijima", "Masahiko Nishimura", "Morio Kazama", "Keiko Takeshita", "Mirai Shida", "Jun Kunimura", "Shinobu Otake", "Mansai Nomura"],
        img: "https://1.bp.blogspot.com/-U54MoVOPsPk/XiXPuuQwcjI/AAAAAAABFYY/8D04gAnRlq4CrlCSVOHqILoFy6kkoFtPwCLcBGAsYHQ/s1600/Vidas%2Bao%2BVento%2B%25282013%2529.gif"
    },
    {
        nome: 'O Conto da Princesa Kaguya',
        anoDeLancamento: 2013,
        disponivelNetflix: true,
        duracao: 137,
        elenco: ["Aki Asakura", "Kengo Kora", "Takeo Chii", "Nobuko Miyamoto"],
        img: "https://deliriumnerd.com/wp-content/uploads/2019/07/O-Conto-da-Princesa-Kaguya_.gif"
    },
    {
        nome: 'As Memórias de Marnie',
        anoDeLancamento: 2014,
        disponivelNetflix: true,
        duracao: 103,
        elenco: ["Sara Takatsuki", "Kasumi Arimura"],
        img: "https://i.pinimg.com/originals/0b/d4/98/0bd49885d76628f64f848afe5f992cbe.gif"
    },
]

console.log("Filmes iniciais", filmesLongas.length)

//SEMANA 1 =3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

let soma = 0

filmesLongas.forEach(
    f => {
        soma = soma + f.duracao
        console.log(`Valor da soma atual: ${soma}`)
    }
)

// console.log(typeof (soma)) // RETORNA O TÍPO DA VARIÁVEL (DIZ SE É STRING / NUMBER OU BOLEANO)
let media = soma / filmesLongas.length


console.log(filmesLongas.length)
console.log(`Essa é a soma total: ${soma}`)
console.log(`Essa e a média: ${media.toFixed(2)}`) // toFixed -- ARREDONDA (CORTA) O NÚMERO DEPOIS DA VÍRGULA


// SEMANA 2 = 1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings. 

//2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

const nome = 'Nausicaä do Vale do Vento'
const anoDeLancamento = 1984
const disponivelNetflix = true
const duracao = 117
const elenco = ["Sumi Shimamoto", "Goro Naya", "Yoji Matsuda", "Yoshiko Sakakibara", "Iemasa Kayumi"]

console.log(`Nome: ${nome}, \nAno de Lancamento: ${anoDeLancamento}, \nEstá disponível na Netflix? ${disponivelNetflix ? "Sim" : "Não"}, \nDuração do filme: ${duracao}, \nElenco do filme: ${elenco}`)


// SEMANA 3 = 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

filmesLongas.push({
    nome: 'Como Vocês Vivem?',
    anoDeLancamento: "Em produção",
    disponivelNetflix: false,
    duracao: "Em produção",
    elenco: "Em produção",
    img: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Como-Voc%C3%AAs-Vivem.jpg?w=279&ssl=1"
})

console.log("Depois do PUSH", filmesLongas)
console.log(filmesLongas.length)


//SEMANA 4 = 1. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true; 2. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

const novoFilme = {
    nome: 'Aya e a Bruxa',
    anoDeLancamento: 2020,
    disponivelNetflix: true,
    duracao: 82,
    elenco: ["Kokoro Hirasawa", "Shinobu Terajima", "Etsushi Toyokawa", "Gaku Hamada", "Sherina Munaf", "Yūji Ueda, Saito Yusei"],
    img: "https://pausadrammatica.files.wordpress.com/2021/10/aya-e-a-bruxa.jpg"
}

// if (novoFilme.disponivelNetflix){ //O push só acontece caso a verificação "disponivelNetflix" for verdadeira
//     filmesLongas.push(novoFilme)
// }else{
//     alert("Filme 'Aya e a Bruxa' não cadastrado")
// }

//CONSTANTENOVA  //CONDIÇÃO            //IF                       //ELSE
novoFilme.disponivelNetflix ? filmesLongas.push(novoFilme) : alert("Filme 'Aya e a Bruxa' não cadastrado") //substitui o IF ELSE //OPERAÇÃO TERNÁRIA

console.log("Add o filme Aya e a Bruxa", filmesLongas)
console.log(filmesLongas.length)


// SEMANA 5 = 1. Reescrevendo o relatório da semana 2, altere a forma que a característica de array, criada no item 1 da semana 2, faça um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
//💡 Chamamos este processo de reescrever um código já escrito, de refatoração
//Exemplo:
//ANTES ["Projeto de HTML", "Projeto de CSS", "Projeto React"]
//DEPOIS "Projeto de HTML,Projeto de CSS,Projeto React" 

//2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.


for (let filmeLonga of filmesLongas) {
    console.log(`Nome: ${filmeLonga.nome}, \nAno de Lancamento: ${filmeLonga.anoDeLancamento}, \nEstá disponível na Netflix? ${filmeLonga.disponivelNetflix ? "Sim" : "Não"}, \nDuração do filme: ${filmeLonga.duracao}, \nElenco do filme: ${filmeLonga.elenco}`)
}


//SEMANA 6
//1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

const curta = {
    nome: 'On Your Mark',
    anoDeLancamento: 1995,
    disponivelNetflix: false,
    duracao: 7,
    img: "https://i.pinimg.com/originals/93/f6/01/93f601801ce767052d70b961e0c1fb49.gif"
}

// const recebeCurta = (objeto) => {
//     let novoObjeto = []

//     for(let i in objeto){
//         novoObjeto.push(objeto[i])
//     }
//     return novoObjeto.toString().replaceAll(",", " ")
// }

// console.log("Este é um curta dos Studios Ghibli:", recebeCurta(curta))

function imprimeString(objeto) { //IMPRIME UM ÚNICO OBJETO

    console.log("Este é um curta dos Studios Ghibli:", objeto.nome, objeto.anoDeLancamento, objeto.disponivelNetflix, objeto.duracao)

}
imprimeString(curta)

function imprimeStringObjeto(objetos) { //IMPRIME A LISTA DE OBJETOS DO ARRAY
    for (let string of objetos) {
        imprimeString(string)
    }
}
imprimeStringObjeto(filmesLongas)

//2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

//criar função com dois parametros, array de objetos e string
//função retorna objeto
//objeto precisa ter vaor igual ao parametro passado como string //USAR FILTER?
//caso não tenha valor igual ao parametro, rodar alerta

function arrayFilmes(filmes, titulo) {
    const resultado = filmes.filter(movie => {
        return movie.nome.toUpperCase().includes(titulo.toUpperCase())
    })
    if (resultado.length === 0) {
        alert("Filme não encontrado!")
    } else {
        return resultado
    }
}
// const titulo = prompt("Digite aqui um filme dos Studios Ghibli:")
// console.log(arrayFilmes (filmesLongas, titulo))

// let filtroFilmes = arrayFilmes(filmesLongas, titulo)
// imprimeStringObjeto(filtroFilmes)

// SEMANA 7
// 1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
// 2. Crie um cabeçalho, uma seção principal, e um footer para a página;
// 3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
// 4. Crie uma section para cada item da lista;
// 5. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
// 6. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
// 💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.


function buscarFilmes() {

    let container;

    const search = document.querySelector("#pesquisaFilmes").value;
    if (!search) {
        alert("Digite algo para que a busca aconteça");
    } else {
        const filmeSelecionado = arrayFilmes(filmesLongas, search);
      
    criaCard(filmeSelecionado)
        // console.log(filmeSelecionado);

//         container = `<section class="itens">
//        <img src="https://pa1.narvii.com/6474/bbdd8d50ca2ad412c704eb61fabaa68ac74c565b_hq.gif"
//            alt="Gif Totoro fazendo dana do crescimento" class="gifStudioGhibli">
//        <ul>
//            <li><a href="https://www.netflix.com/br/title/70019062" target="_blank" class="linkImg">Nome:
//                    ${filmeSelecionado[0].nome}</a></li>
//            <li>Ano de Lancamento: ${filmeSelecionado[0].anoDeLancamento}</li>
//            <li>Está disponível na Netflix? ${filmeSelecionado[0].disponivelNetflix}</li>
//            <li>Duração do filme: ${filmeSelecionado[0].duracao}</li>
//            <li>Elenco do filme: ${filmeSelecionado[0].elenco}</li>
//        </ul>
//    </section>`;

//         document.querySelector("#itensContainer").innerHTML = "";
//         document.querySelector("#itensContainer").innerHTML = container;

    }
}

function criaCard(filmes) {
    let itens = document.getElementById("itensContainer");
    itens.innerHTML = ""

    let container

    for (const filme of filmes) {
        container = `<section class="itens">
        <img src= ${filme.img}>
        <ul>
            <li><p>Nome:</p> ${filme.nome}</li>
            <li><p>Ano de Lancamento:</p> ${filme.anoDeLancamento}</li>
            <li><p>Está disponível na Netflix?</p> ${filme.disponivelNetflix}</li>
            <li><p>Duração do filme:</p> ${filme.duracao}</li>
            <li><p>Elenco do filme:</p> ${filme.elenco}</li>
        </ul>
    </section>`;
 
     itens.innerHTML += container;
    }

}

criaCard(filmesLongas)

