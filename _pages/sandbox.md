---
layout: page
title: "Sandbox"
permalink: /sandbox/
---
<div class="content-wrapper">
    <p>This is the sandbox:</p>
</div>
<div id="sand-box1">
1 loading...
</div>
<div id="sand-box2">
2 loading...
</div>
<script>
(function(){
    fetch('/helloworld')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sand-box1').innerHTML = data;
    });
    fetch('/foo/bar')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sand-box2').innerHTML = data;
    });
}());
</script>
<style>
#sand-box1 {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
}
#sand-box2 {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
}
</style>