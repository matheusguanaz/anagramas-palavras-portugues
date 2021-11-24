from utils import con

file = open('palavras.txt','r',encoding='utf-8')


alfabeto = ['A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

cursor = con.cursor()
i = 0
for palavra in file.readlines():
    if (not(palavra[0] == alfabeto[i])):
        i+=1
    cursor.execute("INSERT INTO {0} VALUES('{1}')".format(alfabeto[i], palavra))
    con.commit()
    print(i)
con.close()
file.close()