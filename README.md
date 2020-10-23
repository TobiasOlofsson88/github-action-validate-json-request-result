# :wrench: Validate JSON request-response

A Github Action for validating JSON requestresult

<hr/>

## Usage

### Samples

Validate JSON

```yml
- name: ValidateJSON
  uses: TobiasOlofsson88/github-action-validate-json-request-result@v1.0.0
  with:
    request-method: "GET"
    request-url: "https://yourapi.com/endpoint"
    validate-json: '{ "Attribute": "Value" }'
```

Validate expression, reference the response as `response`

```yml
- name: ValidateJSON
  uses: TobiasOlofsson88/github-action-validate-json-request-result@v1.0.0
  with:
    request-method: "GET"
    request-url: "https://yourapi.com/endpoint"
    validate-expression: "response.length == 10 && response[0].attribute == 'value'"
```

Custom header and POST body

```yml
- name: ValidateJSON
  uses: TobiasOlofsson88/github-action-validate-json-request-result@v1.0.0
  with:
    request-method: "POST"
    request-url: "https://yourapi.com/endpoint"
    request-headers: '{ "Header": "Value" }'
    request-body: '{ "Attribute": "Value" }'
    validate-json: '{ "Attribute": "Value" }'
```

Validate JSON should fail

```yml
- name: ValidateJSON
  uses: TobiasOlofsson88/github-action-validate-json-request-result@v1.0.0
  with:
    request-method: "GET"
    request-url: "https://yourapi.com/endpoint"
    should-fail: true
    validate-json: '{ "Attribute": "Value" }'
```

## Inputs

- **`request-method`** (**required**): Request method
- **`request-url`** (**required**): Request URL
- **`request-headers`** (**optional**): Request header
- **`request-body`** (**optional**): Request body
- **`should-fail`** (**optional, default: false**): Validator should fail
- **`validate-json`** (**optional**): Expected JSON
- **`validate-expression`** (**optional**): Expected JSON

Using 1 validator(validate-\*) is required

## Outputs

- **`valid`**: Action result
