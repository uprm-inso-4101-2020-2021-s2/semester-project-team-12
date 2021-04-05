<?php
    include_once 'header.php';
?>

    <section class="signup-form"> 
        <h2>Log In</h2>
        <div class="signup-form-form">
            <form action="includes/login.inc.php" method="post">
                <input type="text" name="uid" placeholder="Username/Email...">
                <input type="password" name="pwd" placeholder="Password...">
                <button type="submit" name="submit">Log In</button>
            </form>
            <a href="signup.php"><input type="image" 
            src="https://images-ext-2.discordapp.net/external/P_v5VRE-8tFmPv91CTR2TXTz0zpzWMfc-qsNRAZDcOs/http/goglendale.org/wp-content/uploads/2018/07/Sign-Up-Button-PNG-HD.png" 
            name="submit" width="250" height="100" alt="submit"/>
     </div>
<?php 
    if (isset($_GET["error"])) {
        if ($_GET["error"] == "emptyinput") {
            echo "<p> Fill in all fields!</p>";
        }

    else if ($_GET["error"] == "wronglogin") {
        echo "<p> Incorrect login!</p>";
    }
}
?>
</section>

<?php
    include_once 'footer.php'
    ?>
