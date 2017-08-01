# meetingMonitor

# Install
<ol>
  <li>cmd> composer install </li>
  <li>rename .env.example to .env </li>
  <li> In .env file set values of DB_DATABASE= db_name DB_USERNAME = username DB_PASSWORD = password and save. </li>
  <li>cmd> php artisan key:generate </li>
  <li>cmd> php artisan migrate </li>
  <li>cmd> php artisan db:seed </li>
  <li>cmd> php artisan passport:install </li>
</ol>
 
 <br>
 <p> to update the repository run (i)composer install  (ii)php artisan migrate:refresh --seed </p>
 <br>
 
# Routes
   <ul>
    <li>post /api/register : only for admin to add members 
        <ul>
          <li> form_data : name (required)<br>email (required) <br>password(required , min=6)<br>password_confirmation(required,matches)<br>role(required, [admin,hod,...etc])  <br> send json for best results<li>
        </ul>
  </li>
    <li>post /ouath/token  : login route, gives access token for the user, send this access_token in subsequent requests for authentication
        <ul>
          <li> form_data : grant_type: "password"(required)<br>client_id: 2 (required)<br> client_secret: (required ,i will provide .. save it) <br> username:(required,username of user) <br> password: (required, password of user)<br> scope: "*" (required)<br> send json for best results </li>
        </ul>
  </li>
  <li> post /meeting   :request new meeting by faculty
    <ul><li>
        form_data : title (required,max=50) <br>description(required,max=2000) <br>session(required)
      </li>
    </ul>
  </li>
  <li>get /api/user : get current user details (access_token as authorization key in header)</li>
   </ul>
    
    
