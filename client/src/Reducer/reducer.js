//setup initial state
const initialState = {
    schedule: [],
    game_date: '',
    game_time: '',
    home_team: '',
    guest_team: '',
    game_location: '',
    game_result: '',
    home_score: '',
    guest_score: '',
    roster: [],
    first_name: '',
    last_name: '',
    player_number: '',
    player_height: '',
    position: '',
    roster_years: '',
    player_image: '',
    player_fav_food: '',
    player_fav_quote: '',
    player_unique_fact: '',
    player_nickname: ''
}

//set up action types
const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
const UPDATE_GAME_DATE = 'UPDATE_GAME_DATE';
const UPDATE_GAME_TIME = 'UPDATE_GAME_TIME';
const UPDATE_HOME_TEAM = 'UPDATE_HOME_TEAM';
const UPDATE_GUEST_TEAM = 'UPDATE_GUEST_TEAM';
const UPDATE_GAME_LOCATION = 'UPDATE_GAME_LOCATION';
const UPDATE_GAME_RESULT = 'UPDATE_GAME_RESULT';
const UPDATE_HOME_SCORE = 'UPDATE_HOME_SCORE';
const UPDATE_GUEST_SCORE = 'UPDATE_GUEST_SCORE';
const UPDATE_ROSTER = 'UPDATE_ROSTER';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_PLAYER_NUMBER = 'UPDATE_PLAYER_NUMBER';
const UPDATE_PLAYER_HEIGHT = 'UPDATE_PLAYER_HEIGHT';
const UPDATE_POSITION = 'UPDATE_POSITION';
const UPDATE_ROSTER_YEARS = 'UPDATE_ROSTER_YEARS';
const UPDATE_PLAYER_IMAGE = 'UPDATE_PLAYER_IMAGE';
const UPDATE_PLAYER_FAV_FOOD = 'UPDATE_PLAYER_FAV_FOOD';
const UPDATE_PLAYER_FAV_QUOTE = 'UPDATE_PLAYER_FAV_QUOTE';
const UPDATE_UNIQUE_FACT = 'UPDATE_UNIQUE_FACT';
const UPDATE_NICKNAME = 'UPDATE_NICKNAME';

//set up function reducer
function reducer(state=initialState, action) {
    switch(action.type){
        case UPDATE_SCHEDULE:
            return Object.assign({}, state, {schedule: action.payload});

        case UPDATE_GAME_DATE:
            return Object.assign({}, state, {game_date: action.payload});

        case UPDATE_GAME_TIME:
            return Object.assign({}, state, {game_time: action.payload})    ;

        case UPDATE_HOME_TEAM:
            return Object.assign({}, state, {home_team: action.payload});

        case UPDATE_GUEST_TEAM:
            return Object.assign({}, state, {guest_team: action.payload});

        case UPDATE_GAME_LOCATION:
            return Object.assign({}, state, {game_location: action.payload});

        case UPDATE_GAME_RESULT:
            return Object.assign({}, state, {game_result: action.payload});

        case UPDATE_HOME_SCORE:
            return Object.assign({}, state, {home_score: action.payload});

        case UPDATE_GUEST_SCORE:
            return Object.assign({}, state, {guest_score: action.payload});

        case UPDATE_ROSTER:
            return Object.assign({}, state, {roster: action.payload});

        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, {first_name: action.payload});

        case UPDATE_LAST_NAME:
            return Object.assign({}, state, {last_name: action.payload});

        case UPDATE_PLAYER_NUMBER:
            return Object.assign({}, state, {player_number: action.payload});

        case UPDATE_PLAYER_HEIGHT:
            return Object.assign({}, state, {player_height: action.payload});

        case UPDATE_POSITION:
            return Object.assign({}, state, {position: action.payload});

        case UPDATE_ROSTER_YEARS:
            return Object.assign({}, state, {roster_years: action.payload});

        case UPDATE_PLAYER_IMAGE:
            return Object.assign({}, state, {player_image: action.payload});

        case UPDATE_PLAYER_FAV_FOOD:
            return Object.assign({}, state, {player_fav_food: action.payload});

        case UPDATE_PLAYER_FAV_QUOTE:
            return Object.assign({}, state, {player_fav_quote: action.payload});

        case UPDATE_UNIQUE_FACT:
            return Object.assign({}, state, {player_unique_fact: action.payload});

        case UPDATE_NICKNAME:
            return Object.assign({}, state, {player_nickname: action.payload});

        default: return state;
    }
}

//set up action creators
export function updateSchedule (schedule) {
    return {
        type: UPDATE_SCHEDULE,
        payload: schedule
    }
}
export function updateGameDate (gameDate) {
    return {
        type: UPDATE_GAME_DATE,
        payload: gameDate
    }
}
export function updateGameTime (gameTime) {
    return {
        type: UPDATE_GAME_TIME,
        payload: gameTime
    }
}
export function updateHomeTeam (homeTeam) {
    return {
        type: UPDATE_HOME_TEAM,
        payload: homeTeam
    }
}
export function updateGuestTeam (guestTeam) {
    return {
        type: UPDATE_GUEST_TEAM,
        payload: guestTeam
    }
}
export function updateGameLocation (gameLocation) {
    return {
        type: UPDATE_GAME_LOCATION,
        payload: gameLocation
    }
}
export function updateGameResult (gameResult) {
    return {
        type: UPDATE_GAME_RESULT,
        payload: gameResult
    }
}
export function updateHomeScore (homeScore) {
    return {
        type: UPDATE_HOME_SCORE,
        payload: homeScore
    }
}
export function updateGuestScore (guestScore) {
    return {
        type: UPDATE_GUEST_SCORE,
        payload: guestScore
    }
}
export function updateRoster (roster) {
    return {
        type: UPDATE_ROSTER,
        payload: roster
    }
}
export function updateFirstName (firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}
export function updateLastName (lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}
export function updatePlayerNumber (playerNumber) {
    return {
        type: UPDATE_PLAYER_NUMBER,
        payload: playerNumber
    }
}
export function updatePlayerHeight (playerHeight) {
    return {
        type: UPDATE_PLAYER_HEIGHT,
        payload: playerHeight
    }
}
export function updatePosition (position) {
    return {
        type: UPDATE_POSITION,
        payload: position
    }
}
export function updateRosterYears (rosterYears) {
    return {
        type: UPDATE_ROSTER_YEARS,
        payload: rosterYears
    }
}
export function updatePlayerImage (playerImage) {
    return {
        type: UPDATE_PLAYER_IMAGE,
        payload: playerImage
    }
}
export function updateFavFood (favFood) {
    return {
        type: UPDATE_PLAYER_FAV_FOOD,
        payload: favFood
    }
}
export function updateFavQuote (favQuote) {
    return {
        type: UPDATE_PLAYER_FAV_QUOTE,
        payload: favQuote
    }
}
export function updateFact (fact) {
    return {
        type: UPDATE_UNIQUE_FACT,
        payload: fact
    }
}
export function updateNickname (nickname) {
    return {
        type: UPDATE_NICKNAME,
        payload: nickname
    }
}
export default reducer;