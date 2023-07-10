## Authentication

This API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, include the `Authorization` header in your requests with the value `Bearer <token>`, where `<token>` is the JWT obtained during the login process.

``BASE_URL = https://tenantcare-8f0d118ae3dc.herokuapp.com``

### Landlord Sign Up

Register a new landlord in the database.

**Endpoint:** `POST /api/landlords/signup`

#### Request Body

| Parameter      | Type   | Required | Description                             |
| -------------- | ------ | -------- | --------------------------------------- |
| `first_name`   | string | Yes      | First name of the landlord.              |
| `last_name`    | string | Yes      | Last name of the landlord.               |
| `email`        | string | Yes      | Email of the landlord.                   |
| `password`     | string | Yes      | Password for the landlord's account.      |

#### Response

```json
{
  "message": "Landlord signed up successfully",
  "landlord_id": 1,
  "token": "<jwt_token>"
}
```

### Landlord Login

Authenticate a landlord and obtain a JWT token.

**Endpoint:** `POST /api/landlords/login`

#### Request Body

| Parameter      | Type   | Required | Description                             |
| -------------- | ------ | -------- | --------------------------------------- |
| `email`        | string | Yes      | Email of the landlord.                   |
| `password`     | string | Yes      | Password for the landlord's account.      |

#### Response

```json
{
  "message": "Landlord logged in successfully",
  "landlord_id": 1,
  "token": "<jwt_token>"
}
```

### Create Property

Create a new property owned by the authenticated landlord.

**Endpoint:** `POST /api/properties`

#### Request Body

| Parameter       | Type    | Required | Description                            |
| --------------- | ------- | -------- | -------------------------------------- |
| `title`         | string  | Yes      | Title of the property.                  |
| `description`   | string  | Yes      | Description of the property.            |
| `address`       | string  | Yes      | Address of the property.                |
| `rent_fee`      | integer | Yes      | Rent fee for the property.              |
| `availability`  | integer | Yes      | Availability status of the property.    |
| `image`         | string  | Yes      | URL of an image representing the property. |

#### Response

```json
{
  "message": "Property created successfully",
  "property_id": 1
}
```

### Update Property

Update the details of a specific property owned by the authenticated landlord.

**Endpoint:** `PUT /api/properties/:property_id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `property_id`   | integer | Yes      | ID of the property to update.             |

#### Request Body

| Parameter       | Type    | Required | Description                            |
| --------------- | ------- | -------- | -------------------------------------- |
| `title`         | string  | No       | Updated title of the property.          |
| `description`   | string  | No       | Updated description of the property.    |
| `address`       | string  | No       | Updated address of the property.        |
| `rent_fee`      | integer | No       | Updated rent fee for the property.      |
| `availability`  | integer | No       | Updated availability status of the property. |
| `image`         | string  | No       | Updated URL of the property's image.    |

#### Response

```json
{
  "message": "Property updated successfully",
  "property_id": 1
}
```

### Delete Property

Delete a specific property owned by the authenticated landlord.

**Endpoint:** `DELETE /api/properties/:property_id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `property_id`   | integer | Yes      | ID of the property to delete.             |

#### Response

```json
{
  "message": "Property deleted successfully",
  "property_id": 1
}
```

### Make Property Available

Update the availability status of a specific property owned by the authenticated landlord to "available".

**Endpoint:** `PUT /api/properties/:property_id/availability`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `property_id`   | integer | Yes      | ID of the property to update availability.|

#### Response

```json
{
  "message": "Property availability updated successfully",
  "property_id": 1
}
```

### Approve Tenant Request

Approve a tenant's request to move into a specific property owned by the authenticated landlord.

**Endpoint:** `POST /api/properties/:property_id/approve`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `property_id`   | integer | Yes      | ID of the property to approve the request.|

#### Request Body

| Parameter       | Type    | Required | Description                            |
| --------------- | ------- | -------- | -------------------------------------- |
| `tenant_id`     | integer | Yes      | ID of the tenant requesting to move in. |

