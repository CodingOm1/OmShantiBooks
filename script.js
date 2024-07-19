document.getElementById("hamburger").addEventListener("click", function () {
    const bar1 = document.querySelector("#bar1");
    const bar2 = document.querySelector("#bar2");
    const bar3 = document.querySelector("#bar3");


      const linktab = document.querySelector(".links")

      linktab.classList.toggle("navOpen")
    // Check if the first bar (bar1) is in the active state
    const isActive = bar1.style.transform === "translate(0px, 4px) rotate(45deg)";

    if (!isActive) {
        // Apply styles to show the cross icon
        bar1.style.transform = "translate(0px, 4px) rotate(45deg)";
        bar2.style.opacity = "0";
        bar2.style.width = "0%";
        bar3.style.transform = "translate(0px, -4px) rotate(-45deg)";
    } else {
        // Apply styles to show the hamburger icon
        bar1.style.transform = "none";
        bar2.style.opacity = "1";
        bar2.style.width = "100%";
        bar3.style.transform = "none";
    }
});
// Function to store visit information in localStorage
function storeVisitInfo() {
    const visitInfo = {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        title: document.title
    };
    
    // Store the visit info in localStorage
    localStorage.setItem('lastVisitInfo', JSON.stringify(visitInfo));
}

// Function to retrieve and display the last visit info
function getLastVisitInfo() {
    const visitInfo = localStorage.getItem('lastVisitInfo');
    
    if (visitInfo) {
        const parsedInfo = JSON.parse(visitInfo);
        console.log('Last visited page details:');
        console.log(`URL: ${parsedInfo.url}`);
        console.log(`Title: ${parsedInfo.title}`);
        console.log(`Timestamp: ${parsedInfo.timestamp}`);
    } else {
        console.log('No visit information found.');
    }
}

// Call the function to store visit information
storeVisitInfo();

// Call the function to display the last visit information
getLastVisitInfo();

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.event');
  
    elements.forEach((element, index) => {
        const hideTimeKey = `hideTime-${index}`;
        const addTime = localStorage.getItem(hideTimeKey);
  
        if (addTime) {
            const now = new Date().getTime();
            const fiveDays = 5 * 24 * 60 * 60 * 1000;
  
            if (now >= parseInt(addTime) + fiveDays) {
                element.classList.add('block-none');
            } else {
                const remainingTime = parseInt(addTime) + fiveDays - now;
  
                setTimeout(() => {
                    element.classList.add('block-none');
                }, remainingTime);
            }
        } else {
            const currentTime = new Date().getTime();
            localStorage.setItem(hideTimeKey, currentTime);
        }
    });
  });
  
