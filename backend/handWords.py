import utils, itertools, time, threading, unidecode

#Converte tupla para string
def convertTuple(tup):
    str = ''.join(tup)
    return str

#Retorna todas as combinações possíveis no tamanho da string
def returnWords(wordName):
    words = []
    for word in list(itertools.permutations(wordName)):
        words.append(convertTuple(word))
    return words

#Retorna todas as combinações possíveis de tamanho 4 até o tamanho da string
def stringsToSearch(array):
    words = []
    for c in range(4, len(array)+1):
        for subset in itertools.combinations(array, c):
            words.append(subset)
    return words

def verifyIfHasStringInList(word, listWords):
    for itemWord in listWords:
        if(sorted(word)==sorted(itemWord)):
            return True
    return False

#Pega as combinações possiveis e verifica se há correspondencia no banco de dados
def findRightWords(words):
    oldwords = []
    for word in words:
        if(word[0]=='ç'):
            word = word.replace("ç","c")
        result = utils.select("select * from {0} where unaccent(palavra) SIMILAR TO unaccent('{1}%')".format(unidecode.unidecode(word[0]),word))
        
        if(result and result[0][0].replace("\n","") == word):
            if(not (word in oldwords)):
                oldwords.append(word)
                utils.executeQuery("INSERT INTO palavras (palavra, status) VALUES ('{0}', 0);".format(word))

def start(wordReceived):
    ini = time.time()
    wordsToCombine = stringsToSearch(wordReceived)
    stringsToCombine = []
    threads = []
    for word in wordsToCombine:
        stringWord = convertTuple(word)
        if(not(verifyIfHasStringInList(stringWord, stringsToCombine))):
            stringsToCombine.append(stringWord)

    for string in stringsToCombine:
        words = returnWords(string)
        task = threading.Thread(target=findRightWords, args=(words,))
        threads.append(task)
        task.start()
        
        #findRightWords(words)
    
        # for thread in threads:
        #     thread.join()
        threads[-1].join()
    utils.executeQuery("INSERT INTO palavras (palavra, status) VALUES ('1', 0)")
    print(time.time() - ini)
    
    





