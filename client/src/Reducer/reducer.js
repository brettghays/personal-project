import axios from 'axios';
//setup initial state
const initialState = {
    //auth props
    user: {},
    sessionid: '',
    firstname: '',
    lastname: '',
    email: '',
    isCoach: true,
    //schedule props
    schedule: [],
    original_game: [],
    game_id: '',
    game_date: '',
    game_time: '',
    home_team: '',
    home_image: '',
    guest_team: '',
    guest_image: '',
    game_location: '',
    game_result: '',
    home_score: '',
    guest_score: '',
    //game_card: 'view',
    //schedule and roster prop
    edit_mode: false,
    //roster props
    roster: [],
    original_player: [],
    player_id: '',
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
//Auth action types
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_SESSIONID = 'UPDATE_SESSIONID'
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_ISCOACH = "UPDATE_ISCOACH";
//Schedule action types
const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
const UPDATE_ORIGINAL_GAME = 'UPDATE_ORIGINAL_GAME';
const UPDATE_GAME_ID = 'UPDATE_GAME_ID';
const UPDATE_GAME_DATE = 'UPDATE_GAME_DATE';
const UPDATE_GAME_TIME = 'UPDATE_GAME_TIME';
const UPDATE_HOME_TEAM = 'UPDATE_HOME_TEAM';
const UPDATE_HOME_IMAGE = 'UPDATE_HOME_IMAGE';
const UPDATE_GUEST_TEAM = 'UPDATE_GUEST_TEAM';
const UPDATE_GUEST_IMAGE = 'UPDATE_GUEST_IMAGE';
const UPDATE_GAME_LOCATION = 'UPDATE_GAME_LOCATION';
const UPDATE_GAME_RESULT = 'UPDATE_GAME_RESULT';
const UPDATE_HOME_SCORE = 'UPDATE_HOME_SCORE';
const UPDATE_GUEST_SCORE = 'UPDATE_GUEST_SCORE';
//const UPDATE_GAME_CARD = 'UPDATE_GAME_CARD';
//Schedule/Roster action type
const UPDATE_EDIT_MODE = 'UPDATE_EDIT_MODE';
//Roster action types
const UPDATE_ROSTER = 'UPDATE_ROSTER';
const UPDATE_ORIGINAL_PLAYER = 'UPDATE_ORIGINAL_PLAYER';
const UPDATE_PLAYER_ID = 'UPDATE_PLAYER_ID';
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
        //auth cases
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});
        
        case UPDATE_SESSIONID:
            return Object.assign({}, state, {sessionid: action.payload});

        case UPDATE_FIRSTNAME:
            return Object.assign({}, state, {firstname: action.payload});

        case UPDATE_LASTNAME:
            return Object.assign({}, state, {lastname: action.payload});

        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload});

        case UPDATE_ISCOACH:
            return Object.assign({}, state, {isCoach: action.payload});

        //schedule cases
        case UPDATE_SCHEDULE:
            return Object.assign({}, state, {schedule: action.payload});

        case UPDATE_ORIGINAL_GAME:
            return Object.assign({}, state, {original_game: action.payload});

        case UPDATE_GAME_ID:
            return Object.assign({}, state, {game_id: action.payload});

        case UPDATE_GAME_DATE:
            return Object.assign({}, state, {game_date: action.payload});

        case UPDATE_GAME_TIME:
            return Object.assign({}, state, {game_time: action.payload})    ;

        case UPDATE_HOME_TEAM:
            return Object.assign({}, state, {home_team: action.payload});

        case UPDATE_HOME_IMAGE:
            return Object.assign({}, state, {home_image: action.payload});

        case UPDATE_GUEST_TEAM:
            return Object.assign({}, state, {guest_team: action.payload});

        case UPDATE_GUEST_IMAGE:
            return Object.assign({}, state, {guest_image: action.payload});

        case UPDATE_GAME_LOCATION:
            return Object.assign({}, state, {game_location: action.payload});

        case UPDATE_GAME_RESULT:
            return Object.assign({}, state, {game_result: action.payload});

        case UPDATE_HOME_SCORE:
            return Object.assign({}, state, {home_score: action.payload});

        case UPDATE_GUEST_SCORE:
            return Object.assign({}, state, {guest_score: action.payload});

        /* case UPDATE_GAME_CARD:
            return Object.assign({}, state, {game_card: action.payload}); */

        //Schedule/Roster case
        case UPDATE_EDIT_MODE:
            return Object.assign({}, state, {edit_mode: action.payload});

        //Roster cases
        case UPDATE_ROSTER:
            return Object.assign({}, state, {roster: action.payload});

        case UPDATE_ORIGINAL_PLAYER:
            return Object.assign({}, state, {original_player: action.payload});

        case UPDATE_PLAYER_ID:
            return Object.assign({}, state, {player_id: action.payload});

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
//auth functions
export function getUserInfo() {
    const userInfo = axios.get('/api/auth/me').then( res => {
        return res.data
    })
    console.log(userInfo)
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}
export function updateSessionID (sessionID) {
    return {
        type: UPDATE_SESSIONID,
        payload: sessionID
    }
}
export function updateFirstname (firstname) {
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstname
    }
}
export function updateLastname (lastname) {
    return {
        type: UPDATE_LASTNAME,
        payload: lastname
    }
}
export function updateEmail (email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}
export function updateIsCoach (status) {
    return {
        type: UPDATE_ISCOACH,
        payload: status
    }
}
//schedule functions
export function updateSchedule (schedule) {
    return {
        type: UPDATE_SCHEDULE,
        payload: schedule
    }
}
export function updateOriginalGame (game) {
    return {
        type: UPDATE_ORIGINAL_GAME,
        payload: game
    }
}
export function updateGameId (gameID) {
    return {
        type: UPDATE_GAME_ID,
        payload: gameID
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
export function updateHomeImage (homeImage) {
    return {
        type: UPDATE_HOME_IMAGE,
        payload: homeImage
    }
}
export function updateGuestTeam (guestTeam) {
    return {
        type: UPDATE_GUEST_TEAM,
        payload: guestTeam
    }
}
export function updateGuestImage (guestImage) {
    return {
        type: UPDATE_GUEST_IMAGE,
        payload: guestImage
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
/* export function updateGameCard (mode) {
    return {
        type: UPDATE_GAME_CARD,
        payload: mode
    }
} */
//Schedule/Roster Function
export function updateEditMode (mode) {
    return {
        type: UPDATE_EDIT_MODE,
        payload: mode
    }
}
//Roster Function
export function updateRoster (roster) {
    return {
        type: UPDATE_ROSTER,
        payload: roster
    }
}
export function updateOriginalPlayer (player) {
    return {
        type: UPDATE_ORIGINAL_PLAYER,
        payload: player
    }
}
export function updatePlayerID (id) {
    return {
        type: UPDATE_PLAYER_ID,
        payload: id
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