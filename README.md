# meetingMonitor

# Install
<ol>
  <li>cmd> composer install </li>
  <li>rename .env.example to .env </li>
  <li> In .env file set values of DB_DATABASE=<db_name> DB_USERNAME = <username> DB_PASSWORD = <password> and save. </li>
  <li>cmd> php artisan key:generate </li>
  <li>cmd> php artisan migrate </li>
  <li>cmd> php artisan db:seed </li>
  <li>cmd> php artisan passport:install </li>
</ol>
    
# Routes
    <ul>
    <li> /api/register : only for admin to add members </li>
    <li> /ouath/token  : login route, gives access token for the user, send this access_token in subsequent requests for authentication</li>
    </ol>
    
    
