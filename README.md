# meetingMonitor
<b>Important</b> please dont remove .env.example file ,it is required in the repo

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
  <li> post api/meetings   :request new meeting by faculty
    <ul><li>
        form_data : title (required,max=50) <br>description(required,max=2000) <br>session(required)<br>duration(required,positive number)<br> members (array , each having id)<br>date(required|date)
      </li>
    </ul>
  </li>
  <li> post api/meetings/admin :new meeting by director
    <ul><li>
        form_data : title (required,max=50) <br>description(required,max=2000) <br>time(required|time 'HH:MM')<br> members (array , each having id)<br>date(required|date)
      </li>
    </ul>
  </li>
  <li> get api/meetings :get all meetings of user</li>
  <li> get api/meetings/{meeting_id} :get details of a meeting</li>
  <li> get api/meetings/priority :get all high priority meetings</li>
  <li> put api/meetings/priority/{meeting_id}  :update meeting priority </li>
  <li> delete api/meetings/priority/{meeting_id} :remove meeting from priority</li>
  <li> put api/meetings/accept/{meeting_id} :accept meeting request (faculty)</li>
  <li put api/meetings/admin/accept/{meeting_id} :accept meeitng(admin) 
  <ul>
  <li>form_data : time (required|time 'HH:MM')</li>
  </ul>
  </li>
  <li> put api/meetings/reject/{meeting_id} :reject meeting(faculty) </li>
  <li> put api/meeting/admin/reject/{meeting_id} :reject meeting(admin)</li>
  <li>get /api/user : get current user details (access_token as authorization key in header)</li>
  <li>get /api/users/{name_search} :search user by name</li>
   </ul>
  
   # Todo
   <ol>
      <li> calendar table </li>
      <li> notifications </li>
      <li> set session in web when login </li>
   </ol>
    
