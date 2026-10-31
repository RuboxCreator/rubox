const unlockedAchievements = new Set();

function unlockAchievement(id, name) {
    if (unlockedAchievements.has(id)) return;

    unlockedAchievements.add(id);

    alert("🏆 Achievement Unlocked: " + name);

    localStorage.setItem(
        "ruboxAchievements",
        JSON.stringify([...unlockedAchievements])
    );
}

function loadAchievements() {
    const data = localStorage.getItem("ruboxAchievements");

    if (!data) return;

    JSON.parse(data).forEach(a => unlockedAchievements.add(a));
}

loadAchievements();
