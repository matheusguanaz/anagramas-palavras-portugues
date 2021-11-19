var form = document.getElementById('form');
var input = document.getElementById('input');
var words_4 = document.getElementById('words-4');
var words_5 = document.getElementById('words-5');
var words_6 = document.getElementById('words-6');
var words_7 = document.getElementById('words-7');
var words_8 = document.getElementById('words-8');
var words_9 = document.getElementById('words-9');
var words_10 = document.getElementById('words-10');
var words_11 = document.getElementById('words-11');
var words_12 = document.getElementById('words-12');
var containerImage = document.getElementById('container-image');
var image = document.createElement('img');
var backendUrl = '';

const getUrl = async() => {
  let result = await fetch('/routes');
  let data = await result.text()
  backendUrl = data
}

getUrl();

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const enviarDados = async (word) => {
    await fetch(backendUrl+'/api/projects', 
    {
      method : "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body : JSON.stringify({'palavra' : word})
    })
  }

  const obterDados = async () => {
    await delay(2000);
    let result = await fetch(backendUrl+'/api/projects')
    let words = await result.json()
    return words.response
  }

  const addLoadImage = () => {
    image.src = 'transparent.gif';
    image.className = 'loader';
    containerImage.appendChild(image);
  }

  const clearWords = () => {
    var spans = document.getElementsByTagName('span');
    //Como o tamanho do vetor muda conforme é feito a remoção de elementos, é necessário guardar o valor inicial
    let spansLength = spans.length;
    for(let i = 0; i < spansLength; i++){
      spans[0].remove();
    }
  }

  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    clearWords();
    await enviarDados(input.value);
    addLoadImage();
    var data = [];
    let condition = true
      while(condition){
        data = await obterDados()
        for(let dado of data){
          if(dado === '1'){
            condition = false;
            image.remove();
            break;
          }
          var item = document.createElement('span');
          item.textContent = dado;
          switch (dado.length) {
            case 4:
                words_4.appendChild(item);
              break;
            case 5:
                words_5.appendChild(item);
                break;
            case 6:
                words_6.appendChild(item);
                break;
            case 7:
                words_7.appendChild(item);
                break;
            case 8:
                words_8.appendChild(item);
                break;
            case 9:
                words_9.appendChild(item);
                break;
            case 10:
                words_10.appendChild(item);
                break;
            case 11:
                words_11.appendChild(item);
                break;

            default:
              words_12.appendChild(item);
              break;
          }
          
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
  });