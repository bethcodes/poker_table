class HandHistory {

    constructor({player, cards, actions = [], actingNext = null}) {
        this.actions = actions;
        this.hero = player;
        this.heroCards = cards;
        this.actingNext = actingNext;
    }

    // After you build one then for fuck's sake don't modify it. I'm trusting you.

    // Actions

    sit(player, amount) {
        return this._withAction({action: 'stack', player: player, amount: amount});
    }

    bet(player, amount) {
        return this._withAction({action: 'bet', player: player, amount: amount});
    }

    fold(player) {
        return this._withAction({action: 'fold', player: player});
    }

    check(player) {
        return this._withAction({action: 'check', player: player});
    }

    dealFlop(cards) {
        return this._withAction({action: 'flop', cards: cards});
    }

    dealTurn(card) {
        return this._withAction({action: 'turn', card: card});
    }

    dealRiver(card) {
        return this._withAction({action: 'river', card: card});
    }

    actionOn(player) {
        return new HandHistory({...this.state, actingNext: player});
    }

    // Queries

    stack(player) {
        var result = 0;
        this.actionsFor(player).forEach(each => {
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

    players() {
        const stacks = this.actions.filter(each => each.action === 'stack');
        return stacks.map(each => each.player);
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
        return this.actingNext === player;
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

    preflopActions(player) {
        const preFlop = this.actions.slice(0, this.flopIndex());
        return preFlop.filter(each => each.player === player && ['check', 'bet', 'fold'].includes(each.action));
    }

    flopActions(player) {
        const flop = this.actions.slice(this.flopIndex(), this.turnIndex());
        return flop.filter(each => each.player === player && ['check', 'bet', 'fold'].includes(each.action));
    }

    turnActions(player) {
        const turn = this.actions.slice(this.turnIndex(), this.riverIndex());
        return turn.filter(each => each.player === player && ['check', 'bet', 'fold'].includes(each.action));
    }

    riverActions(player) {
        const turn = this.actions.slice(this.riverIndex(), this.actions.length);
        return turn.filter(each => each.player === player && ['check', 'bet', 'fold'].includes(each.action));
    }

    // Utilities
    
    actionsFor(player) {
        return this.actions.filter(each => each.player === player);
    }
    
    flopIndex() {
        const index = this.actions.findIndex(each => each.action === 'flop');
        return index === -1 ? this.actions.length : index;
    }

    turnIndex() {
        const index = this.actions.findIndex(each => each.action === 'turn');
        return index === -1 ? this.actions.length : index;
    }

    riverIndex() {
        const index = this.actions.findIndex(each => each.action === 'river');
        return index === -1 ? this.actions.length : index;
    }

    get state() {
        return {
            player: this.hero,
            cards: this.heroCards,
            actions: this.actions,
            actingNext: this.actingNext
        }
    }

    _withAction(action) {
        return new HandHistory({...this.state, actions: [...this.actions, action]});
    }
}

// actions for player, street

export default HandHistory;