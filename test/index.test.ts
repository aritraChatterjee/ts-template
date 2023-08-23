import { greet } from '../src';

describe('method::greet', () => {
    it('works', () => {
        expect(greet()).toEqual('Hello World');
    });
});
