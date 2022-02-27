import HandHistory from './HandHistory.js';

test('stack', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100);
    expect(hand.stack('KB')).toBe(100);
});

test('bet reduces stack', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .bet('KB', 40);
    expect(hand.stack('KB')).toBe(60);
});

test('bet increases pot', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100);
    expect(hand.pot()).toBe(0);
    const afterBet = hand.bet('KB', 40)
    expect(afterBet.pot()).toBe(40);
    expect(afterBet.stack('KB')).toBe(60);
});

test('hand & hero', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('BA', 200);
    expect(hand.cards()).toBe('AdJh');
    expect(hand.isHero('KB')).toBe(true);
    expect(hand.isHero('BA')).toBe(false);
});

test('folding', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200)
        .bet('KB', 50)
        .fold('BA');
    expect(hand.isFolded('KB')).toBe(false);
    expect(hand.isFolded('BA')).toBe(true);
})

test('preflop actions', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200)
        .bet('KB', 50)
        .fold('BA');
    const kb = hand.preflopActions('KB');
    expect(kb.length).toBe(1);
    expect(kb[0].action).toBe('bet');
})

test('players', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200);
    expect(hand.players()).toEqual(['KB', 'BA']);
})

test('flop', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200)
        .sit('LA', 150)
        .bet('KB', 3)
        .bet('BA', 5)
        .fold('LA')
        .bet('KB', 2)
        .check('BA')
        .dealFlop('3d7h9c')
        .actionOn('KB');

    expect(hand.hasAction('KB')).toBe(true);
    expect(hand.hasAction('BA')).toBe(false);
    expect(hand.flop()).toBe('3d7h9c');
})

test('no flop', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200)
        .sit('LA', 150)
        .bet('KB', 3)
        .bet('BA', 5)
        .actionOn('LA');

    expect(hand.flop()).toBe(undefined);
})

test('turn', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200)
        .sit('LA', 150)
        .bet('KB', 3)
        .bet('BA', 5)
        .fold('LA')
        .bet('KB', 2)
        .check('BA')
        .dealFlop('3d7h9c')
        .check('KB')
        .check('BA')
        .dealTurn('4d')
        .actionOn('KB');

    expect(hand.turn()).toBe('4d');
})

test('river', () => {
    const hand = new HandHistory('KB', 'AdJh')
        .sit('KB', 100)
        .sit('BA', 200)
        .sit('LA', 150)
        .bet('KB', 3)
        .bet('BA', 5)
        .fold('LA')
        .bet('KB', 2)
        .check('BA')
        .dealFlop('3d7h9c')
        .check('KB')
        .check('BA')
        .dealTurn('4d')
        .check('KB')
        .check('BA')
        .dealRiver('5c')
        .actionOn('KB');

    expect(hand.river()).toBe('5c');
})

