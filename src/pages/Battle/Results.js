import React from "react";
import { Link } from 'react-router-dom'
import qs from 'query-string';
import { getBattleInfo } from "../../api/getBattleInfo";
import Player from "./Player";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            loading: true,
            error: null
        }
    }
    componentDidMount() {
        const { playerOneName, playerTwoName } = qs.parse(this.props.location.search);
        getBattleInfo([playerOneName, playerTwoName])
            .then(players => {
                this.setState({
                    winner: players[0],
                    loser: players[1],
                    loading: false,
                    error: null
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: 'It was an error. Check both users.'
                })
            })
    }
    render() {
        const { winner, loser, loading, error } = this.state;
        if (loading) {
            return <p>Loading..</p>
        }
        if (error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        console.log(this.state.winner)
        return (
            <div className="row">
                <Player
                    label='Winner'
                    profile={winner.profile}
                    score={winner.score}
                />
                <Player
                    label='Loser'
                    profile={loser.profile}
                    score={loser.score}
                />
            </div>
        )
    }
}

export default Results;