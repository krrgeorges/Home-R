placeholder = "";

function gsearch(query){
	var rquery = "";
	for(var i=0;i<=query.length-1;i++){
		if(query[i] == " "){
			rquery += "+";
		}
		else{
			rquery +=query[i];
		}
	}
	window.location.href = "https://www.google.co.in/search?q="+rquery;
}

function searchf(){
	var query = document.getElementById("gtbox").value;
	gsearch(query);
}

function searchbox(e){
	if(e.keyCode == 13){
		var dns = document.getElementById("gtbox").value.substring(document.getElementById("gtbox").value.length-4,document.getElementById("gtbox").value.length);
		if(dns != ".com"){
			searchf();
		}
		else if(dns == ".com"){
			window.location.href = "http://www."+document.getElementById("gtbox").value;
		}
		
	}
}

function getQuote(){
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("gtbox").addEventListener("keypress",searchbox,true);
			document.getElementById("notepad").addEventListener("keyup",savecontent,true);
			var soup = this.responseXML;
			var imgs = soup.getElementsByTagName("img");
			var quotes = new Array();

			for(var i = 0;i <= imgs.length-1;i++){
				if(imgs[i].getAttribute("class") == " zoomc bqpht"){
					quotes.push(imgs[i].getAttribute("alt"));
				}
			}
			var randomquote = quotes[Math.floor((Math.random() * quotes.length-1)+0)];
			if(randomquote === undefined){
				randomquote = quotes[Math.floor((Math.random() * quotes.length-1)+0)];
				if(randomquote === undefined){
					randomquote = quotes[Math.floor((Math.random() * quotes.length-1)+0)];
				}
			}
			placeholder += "\n\n"+randomquote;
			document.getElementById("notepad").placeholder += placeholder;
			document.getElementById("notepad").value = getCookie("data");
		}
	}
	obj.open("GET", "https://www.brainyquote.com/quotes/topics/topic_motivational.html", true);
	obj.responseType = "document";
	obj.send();
}

function headload(){
	var d = new Date();
	var headertext; var date; var hour; var minute; var year; var month; var day; var seconds; var dateprefix; var ampm;

	var date = d.getDate().toString();
	var year = d.getFullYear().toString();
	if(d.getHours() > 12){var hour = (d.getHours() - 12).toString();ampm = "PM";}
	else{var hour = (d.getHours()).toString();ampm = "AM";}
	
	var minute = d.getMinutes().toString();
	var seconds = d.getSeconds().toString();

	switch(d.getDay()){
		case 0:day = "Sunday";break;
		case 1:day = "Monday";break;
		case 2:day = "Tuesday";break;
		case 3:day = "Wednesday";break;
		case 4:day = "Thursday";break;
		case 5:day = "Friday";break;
		case 6:day = "Saturday";break;
	}
	
	switch(d.getMonth()){
		case 0:month = "January";break;
		case 1:month = "February";break;
		case 2:month = "March";break;
		case 3:month = "April";break;
		case 4:month = "May";break;
		case 5:month = "June";break;
		case 6:month = "July";break;
		case 7:month = "August";break;
		case 8:month = "September";break;
		case 9:month = "October";break;
		case 10:month = "November";break;
		case 11:month = "December";break;
	}

	//case(d.getDay()){}
	if(day.length%2 == 1){
		day = "0"+day;
	}
	if(hour.length%2 == 1){
		hour = "0"+hour;
	}
	if(minute.length%2 == 1){
		minute = "0"+minute;
	}
	if(seconds.length%2 == 1){
		seconds = "0"+seconds;
	}
	switch(d.getDate()){
		case 0:dateprefix = "st";break;
		case 1:dateprefix = "nd";break;
		case 2:dateprefix = "rd";break;
		default:dateprefix = "th";break;
	}
	date = date+"<sup>"+dateprefix+"</sup>"
	headertext = day+", "+date+" "+month+" "+" "+year+"</br>"+hour+" : "+minute+" : "+seconds+" "+ampm;
	document.getElementById("head").innerHTML = headertext;
}

function xkcdload(){
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var soup = this.responseXML;
			var images = soup.getElementsByTagName("img");
			for(var i=0;i<=images.length-1;i++){
				if(images[i].getAttribute("src").substring(0,23) == "//imgs.xkcd.com/comics/"){
					document.getElementById("xkcd").innerHTML = "<p><u><i>xkcd.com</i></u></p></br><img width='560' src='https:"+images[i].getAttribute("src")+"' alt='Unable to load image.'/></br><p align='center'>"+images[i].getAttribute("title")+"</p></br><p align='center'>Check out <a href='https://www.xkcd.com'>xkcd.com</a> for more</p>";
				}
			}
			//console.log(document.getElementById("xkcd").style.height);
		}
	}
	var pageno = Math.floor((Math.random() * 1834)+1);
	obj.open("GET", "https://xkcd.com/"+pageno, true);
	obj.responseType = "document";
	obj.send();
}

