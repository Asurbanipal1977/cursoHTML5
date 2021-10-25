<html>
	<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

	<%@ page import="com.oreilly.servlet.*" %>
   <head>
      <title>Datos</title>
   </head>
   
   <body>
		<%
			MultipartRequest mrequest = new MultipartRequest(request,"d:/"); 

			out.println("El nombre es:" + mrequest.getParameter("nombre") + "<br>");
			out.println("El apellido es:" + mrequest.getParameter("apellido"));
		%>
   
   </body>
</html>