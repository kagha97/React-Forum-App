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


const GetAllRegisteredUsers = (loginToken) => {
	const URL = 'http://api.bowspace.ca/rest/users';
	const headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': 'Bearer ' + loginToken
	})
	const param = '?userid=0&keywords=' 
	return (Promise.resolve())
			.then(() => {
                const RequestOptions = { method:"GET", headers : headers, cache:'no-cache', mode:'cors', credentials:'omit', redirect:'error' };
				return (fetch(URL + param, RequestOptions));
			})
			.then((Response) => {
				return (Response.json())
			});
}

const GetMyPost = (loginUserId, loginToken) => {
	const URL = 'http://api.bowspace.ca/rest/posts';
	const headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': 'Bearer ' + loginToken
	})
	const param = '?postid=0&senderid=0&recipientid='+ loginUserId +'&keywords=' 
	return (Promise.resolve())
			.then(() => {
                const RequestOptions = { method:"GET", headers : headers, cache:'no-cache', mode:'cors', credentials:'omit', redirect:'error' };
				return (fetch(URL + param, RequestOptions));
			})
			.then((Response) => {
				return (Response.json())
			});
}

export { GetUserAuth, GetAllRegisteredUsers, GetMyPost };