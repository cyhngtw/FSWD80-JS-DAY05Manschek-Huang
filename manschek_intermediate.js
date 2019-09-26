// homework: insert in my table

    for (i = 0; i < 6; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>Unique ID</b></td><td width=50>" + employees[i].UniqueID+ "</td></tr>");
        document.writeln("<tr><td><b>First Name</b></td><td width=50>" + employees[i].FirstName+ "</td></tr>");
        document.writeln("<tr><td><b>Last Name</b></td><td width=50>" + employees[i].LastName+ "</td></tr>");
        if (employees[i].Emailaddress=="null"){
        	 document.writeln("<tr><td><b>EMail Adress</b></td><td width=50>undefined </td></tr>");
        }
        else {
        	 document.writeln("<tr><td><b>EMail Adress</b></td><td width=50>" + employees[i].Emailaddress+ "</td></tr>");
        }
        document.writeln("<tr><td><b>Job Title</b></td><td width=50>" + employees[i].JobTitle+ "</td></tr>");
        document.writeln("<tr><td><b>Salary</b></td><td width=50>" + employees[i].Salary+ "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    }
    document.writeln("</tr></table>")