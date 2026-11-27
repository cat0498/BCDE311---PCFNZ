const headerMount = document.getElementById("site-header");
const siteRoot = document.currentScript.dataset.siteRoot;

headerMount.outerHTML = `
    <div class="utility-bar">
        <div>
            <span>Reducing the impact of prostate cancer on New Zealand families</span>
            <div>
                <a href="mailto:info@prostate.org.nz">Email us</a>
                <a href="tel:0800477678">Call on 0800 477 678</a>
            </div>
        </div>
    </div>
    <header>
        <div class="header-div">
            <a href="${siteRoot}index.html" class="logo">
                <img src="${siteRoot}images/logo.webp" alt="Prostate Cancer Foundation NZ">
            </a>
        </div>
        <nav class="main-nav">
            <ul class="desktop-nav">
                <li><a href="../index.html">Home</a></li>
                <li class="nav-dropdown">
                    <details>
                        <summary>Where to Start?</summary>
                        <ul class="nav-dropdown-menu">
                            <li><a href="../pages/prostateinfo1.html">What is Prostate Cancer</a></li>
                            <li><a href="../pages/prostateinfo2.html">Getting Tested or Diagnosed</a></li>
                            <li><a href="../pages/prostateinfo3.html">Treatments</a></li>
                            <li><a href="../pages/prostateinfo4.html">Side Effects</a></li>
                        </ul>
                    </details>
                </li>
                <li class="nav-dropdown">
                    <details>
                        <summary>Whats Next?</summary>
                        <ul class="nav-dropdown-menu">
                            <li><a href="../pages/prostateinfo5.html">Talking to a Specialist</a></li>
                            <li><a href="../pages/prostateinfo6.html">Living Well</a></li>
                            <li><a href="../pages/prostateinfo7.html">Getting Support</a></li>
                            <li><a href="../pages/prostateinfo8.html">Getting Involved</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="../index.html#testimonial">Testimonial</a></li>
                <li><a href="../index.html#events">Events</a></li>
                <li><a href="../index.html#fundraising">Fundraising</a></li>
                <li><a class="nav-donate" href="https://prostate.org.nz/donations">Donate</a></li>
            </ul>
            <details class="mobile-nav-menu">
                <summary>
                    <span class="menu-icon"></span>
                    <span>Menu</span>
                </summary>
                <ul class="desktop-nav">
                    <li><a href="../pages/index.html">Home</a></li>
                    <li class="nav-dropdown">
                        <details>
                            <summary>Where to Start?</summary>
                            <ul class="nav-dropdown-menu">
                                <li><a href="../pages/prostateinfo1.html">What is Prostate Cancer</a></li>
                                <li><a href="../pages/prostateinfo2.html">Getting Tested or Diagnosed</a></li>
                                <li><a href="../pages/prostateinfo3.html">Treatments</a></li>
                                <li><a href="../pages/prostateinfo4.html">Side Effects</a></li>
                            </ul>
                        </details>
                    </li>
                    <li class="nav-dropdown">
                    <details>
                        <summary>Whats Next?</summary>
                        <ul class="nav-dropdown-menu">
                            <li><a href="../pages/prostateinfo5.html">Talking to a Specialist</a></li>
                            <li><a href="../pages/prostateinfo6.html">Living Well</a></li>
                            <li><a href="../pages/prostateinfo7.html">Getting Support</a></li>
                            <li><a href="../pages/prostateinfo8.html">Getting Involved</a></li>
                        </ul>
                    </details>
                </li>
                    <li><a href="../index.html#testimonial">Testimonial</a></li>
                    <li><a href="../index.html#events">Events</a></li>
                    <li><a href="../index.html#fundraising">Fundraising</a></li>
                    <li><a class="nav-donate" href="https://prostate.org.nz/donations">Donate</a></li>
                </ul>
            </details>
        </nav>
    </header>
`;
