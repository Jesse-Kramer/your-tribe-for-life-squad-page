<script>
    /** @type {import('./$types').PageData} */
    // export let data;
    import fdnd from "$lib/assets/fdnd.png"
</script>

<footer>
    <div class="footer-content">
      <div class="footer-left">
        <h3>Onze developers</h3>
        <ul>
          <li><a href="https://github.com/J3SS3HVA">Jesse Leeuwerink</a></li>
          <li><a href="https://github.com/Jesse-Kramer">Jesse Kramer</a></li>
          <li><a href="https://github.com/driezie">Jelte Cost</a></li>
          <li><a href="https://github.com/Patrickkhr">Patrick Hordijk</a></li>
          <li><a href="https://github.com/Mossati">Mohammed El Mossati</a></li>
          <li><a href="https://github.com/yassirog">Yassir Bghiel</a></li>
        </ul>
      </div>


      <div class="footer-right">
        <img src="{fdnd}" alt="Logo" class="footer-logo">
        <p onclick="window.open('https://media.tenor.com/5qFC_6TdrKsAAAAM/quincy-bloons-td-6.gif', '_blank')">© Copyright 2024</p>

      </div>
    </div>
  </footer>

  <style>
footer {
  background-color: #232323;
  color: #fff;
  padding: 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.footer-left h3 {
  margin-bottom: 10px;
}

.footer-left ul {
  list-style: none;
  padding: 0;
}

.footer-left li {
  margin-bottom: 5px;
}

.footer-left li a {
  text-decoration: none;
  color: #fff;
  transition: text-decoration 1s ease;
}

.footer-left li a:hover {
  text-decoration: underline;
  text-decoration-color: #8f8f8f67;
}

.footer-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
}

.footer-right p{
    color: #8f8f8f67;
}

.footer-logo {
  max-width: 100px;
  margin-bottom: 10px;
}

.footer-right p {
  margin: 0;
}

  </style>
