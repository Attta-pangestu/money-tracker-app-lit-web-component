import {html, nothing} from 'lit' ; 
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'; 

class InputImageWithPreview extends LitWithoutShadowDom {
    static properties = {
        inputId : {type:String, reflect:true},
        defaultImage : {type:String, reflect:true},
        defaultImageAlt : {type:String, reflect:true},
        validFeedbackMessage : {type:String, reflect:true},
        invalidFeedbackMessage : {type:String, reflect:true},
        required : {type:Boolean, reflect:true},
    }

    constructor() {
        super() ;

        this.type = 'text' ; 
        this.defaultImage = '' ; 
        this.defaultImageAlt = '' ; 

    }

    render() { `
                <div class="w-100 mb-3 ${this.defaultImage? '' : 'd-none'} " style="height:20rem" >
                    ${this._imagePreviewTemplate()}
                </div>
                <input
                    type="file"
                    class="form-control"
                    id=${this.inputId}
                    accept="image/*"
                    ?required=${this.required}
                    @change=${this._updatePhotoReview}

                />
                ${this._feedbackTemplate()}
    `;        
    }

    _imagePreviewTemplate() {
        const imgChangeTemplate = html `
            <div 
            class="w-100 h-100 ${this.defaultImage? '' : 'd-none'}"
            style="
                    background-repeat:no-repeat, 
                    background-position: center, 
                    background-size : contain
            "
            id="${this.inputId || nothing}ImgChange"
            ></div>
        `;

        if(this.defaultImage) {
            return html `
                <img
                    class="img-fluid h-100"
                    src="${this.defaultImage}"
                    alt="${this.defaultImageAlt}"
                    id="${this.inputId || nothing}Img"
                    
                />
                ${imgChangeTemplate}
            `;
        }
        return html `${imgChangeTemplate}`;
    }
}

customElements.define('input-image-with-preview', InputImageWithPreview) ; 

