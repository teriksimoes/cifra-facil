const axios = require('axios')

async function getToken(){

    result = await axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'client_credentials',
        client_id: '3f74e2bae31a4f10af2152f729817b7e',
        client_secret: 'a5583199acb944fb97521b792dad7d36'
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }) 

    return result

}

async function getPlaylist(){

    let response = await getToken()
    let token = response.data.access_token

    result = await axios.get('https://api.spotify.com/v1/playlists/1GuL4dCjVkYflIF6xQN9Dv?si=a9760abc07284441', {
        headers: {
        'Authorization': `Bearer ${token}`
    }
    })

    return result
}

module.exports = {getPlaylist}