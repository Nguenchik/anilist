import {debounceSearchQuery} from '../utils/debounce';

describe('debounce', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should execute the callback after the delay', () => {
    const delay = 500;
    const callback = jest.fn();
    const { execute } = debounceSearchQuery(callback, delay);

    execute();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(delay);
    expect(callback).toBeCalled();
  });

  it('should cancel the previous timer and execute the new one', () => {
    const delay = 500;
    const callback = jest.fn();
    const { execute, cancel } = debounceSearchQuery(callback, delay);

    execute();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(delay / 2);
    cancel();

    execute();
    jest.advanceTimersByTime(delay / 2);
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(delay / 2);
    expect(callback).toBeCalled();
  });
});