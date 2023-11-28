// generate.ts
const fs = require('fs')
const path = require('path')

const filePath = process.argv[2]

if (!filePath) {
  console.error('Usage: npm run generate <fileName>')
  process.exit(1)
}
const fileName = path.basename(filePath)

const fullPath = path.resolve(process.cwd(), 'src', filePath)
const folderPath = path.dirname(fullPath)

// Crea la carpeta si no existe
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true })
}

const tsContent = `import { Context, APIGatewayProxyStructuredResultV2, APIGatewayProxyEventV2, Handler } from 'aws-lambda'

export const handler: Handler = async (
  _event: APIGatewayProxyEventV2,
  _context: Context,
): Promise<APIGatewayProxyStructuredResultV2> => {
  return {
    statusCode: 200,
    body: 'Hello world',
  }
}
`

const specContent = `import { APIGatewayProxyEventV2, Callback, Context } from 'aws-lambda'
import { handler } from './${fileName}'

const testCallback = {} as Callback;
describe('test handler', () => {
  it('should return a 200 status code and a greeting body', async () => {
    const event = {} as APIGatewayProxyEventV2
    const context = {} as Context

    const result = await handler(event, context, testCallback);

    expect(result.statusCode).toBe(200)
    expect(result.body).toBe('Hello world')
  })
})

`

const tsFilePath = path.join(fullPath + '.ts')
const specFilePath = path.join(fullPath + '.spec.ts')

fs.writeFileSync(tsFilePath, tsContent)
fs.writeFileSync(specFilePath, specContent)

console.log(`Files generated: ${tsFilePath}, ${specFilePath}`)
