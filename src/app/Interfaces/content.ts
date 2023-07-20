export interface pageTemplate {
    url: string;
    modules: Array<imageAndTextModule | module3Template | imageGridModule | landingModuleTemplate>
}

export interface imageAndTextModule {
    type: 'module1a' | 'module1b' | 'module2a' | 'module2b' | 'imageModule';
    backgroundColour: string;
    imgURL: string;
    text: Array<textTemplate | buttonTemplate | contactPage >
}
export interface module3Template {
    type: 'module3a' | 'module3b' | 'module3c' | 'module3d';
    backgroundColour: string;
    text1: Array<textTemplate | buttonTemplate | contactPage >;
    text2: Array<textTemplate | buttonTemplate | contactPage >;
    text3: Array<textTemplate | buttonTemplate | contactPage >
}
export interface imageGridModule {
    type: 'imageGrid';
    backgroundColour: string;
    images: Array<string>;
}
export interface landingModuleTemplate {
    type: 'landingModule';
    backgroundImg: string;
    text: Array<textTemplate | buttonTemplate>;
}
// more modules

export interface buttonTemplate {
    type: 'button';
    content: string;
    fontFamily: string;
    colour: string;
    redirectURL: string;
}

export interface textTemplate {
    type: 'text';
    content: string;
    fontFamily: string;
    fontColour: string;
    fontSize: number;
    fontWeight: 'thin' | 'normal' | 'bold';
    lineHeight: 'normal' | number;
}

// Custom templates
export interface contactPage {
    type: 'contact'
}
