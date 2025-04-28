function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//Assures all the web elements have finished loading
async function main()
{
	try
	{
		await sleep(10);
		window.location.href = document.getElementsByClassName("btn btn-lg btn-success d-block")[1].href;
	}
	catch
	{
		await sleep(1000);
		window.location.href = document.getElementsByClassName("btn btn-lg btn-success d-block")[1].href;
	}
	
}

main();
