var newstr = null;
		var lastnewstr = null;
		var newclass = null;
		var lastclass = null;
		var newstr2 = null;
		var lastnewstr2 = null;
		var newclass2 = null;
		var lastclass2 = null;
		var newstr3 = null;
		var lastnewstr3 = null;
		var newclass3 = null;
		var lastclass3 = null;
		
function check(s, i)
{
		p1 = document.getElementById("id_1_"+i);
		p2 = document.getElementById("id_2_"+i);
	if (s!=lastnewstr)
	{
		newclass2 = p1.className;
		newclass3 = p2.className;
		newclass = s.className;
		s.className="check";
		p1.className="viz";
		p2.className="viz";
		if (lastnewstr!=null)
		{
			lastnewstr.className=lastclass;
			lastnewstr2.className=lastclass2;
			lastnewstr3.className=lastclass3;
		}
	}
	lastnewstr = s;
	lastnewstr2 = p1;
	lastnewstr3 = p2;
	lastclass = newclass;
	lastclass2 = newclass2;
	lastclass3 = newclass3;
}