function cahload(){
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var soup = this.responseXML;
			var images = soup.getElementsByTagName("img");
			var imlinks = new Array();
			for(var i=0;i<=images.length-1;i++){
				imlinks.push("http://marcel-oehler.marcellosendos.ch/comics/ch/"+cahyear+"/"+cahmonth+"/"+images[i].getAttribute("src"))
			}
			document.getElementById("cah").innerHTML  = "<p><i><u>Calvin and Hobbes</u></i></p><img width='560' src='"+imlinks[Math.floor((Math.random() * imlinks.length-1)+0)]+"' width='660' alt='Unable to load image.'/><hr><hr><img width='560' src='"+imlinks[Math.floor((Math.random() * imlinks.length-1)+0)]+"' width='660' alt='Unable to load image.'/><hr><hr><img width='560' src='"+imlinks[Math.floor((Math.random() * imlinks.length-1)+0)]+"' width='660' alt='Unable to load image.'/></br><p align='center'>Check out <a href='http://marcel-oehler.marcellosendos.ch/comics/ch/'>marcel-oehler.marcellosendos.ch/comics/ch/</a> for more</p>";
		}
	}

	var cahyear = "19" + Math.floor((Math.random() * 9)+86).toString();
	var cahmonth = Math.floor((Math.random() *12)+1).toString();
	if(cahmonth.length%2 == 1){
		cahmonth = "0" + cahmonth
	}
	var cahlink = "http://marcel-oehler.marcellosendos.ch/comics/ch/"+cahyear+"/"+cahmonth+"/"+cahyear+cahmonth+".html"
	if(cahlink === undefined){
		cahyear = "19" + Math.floor((Math.random() * 9)+86).toString();;
		cahmonth = Math.floor((Math.random() *12)+1).toString();
		if(cahmonth.length%2 == 1){
			cahmonth = "0" + cahmonth
		}
		cahlink = "http://marcel-oehler.marcellosendos.ch/comics/ch/"+cahyear+"/"+cahmonth+"/"+cahyear+cahmonth+".html"
	}
	var linkcah = cahlink;
	obj.open("GET",linkcah, true);
	obj.responseType = "document";
	obj.send();
}

/*function getIP(){
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var soup = this.responseXML;
			var divs = soup.getElementsByTagName("div");
			for(var i = 0;i<=divs.length-1;i++){
				if(divs[i].getAttribute("class") == "_h4c _rGd vk_h"){
					document.getElementById("ip").innerHTML = "IP Address : "+divs[i].innerHTML;
				}
			}
		}
	}
	obj.open("GET", "https://www.google.co.in/search?q=get+my+ip+address", true);
	obj.responseType = "document";
	obj.send();
}*/

function header(){
	var h = setInterval(headload,1);
}

function random_take(list,range){
	var randomno = Math.floor((Math.random() * range)+1);
	var found = false;
	for(var i = 0;i<=list.length-1;i++){
		if(list[i] == randomno){
			found = true;
			break;
		}
	}
	
	if(found == false && randomno != 81 && randomno != 18 && randomno >= 0){
		return randomno;
	}
	else if(found == true || randomno === undefined){
		random_take(list,range);
	}

}

Array.prototype.clean = function(deleteValue) {
			for (var i = 0; i < this.length; i++) {
					if (this[i] === deleteValue) {         
								this.splice(i, 1);
								i--;
					}
			}
			return this;
};

