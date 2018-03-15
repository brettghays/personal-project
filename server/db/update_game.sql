UPDATE Schedule
SET game_date = $2, game_time = $3, home_team = $4, home_image = $5, guest_team = $6, guest_image = $7, game_location = $8, game_result = $9, home_score = $10, guest_score = $11
WHERE game_id = $1;