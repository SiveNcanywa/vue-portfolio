<template>
   <nav class="navbar navbar-expand-lg">
       <div class="container-fluid">
        <div class="max-width">
            <div class="logo"><a href="#">Sive<span>CN.</span></a></div>
            <ul class="menu">
                <li><a href="#Home" class="menu-btn">Home</a></li>
                <li><a href="#About" class="menu-btn">About</a></li>
                <li><a href="#Resume" class="menu-btn">Resume</a></li>
                <li><a href="#Projects" class="menu-btn">Projects</a></li>
                <li><a href="#Skills" class="menu-btn">Skills</a></li>
                <li><a href="#Testimonials" class="menu-btn">Testimonials</a></li>
                <li><a href="#Contact" class="menu-btn">Contact</a></li>
            </ul>
            
        </div>
        </div>
    </nav>
</template>

 


<script>
export default {
  
};
</script>

<style scoped>
.navbar{
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 30px 0;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;
}
.navbar.sticky{
    padding: 15px 0;
    background: #00b8ca;
}
.navbar .max-width{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo a{
    color: #fff;
    font-size: 35px;
    font-weight: 600;
}
.navbar .logo a span{
    color: #00b8ca;
    transition: all 0.3s ease;
}
.navbar.sticky .logo a span{
    color: #fff;
}
.navbar .menu li{
    list-style: none;
    display: inline-block;
}
.navbar .menu li a{
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
}
.navbar .menu li a:hover{
    color: #00b8ca;
}
.navbar.sticky .menu li a:hover{
    color: #fff;
}
</style>
