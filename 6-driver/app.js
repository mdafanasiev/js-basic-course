const hasLicense = true;
const age = 17;
const isDrunk = true;

const canDrive = age >= 18 && hasLicense && !isDrunk ? "может" : "не может";
