import psycopg2, os

con = psycopg2.connect(os.environ['DB_CONNECTION'])


def select(query):
    con = psycopg2.connect(os.environ['DB_CONNECTION'])
    cursor = con.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    con.close()
    return result

def executeQuery(query):
    con = psycopg2.connect(os.environ['DB_CONNECTION'])
    cursor = con.cursor()
    cursor.execute(query)
    con.commit()
    con.close()



