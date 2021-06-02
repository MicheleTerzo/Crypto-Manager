from pymongo import MongoClient
from pprint import pprint

client = MongoClient("mongodb+srv://admin:admin@cryptodb.z1jdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.admin

serverStatus = db.command("serverStatus")
pprint(serverStatus)