#### Response

```json
{
  "message": "Request approved successfully"
}
```

### Tenant Sign Up

Register a new tenant in the database.

**Endpoint:** `POST /api/tenants/signup`

#### Request Body

| Parameter      | Type   | Required | Description                             |
| -------------- | ------ | -------- | --------------------------------------- |
| `first_name`   | string | Yes      | First name of the tenant.                |
| `last_name`    | string | Yes      | Last name of the tenant.                 |
| `email`        | string | Yes      | Email of the tenant.                     |
| `password`     | string | Yes      | Password for the tenant's account.        |

#### Response

```json
{
  "message": "Tenant signed up successfully",
  "tenant_id": 1,
  "token": "<jwt_token>"
}
```

### Tenant Login

Authenticate a tenant and obtain a JWT token.

**Endpoint:** `POST /api/tenants/login`

#### Request Body

| Parameter      | Type   | Required | Description                             |
| -------------- | ------ | -------- | --------------------------------------- |
| `email`        | string | Yes      | Email of the tenant.                     |
| `password`     | string | Yes      | Password for the tenant's account.        |

#### Response

```json
{
  "message": "Tenant logged in successfully",
  "tenant_id": 1,
  "token": "<jwt_token>"
}
```

### Request to Move into Property

Send a request to move into a specific property by the authenticated tenant.

**Endpoint:** `POST /api/properties/:property_id/request`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
|

`property_id`   | integer | Yes      | ID of the property to send the request for. |

#### Response

```json
{
  "message": "Request sent successfully"
}
```

### View Available Properties

Retrieve a list of all available properties.

**Endpoint:** `GET /api/properties`

#### Response

```json
[
  {
    "id": 1,
    "landlord_id": 1,
    "title": "Property 1",
    "description": "Description of Property 1",
    "address": "123 Main St",
    "rent_fee": 1000,
    "availability": 1,
    "image": "https://example.com/property1.jpg"
  },
  {
    "id": 2,
    "landlord_id": 2,
    "title": "Property 2",
    "description": "Description of Property 2",
    "address": "456 Elm St",
    "rent_fee": 1500,
    "availability": 1,
    "image": "https://example.com/property2.jpg"
  },
  ...
]
```

### Get Available Property by ID

Retrieve a single available property by its ID.

**Endpoint:** `GET /api/properties/:property_id`

#### Request Parameters

| Parameter       | Type    | Required | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| `property_id`   | integer | Yes      | ID of the property to retrieve.          |

#### Response

```json
{
  "id": 1,
  "landlord_id": 1,
  "title": "Property 1",
  "description": "Description of Property 1",
  "address": "123 Main St",
  "rent_fee": 1000,
  "availability": 1,
  "image": "https://example.com/property1.jpg"
}
```

#### Error Responses

- `Property not found or not available`: The requested property does not exist or is not currently available.
- `An error occurred`: An internal server error occurred.

## Error Responses

If an error occurs, the API will respond with an appropriate HTTP status code and an error message in the response body.

Example error response:

```json
{
  "error": "Invalid email or password"
}
```


Possible error messages:

- `Authentication required`: The request requires authentication, but the user is not authenticated.
- `Invalid token`: The provided token is invalid or expired.
- `Invalid email or password`: The email or password provided in the login request is incorrect.
- `Landlord with the same email already exists`: A landlord with the same email already exists in the database.
- `Property not found`: The requested property does not exist.
- `Not authorized to update this property`: The authenticated landlord is not authorized to update the requested property.
- `Not authorized to delete this property`: The authenticated landlord is not authorized to delete the requested property.
- `Not authorized to update availability for this property`: The authenticated landlord is not authorized to update the availability of the requested property.
- `Not authorized to approve requests for this property`: The authenticated landlord is not authorized to approve requests for the requested property.
- `Request already sent for this property`: The authenticated tenant has already sent a request to move into the requested property.
- `Property request not found`: The requested property request does not exist.
- `An error occurred`: An internal server error occurred.
