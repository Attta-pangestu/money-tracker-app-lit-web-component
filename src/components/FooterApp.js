import {html} from 'lit' ; 
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
    render() {
        return html `
            <footer>
                <div class="main-footer bg-dark">
                    <div class="container px-3 py-4">
                        <p class="text-center text-white mb-0">Made with ❤ by Dicoding Indonesia</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-app', FooterApp) ; 