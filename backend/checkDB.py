import time

condition = True

while(condition):
    try:
        from utils import select
        result = select("select * from z where palavra like 'zíperes%'")
        if(result==[]):
            print("Banco de dados ainda não totalmente inicializado, aguarde ...")
            time.sleep(10)
            continue
        condition = False
    except:
        print("Banco de dados não disponível para conexão")
        time.sleep(120)
print("Banco de dados pronto para aceitar conexões")
