import { Callback, APIGatewayProxyEventV2, Context } from 'aws-lambda'
import { handler } from './example'

const testCallback = {} as Callback

describe('handler function', () => {
  it('should return a successful response with the custom variable from environment', async () => {
    const mockEvent = {} as APIGatewayProxyEventV2
    const mockContext = {} as Context

    const result = await handler(mockEvent, mockContext, testCallback)

    expect(result.statusCode).toBe(200)
    expect(result.body).toBe('hello world')
  })
})
