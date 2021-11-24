from flask import Flask, request
from flask_cors import CORS
import threading, os, utils
import handWords as hw

app = Flask(__name__)
CORS(app)


@app.route("/api/projects", methods=["POST"])
def startProcess():
    try:
        utils.executeQuery("TRUNCATE TABLE palavras")
        jsonContent = request.json
        task = threading.Thread(target= hw.start, args=(jsonContent["palavra"],))
        task.start()
        return {'message': 'Processo iniciado com sucesso'}
    except:
        return {'message': 'Não foi possível iniciar o processo'}

@app.route("/api/projects", methods=["GET"])
def returnWords():
    result = utils.select("SELECT distinct palavra FROM palavras WHERE status = 0 order by palavra desc")
    response = []
    for item in result:
        response.append(item[0])
        utils.executeQuery("UPDATE palavras set status = 1 where palavra = '{0}'".format(item[0]))
    return {"response" : response}



app.run(host=os.environ['HOST'], port=os.environ['PORT'], debug=True)




