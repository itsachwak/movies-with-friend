document.getElementById("YEP").addEventListener("click", function() {
    console.log("YEP!");
    document.getElementById("image").src ="happy.gif";
    document.getElementById("yep").innerHTML = '<a href="https://www.google.com/search?sca_esv=8d061dbbff1738e7&sxsrf=AE3TifPuFNT7sIN6lDONddGwvcsBkM5KmA:1758980132850&q=movie+list&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIepxPkVkiyvcVCXrRQKSfjcQaZDIJ_rZS9U2lXSeywwkxGF9iupk9JR4G4Cql0k_6uJQxVLJWb0WDtbgAmr-vSuzb1DQKmefgKmx7iZ2S8XkRVORuJyk7RpzBrMVSIVPMl7ezssR2gSqE1Fzz6I0SMKlBAXp9mJ9aUfqIlkr4PbYPW0CNGg&sa=X&ved=2ahUKEwjP-PDPh_mPAxVgdqQEHXPzOXwQ0pQJegQIChAB&biw=1280&bih=585&dpr=1.5"> movie list </a>';
     document.getElementById("linknop").innerHTML = "";
    document.getElementById("text").textContent = "choose and tell me witch one u want to watch"; 
});

document.getElementById("NAY").addEventListener("click", function() {
    console.log("NAY!")
    document.getElementById("image").src ="crchucky.gif"; 
     document.getElementById("yep").innerHTML = "";
     alert(" ahh you're so dead");
     document.getElementById("linknop").innerHTML = '<a href="https://blogger.googleusercontent.com/img/a/AVvXsEhbVNmMi3JRJiR-Vmaovg-95dPp5ItnBsfT18dag-0_vicxUY2aoqUV5WGeayAW4HE_ZgUdVVFajoYGjz3YJyzt-oio4b3i-Gs-JStpGYr50wVjeuRjq2MEoqVO6oYc4AbSwaFex_bmolETpxZaJGucIu90K43C38s_RZ1ykd24Yl6_BrZli0Autpo0=s499"> go here with all my love </a>';
    document.getElementById("text").textContent = "its okey, but u need to close all the doors and windows "; 
});


