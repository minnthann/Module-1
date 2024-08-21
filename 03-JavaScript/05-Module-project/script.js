var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttck = 10;
var playerMoney =10;

console.log (playerName, playerAttck, playerHealth);

var enemyName ="Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert ("Welcome to Robot Gladiators");

    var promptFight = window.prompt ('would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose. ');

    if (promptFight === "fight" || promptFight === "FIGHT"){
        enemyHealth = enemyHealth - playerAttck;
        console.log(
            playerName + "attacked" + enemyName + ". " + 
            enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0) {
            window.alert (enemyName + " has died!");
        }else {
            window.alert(enemyName + " still has" + enemyHealth + "health left.");
        }
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked" + playerName + ". " +
            playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
            window.alert (playerName + " has died!");
        }else {
            window.alert (playerName + "still has " + playerHealth + " health left.");
        }
    }else if (promptFight === "skip" || promptFight === "SKIP"){
        var confimSkip = window.confirm("Are you sure you'd like to quit?");

        if(confimSkip){
            window.alert(playerName + " has dicided to skip this fight. Goodby!");
            playerMoney = playerMoney - 2;
        }
        else{
            fight();
        }
    }else {
    window.alert("You need to pick a valid option. Try again!");
    }
};
fight();