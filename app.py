from flask import Flask, jsonify, render_template, Response
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
import datetime as dt
import pandas as pd


#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://postgres:postgres@localhost:5432/project_2", echo=True)


# reflect an existing database into a new model
Base = automap_base()


# reflect the tables
Base.prepare(engine, reflect=True)


# Save references to tables
combined_scores = Base.classes.combined_scores
emmys_mega_channels = Base.classes.emmys_mega_channels
platforms_whole = Base.classes.platforms_whole


# Create our session (link) from Python to the DB
session = Session(engine)

#///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    query = f"""SELECT * FROM combined_scores"""
    conn = engine.connect()
    data_table1 = pd.read_sql(query, conn)
    return data_table1.to_json(orient="values")

@app.route("/1")
def home():
    return render_template("index.html")

@app.route("/test")
def test():
    return render_template("index2.html")

@app.route("/data")
def plot_data():
    query = f"""SELECT * FROM combined_scores"""
    conn = engine.connect()
    plot_table = pd.read_sql(query, conn)
    return plot_table.to_json(orient='values')

@app.route("/2")
def data2():
    query = f"""SELECT * FROM platforms_whole"""
    conn = engine.connect()
    plot_table = pd.read_sql(query, conn)
    return plot_table.to_json(orient='values')
    

# @app.route("/")
# def test():
#     query = f"""SELECT * FROM combined_scores"""
#     conn = engine.connect()
#     scores = pd.read_sql(query, conn)
#     chart_data = scores.to_dict(orient='records')
#     chart_data = json.dumps(chart_data, indent=2)
#     data = {'chart_data': chart_data}
#     return render_template("index.html", data=data)
    


if __name__ == "__main__":
    app.run()



