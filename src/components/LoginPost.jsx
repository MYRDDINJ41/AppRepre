//Funcion POST login
export const LogingPost = async (user, pass, navigation) => {

  try {
    const requestBody = {
      SYS00001: {
        USREMAXX: user,
        USRPASSX: pass,
        ISSOCIAL: "NO"
      }
    };
    const res = await fetch( 'http://192.168.28.40:5000/api/v1/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    if(res.ok){
      const miInfo = await res.json();
      navigation.navigate("Home");
      const token = miInfo.data.token
      return (token)
      
    }
  } catch (error) {
    console.log(error);
  }
  
}

