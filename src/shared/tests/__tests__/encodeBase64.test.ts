import { encodeBase64 } from '@widgets/restFullClient/lib/encodeBase64';

describe('encodeBase64', () => {
  /**
   * Тест для функции encodeBase64.
   * Проверяет, что функция корректно кодирует строку "hello" в Base64.
   *
   * @returns {void}
   */
  it('should encode "hello" to Base64', () => {
    const input = 'hello';
    const expectedOutput = 'aGVsbG8=';
    const result = encodeBase64(input);
    expect(result).toBe(expectedOutput);
  });
});
