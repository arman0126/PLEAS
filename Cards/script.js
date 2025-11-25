const users = [
  {
    fullName: "Aman Verma",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400",
    profession: "Frontend Developer",
    description: "Aman specializes in React, Tailwind CSS, and building modern UI."
  },
  {
    fullName: "Riya Sharma",
    image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Graphic Designer",
    description: "Riya creates digital illustrations and brand identities."
  },
  {
    fullName: "Kunal Singh",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Data Analyst",
    description: "Kunal works on Python, SQL, analytics, and dashboards."
  },
  {
    fullName: "Sanya Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    profession: "AI Research Intern",
    description: "Sanya is passionate about machine learning and NLP."
  },
  {
    fullName: "Vikas Mehta",
    image: "https://plus.unsplash.com/premium_photo-1705883266860-81c76b274f3b?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Backend Developer",
    description: "Vikas works with Java, Spring Boot, and APIs."
  }
];


var sum = ''

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src=${elem.image}alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})
var main = document.querySelector('main')
main.innerHTML = sum 



