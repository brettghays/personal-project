UPDATE Roster
SET first_name = $2, last_name = $3, player_number = $4, player_height = $5, position = $6,roster_years = $7, player_image = $8, player_fav_food = $9, player_fav_quote = $10,player_unique_fact = $11, player_nickname =$12, classyear = $13
WHERE player_id = $1;