import psycopg2, os

con = psycopg2.connect(os.environ['DB_CONNECTION'])


def select(query):
    cursor = con.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    return result

def executeQuery(query):
    cursor = con.cursor()
    cursor.execute(query)
    con.commit()



