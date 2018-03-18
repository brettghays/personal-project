UPDATE Users
SET firstname = $2, lastname = $3, iscoach = $4
WHERE session_id = $1;