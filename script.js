document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2024-12-16");
    const endDate = new Date("2024-12-25");
    const today = new Date();
    const boxesContainer = document.querySelector(".container");

    const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 0; i < days; i++) {
        const boxDate = new Date(startDate);
        boxDate.setDate(boxDate.getDate() + i);
        const box = document.createElement("div");
        box.className = "box";
        box.id = `box${i + 1}`;
        const isUnlocked = today >= boxDate;

        box.innerHTML = `
            <div class="cover">${boxDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
            })}</div>
            <div class="content" style="display: ${isUnlocked ? "block" : "none"};">
                <p>${isUnlocked ? "Your surprise!" : "Wait for this day!"}</p>
            </div>
        `;
        boxesContainer.appendChild(box);

        if (!isUnlocked) {
            box.addEventListener("click", () => alert("Not yet! Wait for the right day!"));
        }
    }
});
