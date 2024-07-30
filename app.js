function moveLift(floor) {
    const lift = document.getElementById('lift');
    const floorHeight = document.getElementById('floor-0').clientHeight;
    const buildingHeight = document.querySelector('.building').clientHeight;
    const newY = buildingHeight - ((floor + 1) * floorHeight);
    lift.style.transform = `translateY(${newY}px)`;
}
