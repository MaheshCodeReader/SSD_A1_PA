
document.addEventListener("DOMContentLoaded", function() {
    

    const interval = setInterval(function(){
        let clock = document.querySelector("#clock");

        // console.log(clock);

        let now = new Date();

        // console.log(now);
        // console.log(now.toString());
        now = now.toString();
        now = now.split(" ");
        // console.log(now.split(" "));
        let res = "Now: ";

        for (let index = 0; index < now.length; index++) {
            if (index < 5) {
                res += now[index];
                res += " ";
            } else {
                break;
            }
        }

        // let existingContent = clock.innerText;
        clock.innerText = res;
    }, 900);







    
    
    const projectsTab = document.querySelector("#projects_link");
    projectsTab.addEventListener("click", function(){

        const contentWrapper = document.querySelector(".content-wrapper");
        // console.log(contentWrapper);
        let projects_content = `
    <div class="projects-content">
        <h1>Projects &#128293;</h1>
        <table>
            <caption>My Projects TABLE</caption>
            <thead>
                <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Logo</th>
                    <th scope="col">What it does?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">KHA RASHTRA</th>
                    <td><img  alt="पेट भरके खाना" class="academy_img" src="images/kha.png"></td>
                    <td>पेट भरके खाना</td>
                    
                </tr>
                <tr>
                    <th scope="row">DAAM</th>
                    <td><img alt="दाम सेही होगा काम!" class="academy_img" src="images/daam.png"></td>
                    <td>दाम सेही होगा काम!</td>
                    
                </tr>
                <tr>
                    <th scope="row">DHANDHO</th>
                    <td><img alt="कोई धंधा छोटा नहीं होता!" class="academy_img" src="images/dhandho.png"></td>
                    <td>कोई धंधा छोटा नहीं होता !</td>
                    
                </tr>
                
                
            </tbody>
            <tfoot>
            <tr>
                <th scope="row" colspan="2">Total Projects</th>
                <td colspan="1">3</td>
            </tr>
            </tfoot>
        </table>
    </div>`;

        contentWrapper.innerHTML = projects_content;
    });


    const educaitionTab = document.querySelector("#education_link");
    educaitionTab.addEventListener("click", function(){
        const contentWrapper = document.querySelector(".content-wrapper");
        // console.log(contentWrapper);
        let education_content = `<div class="education-content">
        <h1>Education</h1>
        <table>
            <caption>My EDUCTION TABLE</caption>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Academy</th>
                    <th scope="col">Marks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Masters</th>
                    <td>
                        <a target="_blank" href="https://www.iiit.ac.in">
                        <img alt="iiith logo" class="academy_img" src="images/iiit-new.png">
                        </a>
                    </td>
                    <td>pursuing</td>
                </tr>
                <tr>
                    <th scope="row">Batchlers</th>
                    <td>
                    <a target="_blank" href="https://www.sggs.ac.in">
                        <img alt="sggs logo" class="academy_img" src="images/sggs-logo.png">
                    </a>
                    </td>
                    <td>8.39 CGPA</td>
                </tr>
                <tr>
                    <th scope="row">HSC</th>
                    <td>
                        <a target="_blank" href="https://navodaya.gov.in">
                            <img alt="nvs logo" class="academy_img" src="images/nvs_logo.png">
                        </a>
                    </td>
                    <td>76.92 %</td>
                </tr>
                <tr>
                    <th scope="row">Matriculation</th>
                    <td><img alt="nvs logo" class="academy_img" src="images/nvs_logo.png"></td>
                    <td>10 CGPA</td>
                </tr>
                
            </tbody>
            <tfoot>
            <tr>
                <th scope="row" colspan="2">Total</th>
                <td colspan="1">4</td>
            </tr>
            </tfoot>
        </table>
    </div>`;

        contentWrapper.innerHTML = education_content;
    });

    const homeTab = document.querySelector("#home_link");
    homeTab.addEventListener("click", function(){
        const contentWrapper = document.querySelector(".content-wrapper");
        // console.log(contentWrapper);
        let home_content = `<div class="home-content">
        <!-- <h1>Home &#128293;</h1> -->
        <h1>Biography</h1>
        <p>I am a 22 year old student, dog lover and artist.</p>
        <p>I am currently a masters student at <a href="#">International Institute of Information Technology(IIIT), Hyderabad</a>. Working on various projects in the domain of software engineering and blockchain.</p>
        <p>I was previously working as a full stack developer at <a href="#">Kratin LLC</a>.</p>
        <p>Before that I did my bachelors in computer science at <a href="#">Shri Guru Gobind Singhji Institute of Technology(SGGS), Maharashtra</a>.</p>
        <p>I excessively love dogs, puzzles, travelling, partying and of course blabbering :D</p>
        <p>A wannabe music composer, I keep fiddling with my piano whenever I find time. I have also been trying to learn Tabla and Bansuri; the progress on that front has not been very impressive, but I still keep trying :D</p>

        <h2>Interests</h2>
        <ul id="interests">
            <li>Block Chain</li>
            <li>Deep Learning</li>
            <li>Artificial Intelligence</li>
            <li>Simulations</li>
        </ul>
        
    </div>`;

        contentWrapper.innerHTML = home_content;
    });

});



