UPDATE Schedule
SET game_date = $2, game_time = $3, home_team = $4, guest_team = $5, game_location = $6, game_result = $7, home_score = $8, guest_score = $9
WHERE game_id = $1;