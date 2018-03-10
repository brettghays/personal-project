UPDATE Users
SET firstname = $2, lastname = $3, email = $4, iscoach = $5
WHERE session_id = $1;