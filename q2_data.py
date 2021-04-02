import csv
import pandas as pd

df = pd.read_csv("./data/video_games.csv")
df_new = df.groupby(["Genre"]).sum()
df_new.to_csv("./data/video_games_q2_modified.csv")

print(df_new)