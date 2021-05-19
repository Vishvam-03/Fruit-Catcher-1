class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
          // create the property for the score and intialize with zero
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data){
            gameState = data.val();
        })
    }


    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