function rdjokes(){
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){

			var displaytext = "<i><u>RD Jokes</u></i> </br></br>";
			var soup = this.responseXML;
			var divs = soup.getElementsByTagName("div");
			var jokesall = new Array();
			var jokesdisp = new Array();
			var randomcheck = new Array();
			for(var i=0;i<=divs.length-1;i++){
				if(divs[i].getAttribute("class") == "jokes-river--content"){
					jk = "";
					ps = divs[i].childNodes;
					for(var j =0 ;j<=ps.length-1;j++){
						if(ps[j].tagName == "P"){
							jk += ps[j].innerHTML;
						}
					}
					jokesall.push(jk);

				}
			}
			jokesall.clean(undefined);
			for(var i=0;i<=6;i++){
				var tr = random_take(randomcheck,jokesall.length-1);
				if(tr === undefined){
					tr = random_take(randomcheck,jokesall.length-1);
					if(tr === undefined){
						tr = random_take(randomcheck,jokesall.length-1);
					}
				}
				randomcheck.push(tr);
				jokesdisp.push(jokesall[tr]);
			}
			for(var i =0;i<=jokesdisp.length-1;i++){
				if(i<jokesdisp.length-1){
					displaytext += jokesdisp[i]+"</br></br><hr>";
				}
				else{
					displaytext += jokesdisp[i]+"</br></br>";
				}
			}

			document.getElementById("rdjokes").innerHTML = displaytext;
		}
	}

	links = ["http://www.rd.com/jokes/knock-knock/ ","http://www.rd.com/jokes/corny-jokes/","http://www.rd.com/jokes/one-liners/","http://www.rd.com/jokes/riddles/","http://www.rd.com/jokes/animal/","http://www.rd.com/jokes/bar/","http://www.rd.com/jokes/birthday/","http://www.rd.com/jokes/cat/","http://www.rd.com/jokes/christmas-jokes/","http://www.rd.com/jokes/computer/","http://www.rd.com/jokes/corny/","http://www.rd.com/jokes/customer-service/","http://www.rd.com/jokes/dad/","http://www.rd.com/jokes/daily-life/","http://www.rd.com/jokes/doctor/","http://www.rd.com/jokes/dog/","http://www.rd.com/jokes/dumb/","http://www.rd.com/jokes/dumb-criminals/","http://www.rd.com/jokes/family/","http://www.rd.com/jokes/headlines/","http://www.rd.com/jokes/funny-quotes/","http://www.rd.com/jokes/funny-stories/","http://www.rd.com/jokes/holiday/","http://www.rd.com/jokes/kids/","http://www.rd.com/jokes/knock-knock/","http://www.rd.com/jokes/lawyer/","http://www.rd.com/jokes/romance/","http://www.rd.com/jokes/married-life/","http://www.rd.com/jokes/math/","http://www.rd.com/jokes/military/","http://www.rd.com/jokes/mom/","http://www.rd.com/jokes/money/","http://www.rd.com/jokes/office/","http://www.rd.com/jokes/old-age/","http://www.rd.com/jokes/political/","http://www.rd.com/jokes/puns/","http://www.rd.com/jokes/relationship/","http://www.rd.com/jokes/religion/","http://www.rd.com/jokes/school-jokes/","http://www.rd.com/jokes/sports-jokes/","http://www.rd.com/jokes/thankgiving-jokes/","http://www.rd.com/jokes/travel-jokes/","http://www.rd.com/jokes/valentines-day-jokes/","http://www.rd.com/jokes/weather/"]

	for(var i=0;i<=links.length-1;i++){
		if(links[i]===undefined){
			console.log(links[i]);
			links.splice(i,1);
		}
	}
	var page = links[Math.floor((Math.random() * links.length-1)+0)]
	if(page === undefined){
		page = links[Math.floor((Math.random() * links.length-1)+0)]
		if(page === undefined){
			page = links[Math.floor((Math.random() * links.length-1)+0)]
		}
	}
	obj.open("GET", page, true)
	obj.responseType = "document";
	obj.send();
}

function hakernews(){
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var hnshow = "<u><i>HackerNews</i></u></br></br>";
			var soup = obj.responseXML;
			var links = soup.getElementsByTagName("a");
			count = 0;
			for(var i=0;i<=links.length-1;i++){
				if(links[i].getAttribute("class") == "storylink"){
					count += 1;
					hnshow += count+" . <a href = '"+links[i].getAttribute("href")+"'>"+links[i].innerHTML+"</a></br>";
				}
			}
			document.getElementById("hknews").innerHTML = hnshow;
		}
	}
	obj.open("GET", "https://news.ycombinator.com/", true);
	obj.responseType = "document";
	obj.send();
}

function onestroke(){
	getQuote();
	xkcdload();
	cahload();
	hakernews();
	header();
	//getIP();
	rdjokes();
}


onestroke();

/*var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

var day; var date; var month; var year;

var date = tomorrow.getDate()
var year = tomorrow.getFullYear();

switch(tomorrow.getDay()){
	case 0:day = "Sun";break;
	case 1:day = "Mon";break;
	case 2:day = "Tue";break;
	case 3:day = "Wed";break;
	case 4:day = "Thu";break;
	case 5:day = "Fri";break;
	case 6:day = "Sat";break;
}

switch(tomorrow.getMonth()){
	case 0:month = "Jan";break;
	case 1:month = "Feb";break;
	case 2:month = "Mar";break;
	case 3:month = "Apr";break;
	case 4:month = "May";break;
	case 5:month = "Jun";break;
	case 6:month = "Jul";break;
	case 7:month = "Aug";break;
	case 8:month = "Sept";break;
	case 9:month = "Oct";break;
	case 10:month = "Nov";break;
	case 11:month = "Dec";break;
}

console.log(day+", "+date+" "+month+" "+year);*/

function savecontent(){
	document.cookie = "data="+document.getElementById("notepad").value;

	//document.cookie = "data=<data>; expires=Thu, 18 Dec 2013 12:00:00 UTC";
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}