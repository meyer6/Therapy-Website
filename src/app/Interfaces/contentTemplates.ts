export interface buttonTemplate {
    type: 'button';
    content: string;
    fontFamily: string;
    colour: string;
    centre?: boolean;
    filled?: boolean;
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

export interface imageTemplate {
    type: 'image';
    src: string;
    height?: string;
    width?: string;
    borderRadius?: string;
}

export interface iFrameTemplate {
    type: 'iframe';
    src: string;
    width?: string;
    aspectRatio?: string;
}

// Custom templates
export interface contactPage {
    type: 'contact'
}
