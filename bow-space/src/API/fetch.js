const GetUserAuth = (loginAttempt) => {
	const URL = 'http://api.bowspace.ca/rest/auth/login';
	const headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
	})
    return (Promise.resolve())
			.then(() => {
                const RequestOptions = { method:"POST", headers : headers, cache:'no-cache', mode:'cors', credentials:'omit', redirect:'error', body:JSON.stringify(loginAttempt) };
				return (fetch(URL, RequestOptions));
			})
			.then((Response) => {
				return (Response.json())
			});
}


export { GetUserAuth };