export class PlayersChoice {
    fighterPlayerLeft;
    fighterPlayerRight;

    getFighterPlayerLeft() {
        return this.fighterPlayerLeft;
    }

    getFighterPlayerRight() {
        return this.fighterPlayerRight;
    }

    setFighterPlayerLeft(fighter) {
        this.fighterPlayerLeft = fighter;
    }

    setFighterPlayerRight(fighter) {
        this.fighterPlayerRight = fighter;
    }
}