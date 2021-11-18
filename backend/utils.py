import psycopg2

con = psycopg2.connect(host='postgres', database='postgres',user='postgres', password='postgres', port='5432')

def select(query):
    cursor = con.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    return result

def executeQuery(query):
    cursor = con.cursor()
    cursor.execute(query)
    con.commit()



