import React from "react";
import PlayerInput from './PlayerInput'
import { Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(id, username) {
        this.setState(() => {
            return {
                [id + 'Name']: username,
                [id + 'Image']: 'https://github.com/' + username + '.png?size=200'
            }
        })
    }

    handleReset(id) {
        this.setState(() => {
            return {
                [id + 'Name']: '',
                [id + 'Image']: null
            }
        })
    }

    render() {
        const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state;
        return (
            <div>
                <div className="row">
                    {!playerOneName ?
                        <PlayerInput
                            id="playerOne"
                            label='Player 1'
                            onSubmit={this.onSubmitHandler}
                        /> :
                        <PlayerPreview
                            avatar={playerOneImage}
                            username={playerOneName}
                        >
                            <button className="reset" onClick={() => this.handleReset('playerOne')}>Reset</button>
                        </PlayerPreview>
                    }
                    {!playerTwoName ?
                        <PlayerInput
                            id="playerTwo"
                            label='Player 2'
                            onSubmit={this.onSubmitHandler}
                        /> :
                        <PlayerPreview
                            avatar={playerTwoImage}
                            username={playerTwoName}
                        >
                            <button className="reset" onClick={() => this.handleReset('playerTwo')}>Reset</button>
                        </PlayerPreview>
                    }

                </div>
                {playerOneImage && playerTwoImage &&
                    <Link className="button" to={{
                        pathname: this.props.match.url + '/results',
                        search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                    }}>
                        Battle
                    </Link>
                }
            </div>
        )
    }
}

export default Battle;
