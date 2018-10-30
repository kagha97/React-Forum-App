const GetUserAuth = (loginAttempt) => {
	console.log("----------------Get user auth fetch-----------------------");
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

const GetUserList = (token, id) => {
	console.log("--------------------------Get user List fetch-------------------------");
    var url = 'http://api.bowspace.ca/rest/users?userid=' + id +'&keywords=';
    const otherPrams = {
        method: 'GET',
        mode: 'cors',
        cache: "no-cache",
        credentials: 'omit',
        headers : new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        	 Authorization: 'Bearer' + token
        })
    };
   return (fetch(url, otherPrams).then(data=>data.json()))

}

const GetMyPost = (loginUserId, loginToken) => {
	console.log("-------------------------get my post fetch--------------------");
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

const SendPostMessege = (loginCredentials, messege) => {
	console.log("------------------------send post messege fetch------------------------");
	const post =  {
		PostId : 0,
		SenderId : loginCredentials.UserId,
		RecipientId : messege.ReceipientId,
		PostHtml: messege.PostHtml
	}; 
	const headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': 'Bearer ' + loginCredentials.LoginToken
	})
    const URL = 'http://api.bowspace.ca/rest/post';
    return (Promise.resolve())
			.then(() => {
                const RequestOptions = { method:"POST", headers : headers, cache:'no-cache', mode:'cors', credentials:'omit', redirect:'error', body:JSON.stringify(post) };
				return (fetch(URL, RequestOptions));
			})
			.then((Response) => {
				return (Response.json())
			});
}


export { GetUserAuth, GetUserList, GetMyPost, SendPostMessege };
