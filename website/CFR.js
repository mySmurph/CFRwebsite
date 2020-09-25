function $ (id){
	return document.getElementById(id);
};
window.onload = function (){
	var navagation ="<nav><form action=\"https:\/\/www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_blank\">";
		navagation+="<ul><li><a href=\"index.html\">	Home	</a></li>";
		navagation+="<li><a href=\"AboutUs.html\">	About Us	</a></li>";
		navagation+="<li><a href=\"MissionVission.html\">	Vision &amp; Mission	</a></li>";
		navagation+="<li><a href=\"WhoWeServe.html\">	Who We Serve	</a></li>";
		navagation+="<div class=\"dropdown\"><button class=\"dropbtn\" disabled>More...</button><div class=\"dropdown-content\">";
		navagation+="<li><a href=\"Team.html\">	Meet the Team	</a></li>";
		navagation+="<li><a href=\"CorporateWellnessEducation.html\">	Corporate Wellness Education	</a></li>";
		navagation+="<li><a href=\"IndividualsInRecovery.html\">	Individuals in Recovery	</a></li>";
		navagation+="<li><a href=\"ReEmploymentProgram.html\">	Re&ndash;Employment Program	</a></li>";
		navagation+="<li><a href=\"Videos.html\">	Video's	</a></li>";
		navagation+="<li><a href=\"ContactUs.html\">	Contact Us	</a></li>";
		navagation+="<li><a href=\"LabTest.html\">	Lab Test	</a></li>";
		navagation+="</div></div>";
	//paypal
		navagation+="<li><input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\"><input type=\"hidden\" name=\"hosted_button_id\" value=\"WM7CP9U33LZJG\"><input type=\"submit\" value=\"Donate\" name=\"submit\" title=\"PayPal - The safer, easier way to pay online!\" class=\"dropbtn\"><img alt=\"\" border=\"0\" src=\"https:\/\/www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">";
		navagation+="</li></ul></form></nav>";

	$("nav").innerHTML =	navagation;

	$("footer").innerHTML = "<p>You can also  use the donate button above to pay an invoice. Please include your invoice number in the comments section.<br>Thank you for being a partner of CFR.</p><p>Click <a href=\"ContactUs.html\"> HERE </a> for contact information";
};

