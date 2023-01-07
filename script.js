<script>
function showPassword() {
    var inp = document.getElementById("psw");

    if (inp.type === "password") {
        inp.type = "text";
    } else {
        inp.type = "password";
    }
}
</script>
