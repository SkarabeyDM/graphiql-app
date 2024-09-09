import { sendRequest } from '@widgets/restFullClient/lib/requestHandler';
import { ICRUD } from '@widgets/restFullClient/model/methodManagerModel';
import { IRequestData } from '@widgets/restFullClient/model/requestHandlerModel';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('sendRequest', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should return response data on successful request', async () => {
    const data: IRequestData = {
      method: ICRUD.GET,
      url: 'https://example.com',
      headers: {},
      data: null,
    };

    const mockResponse = { data: 'response data' };
    mock.onGet('https://example.com').reply(200, mockResponse);

    const response = await sendRequest(data);
    expect(response?.data).toEqual(mockResponse);
  });

  it('should return error response on failed request', async () => {
    const data: IRequestData = {
      method: ICRUD.GET,
      url: 'https://example.com',
      headers: {},
      data: null,
    };

    mock.onGet('https://example.com').reply(400, { message: 'Bad Request' });

    const response = await sendRequest(data);
    expect(response?.status).toBe(400);
    expect(response?.data).toEqual({ message: 'Bad Request' });
  });

  it('should handle network errors', async () => {
    const data: IRequestData = {
      method: ICRUD.GET,
      url: 'https://example.com',
      headers: {},
      data: null,
    };

    mock.onGet('https://example.com').networkError();

    const response = await sendRequest(data);
    expect(response).toBeUndefined();
  });
});
