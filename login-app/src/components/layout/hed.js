const [isUser, setIsUser] = useState(false)
//const isUserLogin = true
if (user.user != null){
    console.log(" current user", user.user)
    //isUserLogin = false
    
    console.log(" current user1", user)
    setIsUser(true)
}
useEffect(()=>{


},[isUser])