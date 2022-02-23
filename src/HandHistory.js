class HandHistory {

    constructor(player, cards) {
        this.actions = [];
        this.hero = player;
        this.heroCards = cards;
    }

    // After you build one then for fuck's sake don't modify it. I'm trusting you.

    // Actions

    addStack(player, amount) {
        this.actions.push({action: 'stack', player: player, amount: amount});
    }

    addBet(player, amount) {
        this.actions.push({action: 'bet', player: player, amount: amount});
    }

    fold(player) {
        this.actions.push({action: 'fold', player: player});
    }

    check(player) {
        this.actions.push({action: 'check', player: player});
    }

    dealFlop(cards) {
        this.actions.push({action: 'flop', cards: cards});
    }

    dealTurn(card) {
        this.actions.push({action: 'turn', card: card});
    }

    dealRiver(card) {
        this.actions.push({action: 'river', card: card});
    }

    actionOn(player) {
        this.actionOn = player;
    }

    // Queries

    stack(player) {
        var result = 0;
        this.actionsFor(player).map(each => {
            switch(each.action) {
                case 'stack':
                    result += each.amount;
                    break;
                case 'bet':
                    result -= each.amount;
                    break;
            }
        });
        return result;
    }

    pot() {
        const bets = this.actions.filter(each => each.action === 'bet');
        return bets.reduce((prev, each) => prev + each.amount, 0);
    }
    
    cards() {
        return this.heroCards;
    }
    
    isHero(player) {
        return this.hero === player;
    }
    
    isFolded(player) {
        const actions = this.actionsFor(player);
        return actions[actions.length - 1].action === 'fold';
    }

    hasAction(player) {
        return this.actionOn === player;
    }

    flop() {
        const action = this.actions.find(each => each.action === 'flop');
        return action ? action.cards : undefined;
    }

    turn() {
        const action = this.actions.find(each => each.action === 'turn');
        return action ? action.card : undefined;
    }

    river() {
        const action = this.actions.find(each => each.action === 'river');
        return action ? action.card : undefined;
    }

    // Utilities
    
    actionsFor(player) {
        return this.actions.filter(each => each.player === player);
    }

}

// actions for player, street

export default HandHistory;