function Heading() {
    return (
        <header id="site-header" class="fixed-top">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg stroke">
                    <h1>
                        <a class="navbar-brand d-flex align-items-center" href="index.html">
                            <img src="assets/images/logo.png" alt="" class="mr-1" />Ed-Learn</a>
                    </h1>

                    <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#courses-page">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact-page">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Heading;