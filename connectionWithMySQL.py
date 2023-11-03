import mysql.connector
import sqlalchemy as db

import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import Table, MetaData


# Specify the path to your CSV file
csv_file = 'C:\\Users\\ssant\\Downloads\\sample.csv'

# Read the CSV file into a Pandas DataFrame
details = pd.read_csv(csv_file)

df=pd.DataFrame(data=details)
print(df.get("CompanyName"))
# Ensure that column names in the DataFrame match the MySQL table's column names
df.columns = ['Date', 'CompanyName', 'investment', 'billingAmt']

# Replace these placeholders with your actual database information
host = "localhost"
user = "root"
password = "Sus$2121"
database = "mydb"

# Create an SQLAlchemy engine
try:
  engine = create_engine(f"mysql://{user}:{password}@{host}/{database}")
  # Create a connection
  connection = engine.connect()
except engine.OperationalError as e:
  raise e
else:
    print("connected")


try:
    # Attempt to insert data into the table
    df.to_sql(con=engine, name='testing', if_exists='append', index=False)
    print("Data inserted successfully.")
except Exception as e:
    print(f"Error inserting data: {str(e)}")

