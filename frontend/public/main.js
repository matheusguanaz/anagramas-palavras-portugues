var form = document.getElementById('form');
var input = document.getElementById('input');
var words = [];
for(let i = 4; i < 13;i++){
  words[i] = document.getElementById(`words-${i}`);
}

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
                words[4].appendChild(item);
              break;
            case 5:
                words[5].appendChild(item);
                break;
            case 6:
                words[6].appendChild(item);
                break;
            case 7:
                words[7].appendChild(item);
                break;
            case 8:
                words[8].appendChild(item);
                break;
            case 9:
                words[9].appendChild(item);
                break;
            case 10:
                words[10].appendChild(item);
                break;
            case 11:
                words[11].appendChild(item);
                break;

            default:
              words[12].appendChild(item);
              break;
          }
          
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
  });