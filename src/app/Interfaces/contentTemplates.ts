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
