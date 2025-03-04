# Janitri-backend-assignment

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
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
    <li><strong>Run the server:</strong>
      <pre><code>npm start</code></pre>
      <p>The server will run on <code>http://localhost:5000</code>.</p>
    </li>
    <li><strong>Testing the API:</strong>
      <p>Use tools like Postman, cURL, or an integrated frontend.</p>
    </li>
  </ol>
  
  <h2 id="assumptions--decisions">Assumptions & Decisions</h2>
  <ul>
    <li><strong>Database:</strong> MongoDB is used as the primary database for storing all data.</li>
    <li><strong>Error Handling:</strong> Standardized error responses with proper HTTP status codes.</li>
    <li><strong>Data Validation:</strong> Handled using middleware to ensure clean input.</li>
    <li><strong>Default Port:</strong> The application runs on port <code>5000</code>.</li>
  </ul>
  
  <h2 id="api-documentation">API Documentation</h2>
  <h3>Base URL:</h3>
  <p><code>http://localhost:5000</code></p>
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
    <li><strong>Contact:</strong> For questions or support, email <code>&lt;gouthamchary00@gmail.com&gt;</code> or create an issue on GitHub.</li>
  </ul>
</body>
</html>
