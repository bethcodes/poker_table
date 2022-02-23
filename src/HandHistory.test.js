import HandHistory from './HandHistory.js';

test('stack', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    expect(hand.stack('KB')).toBe(100);
});

test('bet reduces stack', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addBet('KB', 40)
    expect(hand.stack('KB')).toBe(60);
});

test('bet increases pot', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    expect(hand.pot()).toBe(0);
    hand.addBet('KB', 40)
    expect(hand.pot()).toBe(40);
    expect(hand.stack('KB')).toBe(60);
});

test('hand & hero', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('BA', 200);
    expect(hand.cards()).toBe('AdJh');
    expect(hand.isHero('KB')).toBe(true);
    expect(hand.isHero('BA')).toBe(false);
});

test('folding', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    hand.addBet('KB', 50);
    hand.fold('BA');
    expect(hand.isFolded('KB')).toBe(false);
    expect(hand.isFolded('BA')).toBe(true);
})

test('preflop actions', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    hand.addBet('KB', 50);
    hand.fold('BA');
    const kb = hand.preflopActions('KB');
    expect(kb.length).toBe(1);
    expect(kb[0].action).toBe('bet');
})

test('players', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    expect(hand.players()).toEqual(['KB', 'BA']);
})

test('flop', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    hand.addStack('LA', 150);
    hand.addBet('KB', 3);
    hand.addBet('BA', 5);
    hand.fold('LA');
    hand.addBet('KB', 2);
    hand.check('BA');
    hand.dealFlop('3d7h9c');
    hand.actionOn('KB');

    expect(hand.hasAction('KB')).toBe(true);
    expect(hand.hasAction('BA')).toBe(false);
    expect(hand.flop()).toBe('3d7h9c');
})

test('no flop', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    hand.addStack('LA', 150);
    hand.addBet('KB', 3);
    hand.addBet('BA', 5);
    hand.actionOn('LA');

    expect(hand.flop()).toBe(undefined);
})

test('turn', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    hand.addStack('LA', 150);
    hand.addBet('KB', 3);
    hand.addBet('BA', 5);
    hand.fold('LA');
    hand.addBet('KB', 2);
    hand.check('BA');
    hand.dealFlop('3d7h9c');
    hand.check('KB');
    hand.check('BA');
    hand.dealTurn('4d');
    hand.actionOn('KB');

    expect(hand.turn()).toBe('4d');
})

test('river', () => {
    const hand = new HandHistory('KB', 'AdJh');
    hand.addStack('KB', 100);
    hand.addStack('BA', 200);
    hand.addStack('LA', 150);
    hand.addBet('KB', 3);
    hand.addBet('BA', 5);
    hand.fold('LA');
    hand.addBet('KB', 2);
    hand.check('BA');
    hand.dealFlop('3d7h9c');
    hand.check('KB');
    hand.check('BA');
    hand.dealTurn('4d');
    hand.check('KB');
    hand.check('BA');
    hand.dealRiver('5c');
    hand.actionOn('KB');

    expect(hand.river()).toBe('5c');
})

