import {html} from 'lit' ; 
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextAreaWithValidation extends LitWithoutShadowDom {
    static properties = {
        classes : {type:String, reflect:true}, 
        rows : {type:String, reflect:true},
        inputId : {type:String, reflect:true}, 
    }

    render() {
        return html `
            <textarea class="form-control" id="${this.inputId}" rows="${this.rows}"></textarea>
            
        `;
    }
}

customElements.define('textarea-with-validation', TextAreaWithValidation) ; 