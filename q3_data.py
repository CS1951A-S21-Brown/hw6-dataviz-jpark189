import csv
import pandas as pd

df = pd.read_csv("./data/video_games.csv")

# Genre: Action
df_action = df[df["Genre"] == "Action"]
df_action = df_action.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_action.to_csv("./data/video_games_q3_action.csv")

# Genre: Adventure
df_adventure = df[df["Genre"] == "Adventure"]
df_adventure = df_adventure.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_adventure.to_csv("./data/video_games_q3_adventure.csv")

# Genre: Fighting
df_fighting = df[df["Genre"] == "Fighting"]
df_fighting = df_fighting.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_fighting.to_csv("./data/video_games_q3_fighting.csv")

# Genre: Misc
df_misc = df[df["Genre"] == "Misc"]
df_misc = df_misc.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_misc.to_csv("./data/video_games_q3_misc.csv")

# Genre: Platform
df_platform = df[df["Genre"] == "Platform"]
df_platform = df_platform.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_platform.to_csv("./data/video_games_q3_platform.csv")

# Genre: Puzzle
df_puzzle = df[df["Genre"] == "Puzzle"]
df_puzzle = df_puzzle.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_puzzle.to_csv("./data/video_games_q3_puzzle.csv")

# Genre: Racing
df_racing = df[df["Genre"] == "Racing"]
df_racing = df_racing.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_racing.to_csv("./data/video_games_q3_racing.csv")

# Genre: Role-Playing
df_role_playing = df[df["Genre"] == "Role-Playing"]
df_role_playing = df_role_playing.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_role_playing.to_csv("./data/video_games_q3_role_playing.csv")

# Genre: Shooter
df_shooter = df[df["Genre"] == "Shooter"]
df_shooter = df_shooter.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_shooter.to_csv("./data/video_games_q3_shooter.csv")

# Genre: Simulation
df_simulation = df[df["Genre"] == "Simulation"]
df_simulation = df_simulation.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_simulation.to_csv("./data/video_games_q3_simulation.csv")

# Genre: Sports
df_sports = df[df["Genre"] == "Sports"]
df_sports = df_sports.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_sports.to_csv("./data/video_games_q3_sports.csv")

# Genre: Strategy
df_strategy = df[df["Genre"] == "Strategy"]
df_strategy = df_strategy.groupby(["Genre", "Publisher"]).sum().sort_values(by=["Global_Sales"])
df_strategy.to_csv("./data/video_games_q3_strategy.csv")

print(df_strategy)