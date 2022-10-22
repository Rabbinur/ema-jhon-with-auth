/*
AUTH SETUP
1. Create  firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in ur firebase.config.js file
6. export app from firebase.config.js
*/

/*
1. Create UserContext (auth context): UserContext-->component name,
userCOntext provides authContext
2. create AuthCOntext
3. set AuthCOntext.provider
4. make sure you set the children
 create authInfo inside userContext
 set value={authInfo } inside AuthContext.provider
 goto index.js and set UserCOntext inside set children app
5. export AuthContext to be used inside useContext hook
6.get form data by onsubmit {handleSubmit}sign up and sing in
   -- create a arrow function with event parameter
   --event.preventDefault() set for reloading
   -- get input value 
   --  set validation with error, setError useState(null)
7. get auth in the userContext- setup form firebase (check:authentication of firebase)
   -- create useState for user login or not
8. signUP part in the userCOntext 
    -- function create name as createUser with (email,password) parameter
    and return createUserWithEmailAndPassword(auth,email,password)
    --set createUSer in authInfo
    -- goto sign up page 
       --get createUser by useContext
       -- then goto handleSubmit
       -- call createUser(email,password) and then(result=>{
            const user=result.user
            console.log(user)
            form.reset()})
            catch setup (follow docs)
       -- 
  9. log in part in the userCOntext 
        
        -- create sign in function(email,password)parameter
           return signInWithEmailAndPassword(auth, email, password);
        --set signIn in authInfo
        -- goto log in page 
        --get signIn by useContext
           -- get data by form onSubmit{handleSubmit} follow 6 
               
           -- then goto handleSubmit
           -- call signIn(email,password) and then(result=>{
              const user=result.user
              console.log(user)
              form.reset()})
              catch setup (follow docs)
  10. signOut part in the userCOntext 
      --create logout in the userContext with no parameter
      return signOut(auth)
       --set logOut in authInfo

-----------------------------------------
         onAuthStateChanged observer 
----------------------------------------------
  11. useEffect (outside interact ) with observer in the userContext
            -- // Get the currently signed-in user
             useEffect(() => {
                //get Current user
             const unSubscribe=  onAuthStateChanged(auth, (currentUser) => {
               console.log("current user inside state change", currentUser);
             setUser(currentUser); //set currentUser
             });
           return ()=>unSubscribe(); // 
          }, []);

   12. goto header page
        --set current user email to show when login success
         in the header at the bottom of the link
       if u want show email or else   <span>{user?.email}</span>       
        -- log out button show then 
        
          {user?.uid ?   //if user have u id then logout show and login and logout part to fragmetn akare rakhbo

        <button onClick={logout}>Log Out</button>
        :<>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">SignUp</Link>
        </>}
        
        --now setup logout button
            --create a onClick on logout button
            -- get the logout by useContext 
       
    
    
    13. when login success then we should go to home page
        -setup useNavigate for route change
        --goto login page
        -- set up const navigate=useNavigate();
        -- goto handleSubmit
           -- go to signIn method
           -- set navigate('/')
        -
    
    14. donot permission to go to without log in 
        
    goto privateRoute 

        --create privateROute.js page 
            const privateRoute=({children}) //children means eitar vitore ja likhbo authentication chara dukte dibo nah
            --get user by useContext
            --then check user and user id have or not
              --if condition true goto return children
              --or return navigate to login page 
              --goto app.js and set privateRoute which you want protect or without login can not entry
                            {
                             path: "shipping",
                             element: <PrivateRoute><Shipping></Shipping></PrivateRoute>,
                             },
            
         -->login process is done i want to stay same page then 
             -goto privateROute.js
                --setup location
                --inside of  navigate paste to it after to state={{ from: location }} replace 
            -- go to login page
               --setup location - const location=useLocation()
               -- create from
                    -- const from = location.state?.from?.pathname || "/";
                     (location e state jave from jave pathname ta nive ar nahole home chole jave)
                   --goto signIn function in login page
                     --change navigate setup like this
                          navigate(from,{replace:true});      
              ---> laoding issue solve cause login thaka obsatheo reload marle login page show kore
              eta solver jnne 
                 --goto userContext 
                    --set useState 
                         const [loading, setLoading] = useState(true);
                     ---goto useEffect
                       --setLoading(false) after setUSer(currentUser)
                       --set authInfo to loading  (state send)         
                ---then go to privateRoute.js
                    --get loading by useContext
                    --check loading if loading exists
                    then laoding pathao
                          if (loading) {
                        return <div>Loading...or use toast spinner</div>;} 
                    --goto userContext.js
                       --setLoading to signIn ,logout/createusere before return
    */
/*
firebase hosting 
-----------------

//one time for each computer
1.npm install -g firebase-tools
2.firebase login


//for each project one time
3. firebase init
make sure public directory :you select build
single page application : y

//for every deploy
4.npm run build
5.firebase deploy

*/
