
const GetUserAuth = (loginAttempt) => {
    const URL = 'http://api.bowspace.ca/rest/auth/login';
    return (Promise.resolve())
			.then(() => {
                const RequestOptions = { method:"POST", cache:'no-cache', mode:'cors', credentials:'omit', redirect:'error', body:JSON.stringify(loginAttempt) };
				return (fetch(URL, RequestOptions));
			})
			.then((Response) => {
				return (Response.json())
			});
}


export { GetUserAuth };