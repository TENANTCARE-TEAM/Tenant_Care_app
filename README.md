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

#### Tenant Profile

- Endpoint: `GET /api/tenants/profile`
- Description: Retrieves the profile information of the currently logged-in tenant.
- Authorization: Required

#### Update Tenant Profile

- Endpoint: `PUT /api/tenants/update_profile`
- Description: Updates the profile information of the currently logged-in tenant.
- Authorization: Required
- Request Body:

  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  }
  ```

#### Delete Tenant Account

- Endpoint: `DELETE /api/tenants/delete_profile`
- Description: Deletes the account of the currently logged-in tenant.
- Authorization: Required

### Landlord Endpoints

#### Landlord Profile

- Endpoint: `GET /api/landlords/profile`
- Description: Retrieves the profile information of the currently logged-in landlord.
- Authorization: Required

#### Update Landlord Profile

- Endpoint: `PUT /api/landlords/update_profile`
- Description: Updates the profile information of the currently logged-in landlord.
- Authorization: Required
- Request Body:

  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  }
  ```

#### Delete Landlord Account

- Endpoint: `DELETE /api/landlords/delete_profile`
- Description: Deletes the account of the currently logged-in landlord.
- Authorization: Required



### Get Approved Properties for Tenant

Get a list of all properties that a tenant has been approved to rent, along with information about the landlord who approved the requests.

**URL:** `/api/tenants/approved_properties`

**Method:** `GET`

**Authentication required:** Yes (Tenant)

**Response Status Codes:**
- 200 OK: Request successful, returns the list of approved properties.
- 401 Unauthorized: Authentication required. The request does not include a valid authentication token.
- 500 Internal Server Error: An error occurred while processing the request.

**Sample Response:**
```json
[
  {
    "id": 1,
    "landlord_id": 2,
    "title": "Cozy Apartment",
    "description": "A beautiful apartment in the heart of the city.",
    "address": "123 Main Street",
    "rent_fee": 1500,
    "availability": 1,
    "image": "https://example.com/images/apartment.jpg",
    "landlord_first_name": "John",
    "landlord_last_name": "Doe"
  },
  {
    "id": 3,
    "landlord_id": 4,
    "title": "Spacious House",
    "description": "A spacious house with a large backyard.",
    "address": "456 Oak Avenue",
    "rent_fee": 2500,
    "availability": 1,
    "image": "https://example.com/images/house.jpg",
    "landlord_first_name": "Jane",
    "landlord_last_name": "Smith"
  }
]
```

### Get Requests to be Approved for Landlord

Get a list of all property requests that need approval from a landlord, along with information about the tenants who made the requests.

**URL:** `/api/landlords/requests_to_approve`

**Method:** `GET`

**Authentication required:** Yes (Landlord)

**Response Status Codes:**
- 200 OK: Request successful, returns the list of property requests to be approved.
- 401 Unauthorized: Authentication required. The request does not include a valid authentication token.
- 500 Internal Server Error: An error occurred while processing the request.

**Sample Response:**
```json
[
  {
    "id": 1,
    "tenant_id": 3,
    "property_id": 1,
    "tenant_first_name": "Alice",
    "tenant_last_name": "Johnson",
    "title": "Cozy Apartment",
    "description": "A beautiful apartment in the heart of the city.",
    "address": "123 Main Street",
    "rent_fee": 1500,
    "availability": 1,
    "image": "https://example.com/images/apartment.jpg"
  },
  {
    "id": 2,
    "tenant_id": 5,
    "property_id": 3,
    "tenant_first_name": "Bob",
    "tenant_last_name": "Smith",
    "title": "Spacious House",
    "description": "A spacious house with a large backyard.",
    "address": "456 Oak Avenue",
    "rent_fee": 2500,
    "availability": 1,
    "image": "https://example.com/images/house.jpg"
  }
]
```

### Get Approved Requests for Landlord

Get a list of all property requests that have been approved by the landlord, along with information about the tenants who made the requests.

**URL:** `/api/landlords/approved_requests`

**Method:** `GET`

**Authentication required:** Yes (Landlord)

**Response Status Codes:**
- 200 OK: Request successful, returns the list of approved property requests.
- 401 Unauthorized: Authentication required. The request does not include a valid authentication token.
- 500 Internal Server Error: An error occurred while processing the request.

**Sample Response:**
```json
[
  {
    "id": 1,
    "tenant_id": 3,
    "property_id": 1,
    "tenant_first_name": "Alice",
    "tenant_last_name": "Johnson",
    "title": "Cozy Apartment",
    "description": "A beautiful apartment in the heart of the city.",
    "address": "123 Main Street",
    "rent_fee": 1500,
    "availability": 1,
    "image": "https://example.com/images/apartment.jpg"
  },
  {
    "id": 3,
    "tenant_id": 5,
    "property_id": 3,
    "tenant_first_name": "Bob",
    "tenant_last_name": "Smith",
    "title": "Spacious House",
    "description": "A spacious house with a large backyard.",
    "address": "456 Oak Avenue",
    "rent_fee": 2500,
    "availability": 1,
    "image": "https://example.com/images/house.jpg"
  }
]
```

These are the new endpoints for your API. You can use them to retrieve the required information based on the user's role (tenant or landlord) and their authentication token.

Please note that the endpoints marked with "Authorization: Required" require authentication with a valid JWT token in the request headers.

For the complete list of endpoints and their descriptions, please refer to the code provided.

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
