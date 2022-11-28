import axios from "axios";

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = '?client_id=' + id + '?client_secret=' + sec;

const handleError = (error) => console.error(error)

const getProfile = (username) => {
    return axios.get('https://api.github.com/users/' + username + params)
        .then(user => user.data)
        .catch(handleError)
}

const getRepos = (username) => {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
        .then(repos => repos.data)
        .catch(handleError)
}

const getStartCount = (repos) => {
    return repos.reduce((count, repo) => {
        return count + repo.stargazers_count;
    }, 0)
}

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStartCount(repos);
    return (followers * 3) + totalStars;
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score)

const getUserData = (player) => {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(data => {
        const profile = data[0];
        const repos = data[1];
        return {
            profile,
            score: calculateScore(profile, repos)
        }
    })
}

export const getBattleInfo = (players) => {
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}
