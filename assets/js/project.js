let blogs = []

// alert project page
function formAlert() {
  let title = document.getElementById("title").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let projectDescription = document.getElementById("projectDescription").value;
  let reactJS = document.getElementById("reactJS").value;
  let nodeJS = document.getElementById("nodeJS").value;
  let nextJS = document.getElementById("nextJS").value;
  let typeScript = document.getElementById("typeScript").value;
  let imageProject = document.getElementById("imageProject").value;
  
  if(title == "") {
      return alert("Input the title of project, please!");
  } else if(startDate == "") {
      return alert("Input start of Project's date, please!");
  } else if(endDate == "") {
      return alert("Input end of Project's date, please!");
  } else if(projectDescription == "") {
      return alert("Input description, please!");
  } else if( reactJS.checked == "" || nodeJS.checked == "" || nextJS.checked == "" || typeScript.checked == "") {
      return alert("Choose technology, please!");
  } else if(imageProject == "") {
      return alert("Inpu an image, please!");
  }
};

// event time
function getBlog(event){
    event.preventDefault()

    function getDistanceTime(){
      let diff = new Date(endDate) - new Date(startDate);

      let days = Math.floor(diff / (24 * 60 * 60 * 1000));
      let months = Math.floor(days / 30);
      let years = Math.floor(months / 12);
      let remainingDays = days % 30;
      let remainingMonths = months % 12;
      let daysAffix = `$`
    
      if (years > 0 && remainingMonths > 0 && remainingDays > 0) {
          return `${years} Years ${remainingMonths} Months ${remainingDays} Days`;
      } else if (years > 0 && remainingMonths > 0 && remainingDays == 0){
          return `${years} Years ${remainingMonths} Months`;
      } else if (years > 0 && remainingMonths == 0 && remainingDays == 0){
          return `${years} Years`;
      } else if (years > 0 && remainingMonths == 0 && remainingDays > 0){
          return `${years} Years ${remainingDays} Days`;
      } else if (years == 0 && remainingMonths > 0 && remainingDays > 0){
          return `${remainingMonths} Months ${remainingDays} Days`;
      } else if (years == 0 && remainingMonths > 0 && remainingDays == 0){
          return `${remainingMonths} Months`;
      } else if (years == 0 && remainingMonths == 0 && remainingDays > 0){
          return `${remainingDays} Days`;
      } 
  }

// input form project
    let title = document.getElementById("title").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let projectDescription = document.getElementById("projectDescription").value
    let imageProject = document.getElementById("imageProject").files
    let duration = getDistanceTime()

    const nodeJS = `<img src="images/nodejs.png" alt="nodejs">`;
    const nextJS = `<img src="images/reactjs.png" alt="reactjs">`;
    const reactJS = `<img src="images/reactjs.png" alt="reactjs">`;
    const typeScript = `<img src="images/typescript.png" alt="typescript">`;
    
    let nodeJsIMG = document.getElementById("nodeJS").checked ? nodeJS : "";
    let nextJsIMG = document.getElementById("nextJS").checked ? nextJS : "";
    let typeScriptIMG = document.getElementById("typeScript").checked ? typeScript : "";
    let reactJsIMG = document.getElementById("reactJS").checked ? reactJS : "";
    
    imageURL = URL.createObjectURL(imageProject[0])

    let projects = {
        title,
        duration,
        projectDescription,
        nodeJsIMG,
        nextJsIMG,
        typeScriptIMG,
        reactJsIMG,
        imageURL,
        author: "Nafiisan N. Achmad",
    }

    blogs.push(projects);    
    renderBlog();
}

function renderBlog(){
  document.getElementById("project").innerHTML = "";

  for(let i = 0; i < blogs.length; i++) {
    document.getElementById("project").innerHTML += `
    <div class="listProject">
        <div class="itemProject">
          <div class="header">
            <img src="${blogs[i].imageURL}" alt="assasin" class="imageP"/>
            <div class="titleP">
              <b>
              <a href="project-detail.html" target="_blank"
              >${blogs[i].title}</a>
              </b>
            </div>
            <div class="detailP">
              ${blogs[i].duration} 
            </div>
            <div style="float:right; margin: 10px">
              <p style="font-size: 15px; color:rgb(75, 70, 70)">
              ${blogs[i].author}
              </p>
            </div>
          </div>
          <div class="projectContent">
            <p>
              ${blogs[i].projectDescription}
            </p>
          </div>
          <div class="technology">
              ${blogs[i].nodeJsIMG}
              ${blogs[i].reactJsIMG}
              ${blogs[i].nextJsIMG}
              ${blogs[i].typeScriptIMG}
            </div>
          <div class="btnGroups">
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
          </div>
        </div>
      </div>
    `
  }
    
}


