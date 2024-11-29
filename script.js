const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
            image.addEventListener("click", (e) => {
            image.classList.add("active");
            userResult.src = cpuResult.src="images/rock.png";
            result.textContent = "Wait...";
                        // Loop through each option image again
                        optionImages.forEach((image2, index2) => {
                        // If the current index doesn't match the clicked index
                        // Remove the "active" class from the other option images
                        index !== index2 && image2.classList.remove("active");
                        });
                        gameContainer.classList.add("Start");
                        let time = setTimeout( ()=>
                        {
                            gameContainer.classList.remove("Start");
                                 // Get the source of the clicked option image
                        let imageSrc =  e.target.querySelector("img").src;
                        userResult.src = imageSrc; 
                        // Generate a random number between 0 and 2
                        let randomNumber = Math.floor(Math.random() * 3);
                        // Create an array of CPU image options
                        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
                        // Set the CPU image to a random option from the array
                        cpuResult.src = cpuImages[randomNumber];
                        // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
                        let cpuValue = ["R", "P", "S"][randomNumber];
                        // Assign a letter value to the clicked option (based on index)
                        let userValue = ["R", "P", "S"][index];
                        console.log(cpuValue, userValue);

                        // Create an object with all possible outcomes
                    let outcomes = {
                                    RR: "Draw",
                                    RP: "Cpu",
                                    RS: "User",
                                    PP: "Draw",
                                    PR: "User",
                                    PS: "Cpu",
                                    SS: "Draw",
                                    SR: "Cpu",
                                    SP: "User",
                        };
                        // Look up the outcome value based on user and CPU options
                        let outComeValue = outcomes [userValue + cpuValue];
                        console.log(outComeValue);
                        //Display the result
                        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

                        },2500)
    
    });
    });
    //Added the deployment link through vercel.