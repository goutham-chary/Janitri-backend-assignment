# Janitri-backend-assignment

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <h1>Project Title</h1>
  <p>Brief description of the project (e.g., "Healthcare Backend API built using Node.js and MongoDB").</p>
  
  <h2>Table of Contents</h2>
  <ol>
    <li><a href="#setup-instructions">Setup Instructions</a></li>
    <li><a href="#assumptions--decisions">Assumptions & Decisions</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#additional-information">Additional Information</a></li>
  </ol>
  
  <h2 id="setup-instructions">Setup Instructions</h2>
  <ol>
    <li><strong>Clone the repository:</strong>
      <pre><code>git clone &lt;repository-url&gt;
cd &lt;repository-name&gt;</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Environment variables:</strong>
      <p>Create a <code>.env</code> file in the root directory and add the following:</p>
      <pre><code>PORT=3000
MONGO_URI=&lt;your-mongodb-uri&gt;
JWT_SECRET=&lt;your-secret-key&gt;</code></pre>
    </li>
    <li><strong>Start the MongoDB service:</strong>
      <p>Ensure MongoDB is running locally or provide the correct <code>MONGO_URI</code> in the <code>.env</code> file.</p>
      <pre><code>mongod --dbpath /path/to/data/db</code></pre>
    </li>
    <li><strong>Run the server:</strong>
      <pre><code>npm start</code></pre>
      <p>The server will run on <code>http://localhost:3000</code>.</p>
    </li>
    <li><strong>Testing the API:</strong>
      <p>Use tools like Postman, cURL, or an integrated frontend.</p>
    </li>
  </ol>
  
  <h2 id="assumptions--decisions">Assumptions & Decisions</h2>
  <ul>
    <li><strong>Authentication:</strong> JWT is used for securing API endpoints.</li>
    <li><strong>Database:</strong> MongoDB is used as the primary database for storing all data.</li>
    <li><strong>Error Handling:</strong> Standardized error responses with proper HTTP status codes.</li>
    <li><strong>Data Validation:</strong> Handled using middleware to ensure clean input.</li>
    <li><strong>Default Port:</strong> The application runs on port <code>3000</code> unless specified in <code>.env</code>.</li>
  </ul>
  
  <h2 id="api-documentation">API Documentation</h2>
  <h3>Base URL:</h3>
  <p><code>http://localhost:3000</code></p>
  <h3>Endpoints:</h3>
  <ul>
    <li><strong>Authentication</strong>
      <ul>
        <li><strong>POST /api/auth/register</strong>
          <p>Registers a new user.</p>
          <pre><code>{
  "username": "john_doe",
  "password": "securePassword"
}</code></pre>
          <p><strong>Response:</strong></p>
          <pre><code>{
  "message": "User registered successfully",
  "userId": "12345"
}</code></pre>
        </li>
        <li><strong>POST /api/auth/login</strong>
          <p>Logs in an existing user.</p>
        </li>
      </ul>
    </li>
    <li><strong>Healthcare Resources</strong>
      <ul>
        <li><strong>GET /api/resources</strong>
          <p>Fetches a list of healthcare resources.</p>
        </li>
      </ul>
    </li>
    <li><strong>User Profile</strong>
      <ul>
        <li><strong>GET /api/user/profile</strong>
          <p>Fetches user profile details (requires authentication).</p>
        </li>
      </ul>
    </li>
  </ul>
  
  <h2 id="additional-information">Additional Information</h2>
  <ul>
    <li><strong>Testing:</strong> Unit tests can be run using:
      <pre><code>npm test</code></pre>
    </li>
    <li><strong>Known Issues:</strong> List any unresolved bugs or edge cases (if applicable).</li>
    <li><strong>Contact:</strong> For questions or support, email <code>&lt;your-email&gt;</code> or create an issue on GitHub.</li>
  </ul>
</body>
</html>
