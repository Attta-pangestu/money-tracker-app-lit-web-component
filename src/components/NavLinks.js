import {html} from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
    render() {
        return html `
        <ul class="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center gap-3">
            <li class="nav-item">
                <a class="nav-link" href="/">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/transactions/add.html">Add Record</a>
            </li>
            <li class="nav-item dropdown d-none" id="userLoggedMenu">
                <a class="nav-link dropdown-toggle text-nowrap" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div style="width: 35px;height: 35px" class="me-2 d-inline-block">
                    <img id="imgUserLogged" class="img-fluid rounded-pill" src="" alt="">
                    </div>
                    <span id="nameUserLogged"></span>
                </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" id="userLogOut" href="#">Log Out</a></li>
            </ul>
            </li>
            <li class="nav-item" id="loginMenu">
                <a class="nav-link" href="#">Log In</a>
            </li>
      </ul>
        `;
    }

}

customElements.define('nav-links', NavLinks) ; 
