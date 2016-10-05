var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name" : "Antonio Carlos Nogueira Junior",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : {
      "celular 1" : "(13)99107-5082",
      "celular 2" : "(11)94687-1908",
      "residencial" : "(13)34666307"
    },
    "emails" : {
      "Gmail" : "nog.junior84@gmail.com",
      "Outlook" : "nogueira_junior@outlook.com.br",
      "Yahoo" : "nogueira_junior@yahoo.com.br"
    },
    "github" : "acnjr2010",
    "twitter" : "acnjr2010",
    "linkedin" : "https://br.linkedin.com/in/antonio-carlos-nogueira-junior-88958251",
    "locations" : {
      "principal" : "São Vicente",
      "alternative" : "São Paulo"
    }
  },
  "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  "skills" : [
    "Ruby", "Rails", "GitHub", "Ubuntu", "Atom"
  ],
  "bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/079/00a/3c2295b.jpg"
}
